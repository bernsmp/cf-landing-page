"""
Batch 3: canvas-bleed composition + reference-image pass-through for likeness.
All 10 concepts regenerated. Collide cards pass 2 Wikipedia reference photos
as Gemini inputs. Remix + hero use canvas-bleed vignetting only.

Output filenames: -v3 suffix.
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
    if not ENV_PATH.exists():
        raise SystemExit(f"Missing env file: {ENV_PATH}")
    for line in ENV_PATH.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, value = line.partition("=")
        os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))


# Each spec may have a "refs" list with ref-image filenames in scripts/refs/
PROMPTS: list[dict] = [
    {
        "id": "hero-v3",
        "aspect": "16:9",
        "refs": [],
        "prompt": (
            "Wide 16:9 composition entirely in a deep charcoal void that fills every edge. Two "
            "streams of finely folded warm ivory paper ribbons enter from the left and right "
            "edges of the frame and approach each other horizontally toward the center, the "
            "moment just before they meet held in cinematic stillness. Between them at the "
            "center point a single thin arcing filament of molten warm gold light is suspended. "
            "The outer 20 percent of the frame on all sides is pure deep charcoal #0a0a0b so the "
            "image dissolves into page canvas with no visible border or frame edge. 100mm macro "
            "at f/4, soft top-down studio lighting, warm amber catching the gold filament. "
            "Palette: absolute deep charcoal #0a0a0b, warm ivory #F0EDE6, warm gold #ffb829. "
            "Mood: museum vitrine caught one second before something happens. No text, no logos."
        ),
    },
    {
        "id": "05-naval-bourdain-v3",
        "aspect": "1:1",
        "refs": ["naval-ravikant.jpg", "anthony-bourdain.jpg"],
        "prompt": (
            "Use the two reference photographs to inform likeness ONLY — render the final image "
            "as stylized silhouettes, not photographs of the real people. Two profile silhouettes "
            "in warm ivory against a pure deep charcoal void that fills every edge of the frame. "
            "The silhouettes are positioned back-to-back facing opposite directions, the crowns "
            "of their heads touching at the center creating a single fused two-headed form. The "
            "LEFT-facing silhouette resembles the first reference figure: ascetic, clean-shaven, "
            "close-cropped hair. The RIGHT-facing silhouette resembles the second reference "
            "figure: longer slightly unkempt hair, rugged weathered jaw, a subtle cigarette "
            "silhouette at the lips. Between their heads at the fusion point a thin curl of "
            "warm-gold-lit smoke rises. Outer 30 percent of the frame falls off to pure deep "
            "charcoal #0a0a0b with no visible frame edge. Museum spotlight from above carves "
            "only the silhouette edges. Palette: deep charcoal #0a0a0b, warm ivory #F0EDE6 "
            "silhouette edges, warm gold #ffb829 accent on the rising smoke. The silhouettes "
            "should clearly resemble the reference figures in profile shape. No text, no logos."
        ),
    },
    {
        "id": "06-rubin-ogilvy-v3",
        "aspect": "1:1",
        "refs": ["rick-rubin.jpg", "david-ogilvy.jpg"],
        "prompt": (
            "Use the two reference photographs to inform profile likeness for coin reliefs. A "
            "single large minted bronze coin floats at the center of a pure deep charcoal void "
            "that fills every edge, the coin held at a precise 45-degree angle so both faces "
            "are partially visible simultaneously. The obverse face (facing camera-left) carries "
            "a struck profile portrait of the first reference figure: a bald figure with a long "
            "flowing beard in meditative profile. The reverse face (facing camera-right) carries "
            "a struck profile portrait of the second reference figure: a sharp side-parted "
            "gentleman in profile smoking a pipe. Both rendered in classic numismatic relief. "
            "Outer 30 percent of the frame falls off to pure deep charcoal #0a0a0b, no visible "
            "surface beneath the coin, no visible frame edge — the coin floats in void. 100mm "
            "macro at f/8, single soft key from above rim-lighting the coin. Palette: deep "
            "charcoal #0a0a0b, warm ivory #F0EDE6 on relief highlights, warm gold #ffb829 coin "
            "metal. The struck profiles should clearly resemble the reference figures. No text, "
            "no date, no mint marks."
        ),
    },
    {
        "id": "07-hemingway-twain-v3",
        "aspect": "1:1",
        "refs": ["ernest-hemingway.jpg", "mark-twain.jpg"],
        "prompt": (
            "Use the two reference photographs to inform likeness, render as warm ivory "
            "silhouettes not photographs. A precise mirror-symmetric diptych: two full-body "
            "profile silhouettes of literary figures seated in identical cross-legged poses "
            "facing each other across the center seam of the frame. The LEFT silhouette "
            "resembles the first reference figure: close-cropped beard silhouette, thick wool "
            "fisherman's sweater outline, holds a heavy manual typewriter on his lap. The RIGHT "
            "silhouette resembles the second reference figure: thick mustache silhouette, "
            "rumpled white-linen-suit outline, holds a cut-glass whiskey tumbler. Both in warm "
            "ivory silhouette against pure deep charcoal void. Outer 25 percent of frame falls "
            "off to pure deep charcoal #0a0a0b, no visible ground or backdrop edge — figures "
            "float in void. Soft overhead lighting illuminates only the silhouettes. Palette: "
            "deep charcoal #0a0a0b, warm ivory #F0EDE6, warm gold #ffb829 catch on the whiskey. "
            "Silhouettes should clearly resemble the reference figures in facial hair and body "
            "type. No text, no logos."
        ),
    },
    {
        "id": "08-king-godin-v3",
        "aspect": "1:1",
        "refs": ["stephen-king.jpg", "seth-godin.jpg"],
        "prompt": (
            "Use the two reference photographs to inform likeness of two different subjects "
            "within the same image. A single figure stands in profile at the center of a pure "
            "deep charcoal void, surrounded by total darkness at every edge. The FIGURE in the "
            "light resembles the first reference: a bearded writer in a heavy cardigan sweater, "
            "glasses, holding a manual typewriter at his side, rendered in warm editorial "
            "photorealism, lit by a single warm overhead practical. No visible floor, no "
            "visible walls — the figure floats in black. Directly behind the figure his cast "
            "shadow is NOT his own: the shadow resembles the second reference, a clean-shaven "
            "bald figure in a crisp round-neck t-shirt mid-stride holding a wireless handheld "
            "microphone. Shadow rendered as a crisp ivory-on-charcoal graphic silhouette, "
            "larger than physics allows, angled as if cast by a different light. Outer 30 "
            "percent of frame is pure deep charcoal #0a0a0b with no visible frame edge. "
            "Palette: deep charcoal #0a0a0b, warm ivory #F0EDE6 figure and shadow, warm gold "
            "#ffb829 accent on typewriter metal. The lit figure should resemble reference one, "
            "the shadow should resemble reference two. No text, no logos."
        ),
    },
    {
        "id": "09-jobs-seinfeld-v3",
        "aspect": "1:1",
        "refs": ["steve-jobs.jpg", "jerry-seinfeld.jpg"],
        "prompt": (
            "Use the two reference photographs to inform the two faces carved into a single "
            "marble bust. A classical Janus bust floats at the center of a pure deep charcoal "
            "void, two faces fused at the back of the skull, one looking camera-left and one "
            "camera-right in perfect profile opposition. The LEFT face resembles the first "
            "reference figure: sharp-jawed, clean-shaven, close-cropped hair, austere "
            "turtleneck neckline carved into the base. The RIGHT face resembles the second "
            "reference figure: lightly amused expression, slightly wavy hair, faint stubble. "
            "Both faces carved from the same warm ivory stone with visible chisel texture and "
            "micro-pitting. Outer 30 percent of frame is pure deep charcoal #0a0a0b, no visible "
            "plinth, no visible gallery walls — bust emerges from void. Single museum spotlight "
            "from above. 85mm at f/4, three-quarter angle, slight low angle for monumentality. "
            "Palette: deep charcoal #0a0a0b, warm ivory #F0EDE6 marble, warm gold #ffb829 "
            "spotlight rim. The two carved faces should clearly resemble the reference figures. "
            "No text on any surface, no logos."
        ),
    },
    {
        "id": "01-ted-talk-upgrader-v3",
        "aspect": "1:1",
        "refs": [],
        "prompt": (
            "A circular empty speaking stage viewed from directly overhead in true orthographic "
            "projection, floating at the center of a pure deep charcoal void. The stage floor "
            "is deep charcoal with surveyor's chalk lines hand-drawn in warm ivory creating a "
            "stage-blocking diagram with indecipherable hand-lettered labels, a single wooden "
            "stool sits off-center as the pivot point. Outer 30 percent of the frame is pure "
            "deep charcoal #0a0a0b with no visible floor extending beyond the circle — the "
            "stage floats in void. Soft diffused top-light only on the stage, chalk lines "
            "rendered with physical chalk-dust texture. Palette: deep charcoal #0a0a0b floor, "
            "warm ivory #F0EDE6 chalk, warm gold #ffb829 thin rim at the stage's outer edge. "
            "Mood: archival rehearsal hall isolation, structure of a talk made visible. Labels "
            "read as indecipherable handwriting, not English words. No logos."
        ),
    },
    {
        "id": "02-thread-architect-v3",
        "aspect": "1:1",
        "refs": [],
        "prompt": (
            "A draftsman's architectural section drawing on warm ivory vellum floats at the "
            "center of a pure deep charcoal void. The drawing shows a multi-story building in "
            "precise technical section, each floor labeled with a small numbered tag, the "
            "floors visually suggesting a numbered thread with structural-beam semantics. "
            "Outer 30 percent of the frame is pure deep charcoal #0a0a0b with no visible table "
            "or surface beyond the paper — drawing floats in void. A single warm-white "
            "drafting light from camera-right casts raking light across the vellum, pencil and "
            "ink linework with authentic drafting texture and graphite dust visible. Palette: "
            "deep charcoal #0a0a0b, warm ivory #F0EDE6 vellum, graphite grey linework, warm "
            "gold #ffb829 small accent. Labels appear as numerical tags and abstract marks, "
            "not legible English. No logos."
        ),
    },
    {
        "id": "03-cold-open-machine-v3",
        "aspect": "1:1",
        "refs": [],
        "prompt": (
            "An antique pocket watch disassembled on a small patch of worn leather that floats "
            "at the center of a pure deep charcoal void, the gears and escapement and "
            "mainspring laid out in precise exploded order, each gear engraved with fine "
            "ornamental scrollwork at its edge, a jeweler's loupe and brass tweezers rest to "
            "one side. The leather surface is only large enough to hold the parts; beyond its "
            "edges is pure deep charcoal #0a0a0b. Outer 30 percent of frame falls off to void. "
            "100mm macro f/5.6 overhead, single warm practical light from camera-left, metal "
            "and leather textures in tack-sharp detail. Palette: deep charcoal #0a0a0b, warm "
            "brass and ivory #F0EDE6, warm gold #ffb829 accent on the mainspring coil. "
            "Engravings read as ornamental scrollwork, not legible text. No logos."
        ),
    },
    {
        "id": "04-newsletter-skeleton-v3",
        "aspect": "1:1",
        "refs": [],
        "prompt": (
            "A hand-built cardboard architectural model of a six-story building in clean "
            "cutaway section floats at the center of a pure deep charcoal void, each floor "
            "visible and separated by thin interior partitions, small hand-lettered paper "
            "cards pinned inside each floor suggesting the contents of each level. There is "
            "no visible desk or floor beneath the model — it floats in black. Outer 30 percent "
            "of the frame is pure deep charcoal #0a0a0b. 85mm at f/4, slightly low angle, "
            "soft warm light from camera-right catching the cardboard's fluted texture. "
            "Palette: deep charcoal #0a0a0b, warm ivory #F0EDE6 cardboard, warm gold #ffb829 "
            "small accent detail. Section cards appear as abstract handwritten marks, not "
            "legible English. No logos."
        ),
    },
]


def generate_one(client: genai.Client, spec: dict) -> tuple[str, str]:
    concept_id = spec["id"]
    try:
        contents: list = []
        for ref_name in spec.get("refs", []):
            ref_path = REFS_DIR / ref_name
            if not ref_path.exists():
                return (concept_id, f"FAIL {concept_id}: missing ref {ref_name}")
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
                png_path = OUTPUT_DIR / f"{concept_id}.png"
                img.save(png_path, format="PNG")
                return (concept_id, f"OK  {png_path.name}  ({img.size[0]}x{img.size[1]})")
        return (concept_id, f"FAIL {concept_id}: no image part returned")
    except Exception as e:
        return (concept_id, f"FAIL {concept_id}: {type(e).__name__}: {e}")


def main() -> None:
    load_env()
    if not os.getenv("GEMINI_API_KEY"):
        raise SystemExit("GEMINI_API_KEY not loaded")
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
    print(f"Generating {len(PROMPTS)} v3 canvas-bleed images")
    print("-" * 60)
    t0 = time.time()
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
        futures = {pool.submit(generate_one, client, s): s["id"] for s in PROMPTS}
        for f in concurrent.futures.as_completed(futures):
            cid, msg = f.result()
            print(f"[{time.time() - t0:6.1f}s] {msg}")
            sys.stdout.flush()
    print("-" * 60)
    print(f"Done in {time.time() - t0:.1f}s")


if __name__ == "__main__":
    main()
