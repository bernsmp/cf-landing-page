"""
Collide pack v5: matches the King x Godin v3 pattern.
- Real photorealistic figure in spotlight pool + ivory silhouette with ink-line detail.
- Both figures face the same direction.
- Silhouette side alternates L-R-L-R-L across cards 05-09.
- Card 08 is NOT regenerated (it's the template — keep v3).

User explicitly authorized Wikipedia references for stylized derivative imagery.
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
    # 05: silhouette LEFT, real RIGHT, both face RIGHT
    {
        "id": "05-naval-bourdain-v5",
        "aspect": "1:1",
        "refs": ["naval-ravikant.jpg", "anthony-bourdain.jpg"],
        "prompt": (
            "Square 1:1 composition matching this exact pattern: one photorealistic figure in "
            "a warm overhead spotlight pool + one stylized full-body ivory silhouette on pure "
            "deep charcoal void. Both figures stand in profile facing RIGHT. The SILHOUETTE is "
            "positioned on the LEFT side of the frame, a full-body warm-ivory silhouette with "
            "minimal thin black ink line-art details for facial expression (a clean-shaven "
            "jaw, small glasses frame hint, mouth line), based on the FIRST reference "
            "photograph: ascetic build, clean-shaven, close-cropped hair, standing upright in "
            "profile holding a small folded notecard at his side. The PHOTOREALISTIC figure is "
            "positioned on the RIGHT side of the frame, based on the SECOND reference "
            "photograph: weathered man with longer slightly unkempt hair, standing in profile "
            "wearing a well-worn chef's canvas apron over a plain t-shirt and dark pants, "
            "holding a leather pocket notebook under his arm, a thin curl of cigarette smoke "
            "rising from his other hand. The photorealistic figure is lit by a single warm "
            "overhead spotlight pool that falls off sharply on all sides. The silhouette "
            "stands in pure void, no spotlight on it, clearly visible because it is warm "
            "ivory against deep charcoal. Outer 20-30 percent of the frame falls off to pure "
            "deep charcoal #0a0a0b — no visible floor, no walls, no frame edge, figures float "
            "in void. Palette: deep charcoal #0a0a0b void, warm ivory #F0EDE6 silhouette, "
            "natural skin tones for real figure, warm gold #ffb829 accent on the cigarette "
            "ember. The silhouette should resemble the first reference, the real figure "
            "should resemble the second reference. No text, no readable writing on the "
            "notecard, no logos."
        ),
    },
    # 06: silhouette RIGHT, real LEFT, both face LEFT
    {
        "id": "06-rubin-ogilvy-v5",
        "aspect": "1:1",
        "refs": ["rick-rubin.jpg", "david-ogilvy.jpg"],
        "prompt": (
            "Square 1:1 composition matching this exact pattern: one photorealistic figure in "
            "a warm overhead spotlight pool + one stylized full-body ivory silhouette on pure "
            "deep charcoal void. Both figures stand in profile facing LEFT. The "
            "PHOTOREALISTIC figure is positioned on the LEFT side of the frame, based on the "
            "SECOND reference photograph: distinguished mid-century advertising man with "
            "side-parted gray hair, wearing a crisp three-piece wool suit with a bow tie, "
            "standing in profile, holding a typewritten single page of advertising copy "
            "marked up aggressively in red pencil, a pipe in his other hand. Lit by a single "
            "warm overhead spotlight pool that falls off sharply. The SILHOUETTE is "
            "positioned on the RIGHT side of the frame, a full-body warm-ivory silhouette "
            "with minimal thin black ink line-art details (a long flowing beard profile, a "
            "small subtle facial feature line), based on the FIRST reference photograph: bald "
            "figure with a long flowing beard, wearing loose monastic robe, standing in "
            "profile with a hand resting over his heart. The silhouette stands in pure void, "
            "no spotlight on it. Outer 20-30 percent of the frame falls off to pure deep "
            "charcoal #0a0a0b — no visible floor, no walls, no frame edge. Palette: deep "
            "charcoal #0a0a0b void, warm ivory #F0EDE6 silhouette, natural skin tones for "
            "real figure, warm gold #ffb829 accent on the pipe ember or suit-pocket detail. "
            "The silhouette should resemble the first reference (Rubin), the real figure "
            "should resemble the second reference (Ogilvy). No readable text on the page, no "
            "logos."
        ),
    },
    # 07: silhouette LEFT, real RIGHT, both face RIGHT
    {
        "id": "07-hemingway-twain-v5",
        "aspect": "1:1",
        "refs": ["mark-twain.jpg", "ernest-hemingway.jpg"],
        "prompt": (
            "Square 1:1 composition matching this exact pattern: one photorealistic figure in "
            "a warm overhead spotlight pool + one stylized full-body ivory silhouette on pure "
            "deep charcoal void. Both figures stand in profile facing RIGHT. The SILHOUETTE "
            "is positioned on the LEFT side of the frame, a full-body warm-ivory silhouette "
            "with minimal thin black ink line-art details (a thick mustache profile, small "
            "mouth line, slight crease detail on the linen suit), based on the FIRST "
            "reference photograph: figure in a rumpled white linen suit, wild white hair "
            "silhouette, thick bushy mustache, holding a cut-glass whiskey tumbler in one "
            "hand. The PHOTOREALISTIC figure is positioned on the RIGHT side of the frame, "
            "based on the SECOND reference photograph: robust man with a close-cropped "
            "white-gray beard and short hair, wearing a thick hand-knit wool fisherman's "
            "sweater and khaki canvas trousers, standing in profile, holding a heavy antique "
            "manual typewriter at his side with one hand. Lit by a single warm overhead "
            "spotlight pool that falls off sharply. The silhouette stands in pure void, no "
            "spotlight on it. Outer 20-30 percent of the frame falls off to pure deep "
            "charcoal #0a0a0b — no visible floor, no walls, no frame edge. Palette: deep "
            "charcoal #0a0a0b void, warm ivory #F0EDE6 silhouette, natural skin tones for "
            "real figure, warm gold #ffb829 accent on the whiskey tumbler. The silhouette "
            "should resemble the first reference (Twain), the real figure should resemble "
            "the second reference (Hemingway). No readable text, no logos."
        ),
    },
    # 09: silhouette LEFT, real RIGHT, both face RIGHT
    {
        "id": "09-jobs-seinfeld-v5",
        "aspect": "1:1",
        "refs": ["jerry-seinfeld.jpg", "steve-jobs.jpg"],
        "prompt": (
            "Square 1:1 composition matching this exact pattern: one photorealistic figure in "
            "a warm overhead spotlight pool + one stylized full-body ivory silhouette on pure "
            "deep charcoal void. Both figures stand in profile facing RIGHT. The SILHOUETTE "
            "is positioned on the LEFT side of the frame, a full-body warm-ivory silhouette "
            "with minimal thin black ink line-art details (a subtle mouth line, small eye "
            "detail, collar line on the shirt), based on the FIRST reference photograph: "
            "figure with short wavy hair, wearing a crisp button-up shirt and dark trousers, "
            "standing with one arm raised holding a handheld microphone close to the mouth as "
            "if delivering a stand-up comedy line. The PHOTOREALISTIC figure is positioned on "
            "the RIGHT side of the frame, based on the SECOND reference photograph: man with "
            "close-cropped hair, round wire-rim glasses, modest gray beard stubble, wearing a "
            "black mock turtleneck and faded blue jeans, standing in profile, holding a small "
            "rectangular product object in one hand at chest height, the other hand gesturing "
            "subtly. Lit by a single warm overhead spotlight pool that falls off sharply. The "
            "silhouette stands in pure void, no spotlight on it. Outer 20-30 percent of the "
            "frame falls off to pure deep charcoal #0a0a0b — no visible floor, no walls, no "
            "frame edge. Palette: deep charcoal #0a0a0b void, warm ivory #F0EDE6 silhouette, "
            "natural skin tones for real figure, warm gold #ffb829 accent on a reflection on "
            "the rectangular product. The silhouette should resemble the first reference "
            "(Seinfeld), the real figure should resemble the second reference (Jobs). No "
            "text, no logos."
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
                path = OUTPUT_DIR / f"{concept_id}.png"
                img.save(path, format="PNG")
                return (concept_id, f"OK  {path.name}  {img.size[0]}x{img.size[1]}")
        return (concept_id, f"FAIL {concept_id}: no image part returned")
    except Exception as e:
        return (concept_id, f"FAIL {concept_id}: {type(e).__name__}: {e}")


def main() -> None:
    load_env()
    if not os.getenv("GEMINI_API_KEY"):
        raise SystemExit("GEMINI_API_KEY not loaded")
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
    print(f"Generating {len(PROMPTS)} Collide v5 images (matching 08's pattern)")
    print("-" * 60)
    t0 = time.time()
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        futures = {pool.submit(generate_one, client, s): s["id"] for s in PROMPTS}
        for f in concurrent.futures.as_completed(futures):
            cid, msg = f.result()
            print(f"[{time.time() - t0:6.1f}s] {msg}")
            sys.stdout.flush()
    print("-" * 60)
    print(f"Done in {time.time() - t0:.1f}s")


if __name__ == "__main__":
    main()
