"""
Second batch: figure-based Collide pack variants.
Same pipeline as v1, different prompts, -v2 suffix on filenames.
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


def load_env() -> None:
    if not ENV_PATH.exists():
        raise SystemExit(f"Missing env file: {ENV_PATH}")
    for line in ENV_PATH.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, value = line.partition("=")
        os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))


PROMPTS: list[dict[str, str]] = [
    {
        "id": "05-naval-bourdain-v2",
        "aspect": "1:1",
        "prompt": (
            "Two monumental profile silhouettes carved from deep charcoal stone, positioned "
            "side by side like a minimalist Mount Rushmore at dusk, each facing the same "
            "direction but separated by a thin vertical seam of exposed rock. The left "
            "silhouette is lean and ascetic with close-cropped hair, the right silhouette is "
            "taller with unkempt hair and a cigarette held at the lips. Shot at 85mm f/4 from "
            "low angle as editorial architectural photography, a single raking key light from "
            "camera-right carves the profiles in relief, the rock face has visible chisel marks "
            "and weathered texture. Palette: deep charcoal #0a0a0b stone, warm ivory #F0EDE6 "
            "highlights on the sunlit edges of both profiles, one thin accent of warm gold "
            "#ffb829 in the sky behind them at sunset. Mood is monumental philosophical gravitas "
            "meeting street-level realism, two monumental viewpoints carved from the same "
            "terrain. No text, no names on the rock, no logos, no faces identifiable as "
            "specific real people."
        ),
    },
    {
        "id": "06-rubin-ogilvy-v2",
        "aspect": "1:1",
        "prompt": (
            "A single large minted bronze coin rendered in dramatic editorial macro photography, "
            "the coin held at a precise 45-degree angle floating against pure deep charcoal "
            "void, both the obverse and reverse faces partially visible simultaneously, each "
            "face carrying a struck profile portrait in relief: one side shows a bald monastic "
            "figure in profile with eyes closed in meditation, the other side shows a "
            "side-parted gentleman in profile smoking a pipe. Rim lit by a single soft key "
            "light from above. Shot on 100mm macro at f/8 to keep both profiles in sharp focus, "
            "cinematic studio lighting with a subtle rim light kissing the coin's edge. "
            "Palette: deep charcoal #0a0a0b background, warm ivory #F0EDE6 for the relief "
            "highlights on both profiles, warm gold #ffb829 for the coin's metal body and edge. "
            "Mood is numismatic reverence, two sides of the same currency, monastic precision "
            "next to commercial clarity. No text, no date, no mint marks, no identifiable real "
            "people."
        ),
    },
    {
        "id": "07-hemingway-twain-v2",
        "aspect": "1:1",
        "prompt": (
            "A precise mirror-symmetric diptych composition, two full-body silhouettes of "
            "mid-century American literary figures seated in identical cross-legged poses "
            "facing each other across the center seam of the frame, each holding different "
            "props. The left figure holds a heavy manual typewriter on his lap and wears a "
            "thick wool fisherman's sweater and a close-cropped beard silhouette. The right "
            "figure holds a cut-glass whiskey tumbler and wears a rumpled white linen suit with "
            "a thick mustache silhouette. Shot as editorial vintage photography, 50mm at f/5.6 "
            "with soft even lighting from overhead, both figures rendered in crisp ivory "
            "silhouette against a deep charcoal paper-backdrop studio background. Palette: "
            "absolute deep charcoal #0a0a0b backdrop, warm ivory #F0EDE6 silhouettes and prop "
            "highlights, a single warm gold #ffb829 catch-light on the whiskey tumbler. Mood is "
            "dual-era literary portraiture, two writers at similar stations on different "
            "rivers, same craft seen from opposite banks. No readable text, no logos, no "
            "identifiable real people — silhouettes only."
        ),
    },
    {
        "id": "08-king-godin-v2",
        "aspect": "1:1",
        "prompt": (
            "A single figure standing in profile at center frame on a worn wooden floor in a "
            "sparsely-lit room. The figure is a bearded writer in a heavy cardigan sweater "
            "holding a manual typewriter at his side, rendered with photorealistic detail. On "
            "the warm ivory-painted wall directly behind him, his cast shadow is not his own: "
            "the shadow depicts a clean-shaven bald figure in a crisp round-neck t-shirt "
            "mid-stride as if walking briskly toward a presentation stage, holding a handheld "
            "wireless microphone. The shadow is larger than physics allows and angled in a "
            "different direction than the single overhead light would cast. Shot at 35mm f/4 "
            "from slight low angle with a warm practical overhead light, the figure rendered "
            "with photorealistic detail, the shadow rendered with crisp graphic silhouette "
            "precision in deep charcoal. Palette: deep charcoal #0a0a0b shadows, warm ivory "
            "#F0EDE6 wall and figure highlights, one warm gold #ffb829 accent on the "
            "typewriter's metal trim. Mood is uncanny domestic-modern juxtaposition, a writer "
            "projecting a marketer's shadow. No readable text, no logos, no brand marks, no "
            "identifiable real people."
        ),
    },
    {
        "id": "09-jobs-seinfeld-v2",
        "aspect": "1:1",
        "prompt": (
            "A single marble-bust sculpture rendered in editorial museum photography, the bust "
            "is a classical Janus figure with two faces fused at the back of the skull, one "
            "face looking camera-left and one looking camera-right in perfect profile "
            "opposition. The left face is sharp-jawed, clean-shaven, with close-cropped hair "
            "evoking a product designer's austerity. The right face wears a subtle amused "
            "expression, has slightly wavy hair and faint stubble, evoking an observational "
            "comedian's ease. Both faces carved from the same warm ivory stone with visible "
            "chisel texture and micro-pitting. The bust sits on a minimalist deep charcoal "
            "plinth in a near-empty museum gallery, lit from above by a single museum "
            "spotlight. Shot at 85mm f/4 from three-quarter angle, slight low-angle to give "
            "the bust monumentality, deep shadow pooling around the base. Palette: deep "
            "charcoal #0a0a0b gallery, warm ivory #F0EDE6 marble, warm gold #ffb829 museum "
            "spotlight rim. Mood is museum gravitas meeting wry observation, two minds carved "
            "from one stone. No text on the plinth, no museum placard, no logos, no "
            "identifiable real people."
        ),
    },
]


def generate_one(client: genai.Client, spec: dict[str, str]) -> tuple[str, str]:
    concept_id = spec["id"]
    try:
        response = client.models.generate_content(
            model="gemini-3-pro-image-preview",
            contents=[spec["prompt"]],
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
                mime = part.inline_data.mime_type or "image/png"
                img = Image.open(io.BytesIO(part.inline_data.data))
                png_path = OUTPUT_DIR / f"{concept_id}.png"
                img.save(png_path, format="PNG")
                return (concept_id, f"OK  {png_path.name}  ({mime} -> PNG, {img.size[0]}x{img.size[1]})")
        return (concept_id, f"FAIL {concept_id}: no image part returned")
    except Exception as e:
        return (concept_id, f"FAIL {concept_id}: {type(e).__name__}: {e}")


def main() -> None:
    load_env()
    if not os.getenv("GEMINI_API_KEY"):
        raise SystemExit("GEMINI_API_KEY not loaded from env file")
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

    print(f"Generating {len(PROMPTS)} v2 figure-based images")
    print("-" * 60)
    t0 = time.time()
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:
        futures = {pool.submit(generate_one, client, spec): spec["id"] for spec in PROMPTS}
        for future in concurrent.futures.as_completed(futures):
            concept_id, message = future.result()
            print(f"[{time.time() - t0:6.1f}s] {message}")
            sys.stdout.flush()
    print("-" * 60)
    print(f"Done in {time.time() - t0:.1f}s")


if __name__ == "__main__":
    main()
