# Refine Design System with Chart Generator Styling

## Problem
The landing page design felt less clean/polished compared to the Chart Generator project.

## Plan

- [x] Analyze Chart Generator style elements to borrow
- [x] Update globals.css with cleaner CSS variable naming and new animations
- [x] Apply cleaner card styling and borders to components
- [x] Swap fonts to Instrument Serif + Inter
- [x] Simplify hero section (remove badge, use italic second line)
- [x] Test locally and push to production

## Review

### Summary of Changes
1. **Font swap**: Fraunces → Instrument Serif, DM Sans → Inter (cleaner editorial feel)
2. **Grey palette**: Adjusted to warmer tones (#111113, #161618, #1c1c1f)
3. **Semantic borders**: Added --border-subtle, --border-medium, --border-strong (rgba for softer look)
4. **Card hover effects**: Radial gold glow from top on hover
5. **Animations**: Added heroFloat (with rotation), heroGlow, faster fadeInUp
6. **Hero simplification**: Removed badge, second line now italic grey instead of gold gradient

### Files Modified
- `app/globals.css` - New CSS variables, animations, card styles
- `app/layout.tsx` - Swapped fonts to Instrument Serif + Inter
- `components/home/HeroSection.tsx` - Simplified hero, removed badge
- `components/home/OutcomesSection.tsx` - Cleaner card borders
- `components/home/SocialProof.tsx` - Cleaner card borders
- `components/home/FeaturedContent.tsx` - Cleaner card borders
- `components/layout/Navigation.tsx` - Subtle border variable

### Known Limitations
- Instrument Serif only has 400 weight (no bold)

---

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
