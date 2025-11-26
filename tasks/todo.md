# Fix Insights Article Styling

## Problem
The blog/insights pages look broken because:
1. `@tailwindcss/typography` plugin is NOT installed - all `prose-*` classes do nothing
2. Images render as plain markdown without proper containers/styling
3. Need better section spacing and visual hierarchy

## Plan

- [x] Install `@tailwindcss/typography` plugin
- [x] Import the typography plugin in globals.css (Tailwind v4 syntax)
- [x] Add custom article typography styles to globals.css for fine-tuning
- [x] Update ReactMarkdown to use custom components for images
- [x] Test and verify styling looks good

## Review

### Summary of Changes
1. Installed `@tailwindcss/typography` plugin
2. Added `@plugin "@tailwindcss/typography"` to globals.css (Tailwind v4 syntax)
3. Created comprehensive `.article-content` custom styles with:
   - Premium H2 headers with section dividers
   - H3 subheadings with proper hierarchy
   - Lead paragraph styling (first paragraph larger)
   - Premium blockquotes with gold accent + decorative quote mark
   - Gold bullet/number markers for lists
   - Elegant horizontal rule dividers (gold gradient)
   - Images with rounded corners, borders, and shadows
   - Figure/figcaption support for image captions
   - TL;DR boxes with gold-tinted background
   - Mobile responsive adjustments
4. Updated ReactMarkdown with custom image component using Next.js Image

### New Dependencies Added
- `@tailwindcss/typography` - Tailwind typography plugin

### Files Modified
- `package.json` - Added typography dependency
- `app/globals.css` - Added plugin import + ~200 lines of premium article styles
- `app/insights/[slug]/InsightArticleClient.tsx` - Simplified to use `.article-content` class + custom image components

### Premium Features Now Available
- Section dividers between H2s (subtle border)
- Gold gradient horizontal rules
- Blockquotes with decorative quote marks
- Images with shadows and captions
- Gold-accented lists
- TL;DR/summary boxes auto-styled when blockquote starts with bold text
