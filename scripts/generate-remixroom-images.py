"""
Generate 10 images for The Remix Room lead magnet page.
Gemini 3 Pro Image API. Parallel generation. CF palette. Dan Koe aesthetic.
Output: cf-landing-page/public/remixroom/
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
        "id": "hero",
        "aspect": "16:9",
        "prompt": (
            "A deep charcoal near-black expanse filling the entire frame edge to edge, two streams "
            "of finely folded ivory paper ribbons approaching each other horizontally from left and "
            "right, the moment just before they meet rendered with cinematic stillness and a single "
            "thin arcing filament of molten warm gold light suspended between them at the point of "
            "impending collision. Shot with a 100mm macro lens at f/4, soft top-down studio lighting "
            "with a long key from the right, warm amber practicals catching the gold filament edge, "
            "the rest of the scene holding in deep shadow with visible paper grain and fiber texture. "
            "Mood is editorial, meditative, archival; palette is absolute deep charcoal #0a0a0b, warm "
            "ivory cream #F0EDE6, and one precise hit of warm gold #ffb829. The frame has the "
            "stillness of a museum vitrine caught in the second before something happens. No text, "
            "no typography, no logos anywhere in the image."
        ),
    },
    {
        "id": "05-naval-bourdain",
        "aspect": "1:1",
        "prompt": (
            "A single pair of hands rendered in high-contrast editorial photography on a weathered "
            "dark steel kitchen counter during service, the right hand holding a razor-sharp wooden "
            "pencil poised over a folded paper napkin where three concentric circles and an arrow "
            "have been drawn with geometric precision, the left hand half-visible in the frame "
            "gripping the edge of the counter with the pressure of kitchen work, a thin curl of "
            "cigarette smoke rising from a cracked porcelain ashtray in the mid-background. Shot at "
            "85mm f/2.0 from three-quarter high angle with a single warm tungsten key light from "
            "camera-left, deep shadow pools on the right side of the frame, the napkin catching a "
            "single soft highlight. Palette is deep charcoal #0a0a0b, warm ivory #F0EDE6 for the "
            "napkin, a single warm gold #ffb829 accent on the pencil's brass ferrule. Mood is "
            "cinematic noir meeting philosophical stillness, steel and paper and human grip held at "
            "the exact moment a systems insight is being committed to a napkin in the middle of "
            "dinner service. No text, no readable writing, no logos."
        ),
    },
    {
        "id": "06-rubin-ogilvy",
        "aspect": "1:1",
        "prompt": (
            "A vintage large-diaphragm studio microphone stands on a worn oak table in a near-empty "
            "room, next to it a single sheet of typewritten advertising copy aggressively marked up "
            "with red pencil strike-throughs, most lines crossed out leaving only a few essential "
            "sentences, the upper half of the frame almost entirely empty negative space. Shot at "
            "50mm f/5.6 with soft window light falling from camera-right onto the microphone, the "
            "paper catching a softer secondary glow, deep shadow pooling in the empty left half of "
            "the frame. Palette is deep warm charcoal #0a0a0b, warm ivory #F0EDE6 for the paper, a "
            "single thin strip of warm gold #ffb829 reflecting off the microphone grill. Mood is "
            "monastic precision meeting commercial clarity, studio silence next to the discipline "
            "of copy cut until only the necessary remains. No readable text, letters appear blurred "
            "or partially crossed out, no logos."
        ),
    },
    {
        "id": "07-hemingway-twain",
        "aspect": "1:1",
        "prompt": (
            "A weathered antique typewriter sits on a wooden river-boat cabin desk with a single "
            "sheet curled out of the carriage bearing one unfinished line of type, next to it a "
            "half-empty cut-glass tumbler of amber whiskey resting on a folded canvas map that "
            "shows both a Caribbean coastline and a wide American river curve, a brass kerosene "
            "lamp burning low in the background. Shot at 35mm f/4 from low angle with warm "
            "golden-hour light streaming through a half-shuttered wooden window, deep shadows in "
            "the corners, lamp-glow catching the typewriter keys, the whiskey catching an amber "
            "highlight. Palette is deep warm charcoal #0a0a0b and sepia, ivory cream #F0EDE6 for "
            "the paper and map, warm gold #ffb829 for the whiskey, lamp flame, and typewriter "
            "metal edges. Mood is cinematic literary Americana, paper and spirits in a single "
            "frame, two different rivers in the same room. No readable text on the typewriter "
            "paper, no logos."
        ),
    },
    {
        "id": "08-king-godin",
        "aspect": "1:1",
        "prompt": (
            "A rustic wooden writing desk holds a heavy manual typewriter next to a neat stack of "
            "hand-numbered white index cards tied with twine, but through the window directly "
            "above the desk a modern empty keynote-presentation stage is visible at night with "
            "rows of empty folding chairs and a single spotlight illuminating an empty lectern. "
            "Shot at 50mm f/2.8 with the desk in warm-lit foreground and the stage in cooler "
            "blue night-light outside, both in focus via deep depth of field, the window frame "
            "dividing the image into two distinct worlds. Palette is deep charcoal #0a0a0b for "
            "the night stage, warm amber interior for the writing desk, ivory #F0EDE6 for the "
            "index cards and distant spotlight, one small accent of gold #ffb829 from a brass "
            "desk-lamp switch. Mood is uncanny domestic-modern juxtaposition, the writer's room "
            "and the marketer's room held in one frame without apology. No readable text, no "
            "logos."
        ),
    },
    {
        "id": "09-jobs-seinfeld",
        "aspect": "1:1",
        "prompt": (
            "A pristinely-folded black turtleneck sweater lies on a classic American laminated "
            "diner counter with chrome trim, directly next to a heavy white ceramic diner mug "
            "containing black coffee, a single fluorescent diner light tube visible above as a "
            "thin white halo, the counter extending into deep shadow on both sides. Shot at 35mm "
            "f/5.6 from slight overhead angle with cool fluorescent top-light softened by faint "
            "practical bulbs, specular highlights on the chrome trim and the mug rim, the "
            "turtleneck rendered with soft cloth detail and precise folding geometry. Palette is "
            "deep charcoal #0a0a0b for the diner interior, ivory cream #F0EDE6 for the mug and "
            "laminated counter, warm gold #ffb829 reflecting off the chrome edge. Mood is "
            "product-photography precision applied to the most ordinary possible setting, the "
            "tension between curator's hand and everyday gag in one composition. No text, no "
            "logos, no brand marks."
        ),
    },
    {
        "id": "01-ted-talk-upgrader",
        "aspect": "1:1",
        "prompt": (
            "An empty circular speaking stage viewed from directly overhead in true orthographic "
            "composition, the floor deep charcoal with a single thin warm line barely visible at "
            "the outer rim, across the floor surveyor's chalk lines have been drawn in warm ivory "
            "as a stage-blocking diagram with hand-lettered labels naming structural speech beats, "
            "a single wooden stool sits off-center as the pivot point. Shot as overhead "
            "architectural photography with soft diffused top-light and a slight vignette toward "
            "the edges, chalk lines rendered with physical chalk-dust texture. Palette is deep "
            "charcoal #0a0a0b floor, warm ivory #F0EDE6 chalk lines and hand-lettering, one thin "
            "rim of warm gold #ffb829 at the stage edge. Mood is the stillness of a rehearsal "
            "hall before anyone arrives, the structure of a talk made visible without the talk. "
            "Chalk labels should read as indecipherable handwriting, not specific English words."
        ),
    },
    {
        "id": "02-thread-architect",
        "aspect": "1:1",
        "prompt": (
            "A draftsman's architectural section drawing on warm ivory vellum laid flat on a "
            "dark oak drafting table, the drawing shows a multi-story building in perfect "
            "technical section, each floor labeled with a small numbered tag, the tags visually "
            "suggesting a numbered social-media thread where each post acts as a structural "
            "beam, the foundation labeled prominently and the topmost floor suggesting a payoff. "
            "Shot at 50mm f/4 from slight three-quarter high angle with a single warm-white "
            "drafting lamp casting raking light across the vellum, pencil and ink linework "
            "rendered with authentic drafting texture, graphite dust visible. Palette is deep "
            "charcoal #0a0a0b table, warm ivory #F0EDE6 vellum, graphite grey linework, one "
            "accent of warm gold #ffb829 from the brass drafting lamp arm. Mood is old-world "
            "engineering precision applied to a modern communication form, the rigor of a real "
            "building blueprint available to a social thread. No specific readable text, labels "
            "should appear as numerical tags or abstract hand-written marks."
        ),
    },
    {
        "id": "03-cold-open-machine",
        "aspect": "1:1",
        "prompt": (
            "A disassembled antique pocket watch on a worn leather workbench, the gears and "
            "escapement wheel and mainspring laid out in precise order like an exploded "
            "technical diagram, each gear etched with fine ornamental engraving at its edge, a "
            "jeweler's loupe and a pair of brass tweezers rest to one side. Shot at 100mm macro "
            "f/5.6 from overhead angle with soft diffused top-light and a single warm practical "
            "from camera-left, metal and leather textures in tack-sharp detail, engraving on the "
            "gears catching subtle highlights. Palette is deep charcoal #0a0a0b leather, warm "
            "brass and ivory #F0EDE6 for the gears, a single gold #ffb829 accent on the "
            "mainspring coil. Mood is horological precision meeting literary attention, the "
            "machinery of a first sentence caught in the second before reassembly. Engravings "
            "should read as ornamental scrollwork, not legible English text."
        ),
    },
    {
        "id": "04-newsletter-skeleton",
        "aspect": "1:1",
        "prompt": (
            "A hand-built cardboard architectural model of a six-story building rendered in "
            "clean cutaway section, each floor clearly visible and separated by thin interior "
            "partitions, the building sits on a writer's desk next to a closed leather notebook "
            "and a single fountain pen, a few hand-lettered small paper cards pinned inside "
            "each floor suggesting the contents of each level. Shot at 85mm f/4 from slightly "
            "low angle with soft morning window light from camera-right, the cardboard rendered "
            "with authentic fluted texture, small cards in warm brown ink. Palette is deep "
            "charcoal #0a0a0b desk surface, warm ivory #F0EDE6 cardboard and notebook, one "
            "gold #ffb829 accent on the pen nib. Mood is the quiet confidence of scale-model "
            "craftsmanship, the idea that a newsletter has architecture that can be inspected "
            "like any other building. Small cards should appear as abstract handwritten marks, "
            "not legible English words."
        ),
    },
]


def generate_one(client: genai.Client, spec: dict[str, str]) -> tuple[str, str]:
    """Generate one image. Returns (id, result_message)."""
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
                ext = {
                    "image/png": "png",
                    "image/jpeg": "jpg",
                    "image/webp": "webp",
                }.get(mime, "png")
                filename = OUTPUT_DIR / f"{concept_id}.{ext}"
                # Re-encode to PNG so all outputs share a clean extension
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

    print(f"Generating {len(PROMPTS)} images to {OUTPUT_DIR}")
    print("-" * 60)
    t0 = time.time()

    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
        futures = {pool.submit(generate_one, client, spec): spec["id"] for spec in PROMPTS}
        for future in concurrent.futures.as_completed(futures):
            concept_id, message = future.result()
            print(f"[{time.time() - t0:6.1f}s] {message}")
            sys.stdout.flush()

    print("-" * 60)
    print(f"Done in {time.time() - t0:.1f}s")


if __name__ == "__main__":
    main()
