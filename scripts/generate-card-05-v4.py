"""
Card 05 v4: Naval × Bourdain as an across-the-bar composition.
Different from the hero (which uses back-to-back silhouettes).
1:1 aspect. Uses the same reference pair. Canvas-bleed.
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
    "Square 1:1 composition. Two full-body silhouettes seated across from each other at a "
    "worn wooden bar counter, rendered in warm ivory against a pure deep charcoal void "
    "that fills every edge of the frame. Use the two reference photographs to inform "
    "likeness ONLY — render as stylized silhouettes, not photographs. The LEFT silhouette "
    "resembles the first reference figure: ascetic build, clean-shaven, close-cropped "
    "hair, one hand resting on the bar with a sharp pencil in a pinch grip. The RIGHT "
    "silhouette resembles the second reference figure: taller build, longer slightly "
    "unkempt hair, weathered jaw, a subtle cigarette silhouette at the lips, one hand "
    "wrapped around a short rocks glass. Between them on the bar sits a single folded "
    "paper napkin with three concentric circles and an arrow drawn in warm ivory. A thin "
    "curl of cigarette smoke rises between the two figures. Outer 30 percent of the frame "
    "is pure deep charcoal #0a0a0b with no visible floor, wall, or bar-stool base — the "
    "scene floats in void. A single warm tungsten key light from above carves only the "
    "silhouette edges and the napkin. Palette: absolute deep charcoal #0a0a0b, warm ivory "
    "#F0EDE6 silhouettes and napkin, warm gold #ffb829 accent on the rocks glass and the "
    "rising smoke. The silhouettes should clearly resemble the reference figures. Mood: "
    "cinematic noir conversation, systems thinking at dinner service, philosophy across a "
    "bar. No text on the napkin (the diagram is geometric only), no logos."
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
                aspect_ratio="1:1",
            ),
        ),
    )

    for part in response.candidates[0].content.parts:
        if part.inline_data and part.inline_data.data:
            img = Image.open(io.BytesIO(part.inline_data.data))
            path = OUTPUT_DIR / "05-naval-bourdain-v4.png"
            img.save(path, format="PNG")
            print(f"OK  {path.name}  {img.size[0]}x{img.size[1]}")
            return
    print("FAIL no image returned")


if __name__ == "__main__":
    main()
