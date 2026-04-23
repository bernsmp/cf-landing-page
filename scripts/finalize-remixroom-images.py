"""
Finalize the winning Remix Room images.

For each winner:
1. Open source PNG
2. Apply a radial fade that hard-clamps the outer 10-15% to exactly #0a0a0b
   (the page canvas color). Guarantees edges dissolve into the page with no
   visible border under any inspection.
3. Export a WebP at display resolution.
4. Save with canonical filename (no version suffix).
5. Move source PNGs into /source/ for preservation.
"""

from __future__ import annotations

import shutil
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
IMG_DIR = ROOT / "public" / "remixroom"
SOURCE_DIR = IMG_DIR / "source"
ARCHIVE_DIR = IMG_DIR / "archive"

CANVAS_HEX = "#0a0a0b"
FADE_START = 0.70   # keep image unchanged from center to 70% of max radius
FADE_END = 0.92     # fully replaced with canvas color from 92% outward

# Winner map: canonical name -> source filename
WINNERS: dict[str, str] = {
    "hero":                   "hero-v4.png",
    "01-ted-talk-upgrader":   "01-ted-talk-upgrader-v3.png",
    "02-thread-architect":    "02-thread-architect-v3.png",
    "03-cold-open-machine":   "03-cold-open-machine-v3.png",
    "04-newsletter-skeleton": "04-newsletter-skeleton-v3.png",
    "05-naval-bourdain":      "05-naval-bourdain-v5.png",
    "06-rubin-ogilvy":        "06-rubin-ogilvy-v5.png",
    "07-hemingway-twain":     "07-hemingway-twain-v5.png",
    "08-king-godin":          "08-king-godin-v3.png",
    "09-jobs-seinfeld":       "09-jobs-seinfeld-v5.png",
}

# Export sizes: hero is wider, cards are square
TARGET_SIZE = {
    "hero": 1920,     # max dimension for 16:9 hero
    "card": 1200,     # max dimension for 1:1 cards
}


def hex_to_rgb(hx: str) -> tuple[int, int, int]:
    hx = hx.lstrip("#")
    return int(hx[0:2], 16), int(hx[2:4], 16), int(hx[4:6], 16)


def canvas_bleed(img: Image.Image) -> Image.Image:
    """Force outer edges to pure canvas color via radial mask."""
    arr = np.asarray(img.convert("RGB"), dtype=np.float32)
    h, w = arr.shape[:2]
    target = np.array(hex_to_rgb(CANVAS_HEX), dtype=np.float32)

    y, x = np.ogrid[:h, :w]
    cy, cx = h / 2.0, w / 2.0
    max_dist = np.sqrt(cy * cy + cx * cx)
    dist = np.sqrt((y - cy) ** 2 + (x - cx) ** 2) / max_dist  # 0 at center, 1 at corner

    mask = np.clip(1.0 - (dist - FADE_START) / (FADE_END - FADE_START), 0.0, 1.0)
    mask = mask[..., None]
    blended = arr * mask + target * (1.0 - mask)
    return Image.fromarray(np.clip(blended, 0, 255).astype(np.uint8))


def resize_max(img: Image.Image, max_dim: int) -> Image.Image:
    w, h = img.size
    scale = max_dim / max(w, h)
    if scale >= 1.0:
        return img
    new_w, new_h = int(w * scale), int(h * scale)
    return img.resize((new_w, new_h), Image.LANCZOS)


def main() -> None:
    SOURCE_DIR.mkdir(parents=True, exist_ok=True)
    print(f"Finalizing {len(WINNERS)} images")
    print("-" * 60)

    for canonical, src_name in WINNERS.items():
        src = IMG_DIR / src_name
        if not src.exists():
            print(f"MISS  {canonical:26s}  source {src_name} not found")
            continue

        img = Image.open(src)
        bled = canvas_bleed(img)
        target_size = TARGET_SIZE["hero"] if canonical == "hero" else TARGET_SIZE["card"]
        resized = resize_max(bled, target_size)

        out_webp = IMG_DIR / f"{canonical}.webp"
        resized.save(out_webp, format="WEBP", quality=88, method=6)
        webp_kb = out_webp.stat().st_size // 1024

        # Also keep a finalized PNG fallback at display size (no need to keep 5MB 2K)
        out_png = IMG_DIR / f"{canonical}.png"
        # Only overwrite PNG if canonical collides with a version-suffixed file
        if out_png.exists() and out_png != src:
            shutil.move(out_png, SOURCE_DIR / out_png.name)
        resized.save(out_png, format="PNG", optimize=True)
        png_kb = out_png.stat().st_size // 1024

        # Move the source PNG aside (preserve originals)
        if src.name != f"{canonical}.png":
            shutil.move(src, SOURCE_DIR / src.name)

        print(f"OK    {canonical:26s}  {resized.size[0]}x{resized.size[1]}  webp={webp_kb}KB  png={png_kb}KB")

    print("-" * 60)
    print("Done. Sources preserved in public/remixroom/source/")


if __name__ == "__main__":
    main()
