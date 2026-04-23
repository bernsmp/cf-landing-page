"""
Download Wikipedia main-image thumbnails for the 10 figures in the
Remix Room Collide pack. Saves to scripts/refs/ for use as Gemini
reference images during generation.
"""

from __future__ import annotations

import urllib.parse
import urllib.request
from pathlib import Path

REFS_DIR = Path(__file__).resolve().parent / "refs"
THUMB_SIZE = 800

FIGURES: dict[str, str] = {
    "naval-ravikant":    "Naval_Ravikant",
    "anthony-bourdain":  "Anthony_Bourdain",
    "rick-rubin":        "Rick_Rubin",
    "david-ogilvy":      "David_Ogilvy_(businessman)",
    "ernest-hemingway":  "Ernest_Hemingway",
    "mark-twain":        "Mark_Twain",
    "stephen-king":      "Stephen_King",
    "seth-godin":        "Seth_Godin",
    "steve-jobs":        "Steve_Jobs",
    "jerry-seinfeld":    "Jerry_Seinfeld",
}

WIKI_API = "https://en.wikipedia.org/w/api.php"
UA = "Mozilla/5.0 (RemixRoomReferenceFetcher; bernsmp@gmail.com)"


def fetch_thumbnail(title: str) -> str | None:
    params = urllib.parse.urlencode({
        "action": "query",
        "titles": title,
        "prop": "pageimages",
        "format": "json",
        "pithumbsize": str(THUMB_SIZE),
    })
    url = f"{WIKI_API}?{params}"
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=15) as resp:
        import json
        data = json.loads(resp.read())
    pages = data.get("query", {}).get("pages", {})
    for page in pages.values():
        thumb = page.get("thumbnail")
        if thumb and "source" in thumb:
            return thumb["source"]
    return None


def download(url: str, dest: Path) -> None:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as resp:
        dest.write_bytes(resp.read())


def main() -> None:
    REFS_DIR.mkdir(parents=True, exist_ok=True)
    print(f"Fetching {len(FIGURES)} Wikipedia thumbnails to {REFS_DIR}")
    print("-" * 60)
    for slug, title in FIGURES.items():
        try:
            thumb_url = fetch_thumbnail(title)
            if not thumb_url:
                print(f"MISS  {slug:20s}  no thumbnail for '{title}'")
                continue
            ext = Path(urllib.parse.urlparse(thumb_url).path).suffix or ".jpg"
            dest = REFS_DIR / f"{slug}{ext}"
            download(thumb_url, dest)
            print(f"OK    {slug:20s}  {dest.name}")
        except Exception as e:
            print(f"FAIL  {slug:20s}  {type(e).__name__}: {e}")


if __name__ == "__main__":
    main()
