"""
Hero v4: back-to-back silhouettes (Naval × Bourdain concept) reframed as 16:9.
Uses same reference pair. Output: hero-v4.png
"""

from __future__ import annotations

import io
import os
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


PROMPT = (
    "Wide 16:9 composition with the full frame as a pure deep charcoal void. Two profile "
    "silhouettes in warm ivory sit at the center, positioned back-to-back facing opposite "
    "directions with the crowns of their heads touching at the absolute center of the "
    "frame, creating a single fused two-headed form. Use the two reference photographs to "
    "inform likeness ONLY — render the final image as stylized silhouettes, not "
    "photographs. The LEFT-facing silhouette resembles the first reference figure: "
    "ascetic, clean-shaven, close-cropped hair. The RIGHT-facing silhouette resembles "
    "the second reference figure: longer slightly unkempt hair, rugged weathered jaw, a "
    "subtle cigarette silhouette at the lips. Between their heads at the fusion point a "
    "thin curl of warm-gold-lit smoke rises. Outer 20 percent of the frame on all sides is "
    "pure deep charcoal #0a0a0b so the image dissolves into page canvas with no visible "
    "border or frame edge. Additional negative space extends well to the left and right of "
    "the silhouettes, keeping the fused heads compositionally centered with wide empty "
    "voids at both horizontal edges appropriate to the 16:9 aspect ratio. Museum spotlight "
    "from above carves only the silhouette edges; everything else falls off to pure "
    "charcoal. Palette: absolute deep charcoal #0a0a0b, warm ivory #F0EDE6 silhouette "
    "edges, one accent of warm gold #ffb829 on the rising smoke. Mood: monumental, "
    "editorial, archival, philosophical. The silhouettes should clearly resemble the "
    "reference figures in profile shape. No text, no logos."
)


def main() -> None:
    load_env()
    client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    refs = [
        Image.open(REFS_DIR / "naval-ravikant.jpg"),
        Image.open(REFS_DIR / "anthony-bourdain.jpg"),
    ]

    response = client.models.generate_content(
        model="gemini-3-pro-image-preview",
        contents=[*refs, PROMPT],
        config=types.GenerateContentConfig(
            response_modalities=["TEXT", "IMAGE"],
            image_config=types.ImageConfig(
                image_size="2K",
                aspect_ratio="16:9",
            ),
        ),
    )

    for part in response.candidates[0].content.parts:
        if part.inline_data and part.inline_data.data:
            img = Image.open(io.BytesIO(part.inline_data.data))
            path = OUTPUT_DIR / "hero-v4.png"
            img.save(path, format="PNG")
            print(f"OK  {path.name}  {img.size[0]}x{img.size[1]}")
            return
    print("FAIL no image returned")


if __name__ == "__main__":
    main()
