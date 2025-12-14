# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js 16 marketing website for Cognitive Fingerprint™, a methodology for extracting and monetizing invisible expertise. The site is built with:
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Run linting
npm run lint
```

## Architecture

### Directory Structure
```
app/                    # Next.js 16 App Router pages
├── page.tsx           # Home page (client component)
├── layout.tsx         # Root layout with fonts & metadata
├── globals.css        # Global styles & design system
├── method/            # /method route
├── articles/          # /articles route (Deep Dives)
├── assessment/        # /assessment route (Invisibility Test)
├── results/           # /results route (Testimonials)
├── start/             # /start route (Tiered offerings)
├── insights/          # /insights route (SEO articles)
│   └── [slug]/       # Dynamic route for individual articles
└── prompts/           # Prompts library

components/
├── home/              # Homepage-specific sections
│   ├── HeroSection.tsx
│   ├── DrivingAnalogy.tsx
│   ├── CourageStory.tsx
│   ├── OutcomesSection.tsx
│   ├── SocialProof.tsx
│   └── CTASection.tsx
└── layout/            # Global layout components
    ├── Navigation.tsx
    └── Footer.tsx

data/
├── insights.ts        # Insight article data
├── prompts.ts         # Prompt library content
└── story-mining-prompt.md

public/
└── logo/              # Brand assets
```

### Design System

**Color Palette** (defined in `app/globals.css`):
- **Primary Brand**: `--brand-gold` (#ffb829)
- **Dark Backgrounds**: `--grey-950` (#0a0a0b) through `--grey-900`
- **Accents**: Blue, Purple, Emerald, Rose

**Typography**:
- Display (Headings): Fraunces (`--font-display`)
- Body Text: DM Sans (`--font-body`)
- Monospace: JetBrains Mono (`--font-mono`)

**Key Utilities**:
- `.text-gold-gradient` - Animated gold gradient text effect
- `.glass` / `.glass-light` - Glassmorphic containers with backdrop blur
- `.card-dark` - Elevated card with hover effects
- `.grain-overlay` - Fixed grain texture overlay
- `.glow-gold` - Gold glow shadow effects

### Routing Notes

- `/in-action` redirects to `/articles` (see `next.config.ts`)
- Most pages use client components (`'use client'`)
- Path aliases use `@/*` to reference root directory

### Content Architecture

The site follows a specific content strategy outlined in `cognitive-fingerprint-site-architecture.md`:
1. **Home** (`/`) - The Hook
2. **Method** (`/method`) - The Science
3. **Articles** (`/articles`) - Proof of Methodology (Substack Deep Dives)
4. **Insights** (`/insights`) - SEO-optimized articles
5. **Results** (`/results`) - Testimonials
6. **Start** (`/start`) - Tiered Entry Points
7. **Assessment** (`/assessment`) - Interactive Invisibility Test

Key messaging concepts:
- "Invisible expertise" - The core problem being solved
- Polanyi's Paradox - "We know more than we can tell"
- Cognitive patterns become automatic and unconscious with mastery
- The "map vs guide" framework (sharing methodology creates MORE demand)

### Data Management

Content is managed in `data/` directory as TypeScript files, not a CMS:
- `insights.ts` - Article metadata & content for `/insights`
- `prompts.ts` - Prompt library content

When adding new content, update these files rather than creating markdown files.

## Development Workflow

### Working on Features

Before starting any task:
1. Read the codebase for relevant files
2. Write a plan to `tasks/todo.md` with checkboxes
3. Confirm plan with the user before implementing
4. Keep changes simple - minimize code impact
5. Run the code after changes to verify it works
6. Check for security issues (no API keys in frontend)

### Style Guidelines

- Use existing color variables from `globals.css`
- Match animation patterns from Framer Motion (fade-in, slide-up)
- Follow the glass morphism and gradient aesthetic
- Maintain generous spacing and visual hierarchy
- Use `motion` from Framer Motion for animations
- Component animations should use `initial`, `animate`, `transition` props

### TypeScript Patterns

- Use absolute imports with `@/` prefix
- Client components must have `'use client'` directive
- Metadata is defined in layout files
- Type imports use `import type` syntax

### Environment Variables

Store in `.env.local` (not committed):
- Never hardcode API keys, passwords, or sensitive data
- Create `.env.example` showing required variables

## Testing

Currently no test framework is configured. When implementing tests, check `README.md` first.

## Common Pitfalls

1. **Client vs Server Components**: Most components use `'use client'` for Framer Motion
2. **Redirects**: Check `next.config.ts` for URL redirects before creating new routes
3. **CSS Variables**: Use CSS variables, not Tailwind's default colors
4. **Font Loading**: Fonts are loaded in root layout, available via CSS variables
5. **Link Components**: Use Next.js `Link` component for internal navigation

## References

- Site architecture details: `cognitive-fingerprint-site-architecture.md`
- Current tasks: `tasks/todo.md`
- Next.js 16 docs: https://nextjs.org/docs
- Framer Motion: https://www.framer.com/motion/
