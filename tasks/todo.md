# Newsletter Landing Page

## Plan

- [x] Create `/app/newsletter/page.tsx` (move from /articles to /newsletter)
- [x] Update Navigation component: change "Deep Dives" → "Newsletter" and href `/articles` → `/newsletter`
- [x] Build compelling hero/landing section above article grid
- [x] Test the build

## Review

### Summary of Changes
1. **Created `/app/newsletter/page.tsx`** - New landing page with:
   - Hero section with headline "You help others see their blind spots. Who helps you see yours?"
   - Jay testimonial in styled blockquote
   - Value proposition copy
   - Side-by-side Free vs Paid tier comparison
   - Pricing: $10/month (going to $20 Dec 22)
   - Two CTAs: "Subscribe Free" and "Get Full Access"
   - "Scroll down to preview" divider
   - Articles grid below (fetched from existing API)

2. **Updated `components/layout/Navigation.tsx`** - Changed nav link from "Deep Dives" → "Newsletter" and href from `/articles` → `/newsletter`

### Pending
- **Logo placeholder**: Currently using a text-based placeholder. Swap in the transparent `SNLOGO.png` when ready.

### No New Dependencies
Uses existing framer-motion and lucide-react icons.

### No Environment Variables Needed
Uses existing `/api/articles` endpoint.
