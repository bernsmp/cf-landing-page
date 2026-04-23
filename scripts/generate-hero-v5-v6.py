"""
Two hero variants without cigarette/smoke element.
- hero-v5.png: GENERIC back-to-back silhouettes (no likeness refs, no props)
- hero-v6.png: Naval x Bourdain back-to-back, no cigarette, no smoke
Both 16:9, canvas-bleed.
"""

from __future__ import annotations

import concurrent.futures
import io
import os
import sys
import time
from pathlib import Path

from google import genai
from google.genai import types
from PIL import Image

ENV_PATH = Path.home() / "Desktop/max-command-center/.env.local"
OUTPUT_DIR = Path(__file__).resolve().parent.parent / "public" / "remixroom"
REFS_DIR = Path(__file__).resolve().parent / "refs"


def load_env() -> None:
    for line in ENV_PATH.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, value = line.partition("=")
        os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))


PROMPTS: list[dict] = [
    {
        "id": "hero-v5",
        "aspect": "16:9",
        "refs": [],
        "prompt": (
            "Wide 16:9 composition entirely in a pure deep charcoal void that fills every "
            "edge. Two generic human profile silhouettes in warm ivory sit at the center of "
            "the frame, positioned back-to-back facing opposite directions, the crowns of "
            "their heads touching at the absolute center creating a single fused two-headed "
            "form. The silhouettes are universal and anonymous: no specific likeness, no "
            "identifying props, no facial hair, no glasses, clean human profile shapes. At "
            "the point where their crowns meet, a small warm-gold glow emanates between "
            "them as if a shared thought is kindling. Outer 20 percent of the frame on all "
            "sides is pure deep charcoal #0a0a0b so the image dissolves into page canvas "
            "with no visible border. A single museum spotlight from above carves only the "
            "silhouette edges with subtle rim light. Palette: absolute deep charcoal "
            "#0a0a0b, warm ivory #F0EDE6 silhouette edges, one accent of warm gold #ffb829 "
            "at the fusion point. Mood: monumental, editorial, archival, philosophical. "
            "Wide horizontal negative space to the left and right of the silhouettes "
            "appropriate to the 16:9 ratio. No text, no logos, no props, no smoke, no "
            "cigarettes."
        ),
    },
    {
        "id": "hero-v6",
        "aspect": "16:9",
        "refs": ["naval-ravikant.jpg", "anthony-bourdain.jpg"],
        "prompt": (
            "Wide 16:9 composition entirely in a pure deep charcoal void that fills every "
            "edge. Two profile silhouettes in warm ivory sit at the center, positioned "
            "back-to-back facing opposite directions, the crowns of their heads touching at "
            "the absolute center of the frame, creating a single fused two-headed form. Use "
            "the two reference photographs to inform likeness ONLY — render as stylized "
            "silhouettes. The LEFT-facing silhouette resembles the first reference figure: "
            "ascetic, clean-shaven, close-cropped hair, calm resting expression. The "
            "RIGHT-facing silhouette resembles the second reference figure: longer slightly "
            "unkempt hair, weathered jaw, strong profile, clean-shaven lips with no "
            "cigarette and no smoke. At the point where their crowns meet, a small warm-gold "
            "glow emanates between them as if a shared thought is kindling. Outer 20 percent "
            "of the frame on all sides is pure deep charcoal #0a0a0b so the image dissolves "
            "into page canvas with no visible border. Museum spotlight from above carves "
            "only the silhouette edges. Palette: absolute deep charcoal #0a0a0b, warm ivory "
            "#F0EDE6 silhouette edges, one accent of warm gold #ffb829 at the fusion point. "
            "Mood: monumental, editorial, archival, philosophical. Wide horizontal negative "
            "space appropriate to 16:9. The silhouettes should resemble the reference "
            "figures in profile shape. No cigarettes, no smoke, no props, no text, no logos."
        ),
    },
]


def generate_one(client: genai.Client, spec: dict) -> tuple[str, str]:
    concept_id = spec["id"]
    try:
        contents: list = []
        for ref_name in spec.get("refs", []):
            ref_path = REFS_DIR / ref_name
            contents.append(Image.open(ref_path))
        contents.append(spec["prompt"])

        response = client.models.generate_content(
            model="gemini-3-pro-image-preview",
            contents=contents,
            config=types.GenerateContentConfig(
                response_modalities=["TEXT", "IMAGE"],
                image_config=types.ImageConfig(
                    image_size="2K",
                    aspect_ratio=spec["aspect"],
                ),
            ),
        )
        for part in response.candidates[0].content.parts:
            if part.inline_data and part.inline_data.data:
                img = Image.open(io.BytesIO(part.inline_data.data))
                path = OUTPUT_DIR / f"{concept_id}.png"
                img.save(path, format="PNG")
                return (concept_id, f"OK  {path.name}  {img.size[0]}x{img.size[1]}")
        return (concept_id, f"FAIL {concept_id}: no image returned")
    except Exception as e:
        return (concept_id, f"FAIL {concept_id}: {type(e).__name__}: {e}")


def main() -> None:
    load_env()
    client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    t0 = time.time()
    with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:
        futures = {pool.submit(generate_one, client, s): s["id"] for s in PROMPTS}
        for f in concurrent.futures.as_completed(futures):
            cid, msg = f.result()
            print(f"[{time.time() - t0:6.1f}s] {msg}")
            sys.stdout.flush()


if __name__ == "__main__":
    main()
