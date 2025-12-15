# Adding Prompts & Workflows to the Site

## Step 1: Clarify the Basics

Before adding anything, confirm:

1. **Free or Paid?**
   - Free: `isPremium: false`
   - Paid: `isPremium: true`

2. **Single Prompt or Workflow Pack?**
   - **Single Prompt**: One prompt, lives in `/data/prompts.ts` → `prompts` array
   - **Workflow Pack**: Multi-step process (3-5 prompts that feed into each other), needs a `.md` file + entry in `workflows` array

---

## Adding a Single Prompt

### Required Fields

```typescript
{
  id: '8',                           // Next available number
  slug: 'your-prompt-slug',          // URL-friendly, lowercase, hyphens
  title: 'Your Prompt Title',
  description: 'One sentence explaining what it does and who it\'s for.',
  category: 'extraction',            // extraction | positioning | content | analysis
  difficulty: 'beginner',            // beginner | intermediate | advanced
  isPremium: false,                  // true for paid
  thumbnail: '/images/prompts/your-prompt-slug.png',
  prompt: `The actual prompt text here...`,
  whatToLookFor: [                   // Optional but recommended
    'What users should notice in the output',
    'Key patterns or sections',
  ],
  tags: ['relevant', 'tags'],
}
```

### File Locations
- **Data**: Add to `prompts` array in `/data/prompts.ts`
- **Thumbnail**: Save to `/public/images/prompts/[slug].png`

---

## Adding a Workflow Pack

### Step 1: Save the Markdown File

Save the full workflow content to:
```
/public/prompts/workflows/[slug].md
```

Example: `/public/prompts/workflows/authority-architecture-pack.md`

### Step 2: Add Entry to Data File

```typescript
{
  id: 'w7',                          // w + next number
  slug: 'your-workflow-slug',
  title: 'Your Workflow Pack Name',
  description: 'What transformation this workflow creates.',
  category: 'extraction',            // extraction | positioning | content | analysis
  isPremium: true,                   // Workflows are typically premium
  thumbnail: '/images/prompts/your-workflow-slug.png',
  file: '/prompts/workflows/your-workflow-slug.md',
  steps: [
    { stepNumber: 1, title: 'Step 1 Title' },
    { stepNumber: 2, title: 'Step 2 Title' },
    { stepNumber: 3, title: 'Step 3 Title' },
  ],
  estimatedTime: '60 min',
  tags: ['relevant', 'tags'],
}
```

### File Locations
- **Markdown**: `/public/prompts/workflows/[slug].md`
- **Data**: Add to `workflows` array in `/data/prompts.ts`
- **Thumbnail**: `/public/images/prompts/[slug].png`

---

## Generating Thumbnails (Nano Banana Style)

### Quick Format

State your concept, then add:
> "Create this image using the Cognitive Fingerprint brand style, in landscape orientation."

### Full Prompt Template

```
Create a digital art illustration based on the following user concept, rigorously adhering to the "Cognitive Fingerprint" brand style. The image should be generated in landscape orientation.

**Stylistic Elements to Incorporate:**
- **Background:** Utilize a deep, pure black, high-contrast backdrop as the primary background for the scene.
- **Color Palette:** The primary subjects or central figures should be rendered in a grayscale or heavily desaturated monochromatic palette.
- **Accent Color:** The key accent color for highlights, glows, special effects, or revealed elements will be a vibrant, warm golden/amber.
- **Lighting:** Employ strong, dramatic, and often directional lighting. This should create defined highlights and shadows on subjects and emphasize the golden glow effects. Elements of "hidden value" or special focus should illuminate with the golden light.
- **Composition:** Aim for a clean, impactful, and often minimalist composition. Utilize negative space effectively to make subjects stand out.
- **Details:** If the concept involves revealing "hidden" elements or special insights, these should be represented by the golden glow or abstract golden patterns.
- **Text (if applicable):** Any integrated text should be bold, uppercase, white, with a subtle golden glow or outline.

**Overall Aesthetic:** The final image must convey a sleek, modern, sophisticated, and powerful feel. It should be high-contrast, professional, and visually iconic.

**Overall Style Notes:**
Nano Banana style, high-contrast, deep black, glowing golden/amber accents, monochromatic subjects, sleek, modern, sophisticated, iconic, landscape orientation.

**User Concept:** [YOUR CONCEPT HERE]
```

### Thumbnail Naming Convention

Always match the slug:
- Prompt slug: `problem-solution-extractor`
- Thumbnail: `problem-solution-extractor.png`
- Path: `/public/images/prompts/problem-solution-extractor.png`

---

## Checklist

### Single Prompt
- [ ] Clarified: Free or Paid?
- [ ] Added entry to `prompts` array in `/data/prompts.ts`
- [ ] All required fields filled
- [ ] Generated thumbnail using Nano Banana format
- [ ] Saved thumbnail to `/public/images/prompts/[slug].png`

### Workflow Pack
- [ ] Clarified: Free or Paid?
- [ ] Saved `.md` file to `/public/prompts/workflows/[slug].md`
- [ ] Added entry to `workflows` array in `/data/prompts.ts`
- [ ] Extracted step titles into `steps` array
- [ ] Generated thumbnail using Nano Banana format
- [ ] Saved thumbnail to `/public/images/prompts/[slug].png`

---

## Current Inventory

### Free Prompts
1. Value Archaeology
2. Framework Naming Workshop
3. Transcript-to-Content Extractor
4. The Problem-Solution Extractor
5. The Uncle Test
6. The Decision You Didn't Know You Made
7. The Pattern Your Team Can't Copy

### Paid Prompts
1. The Expert Blind Spot Detector
2. Pricing Justification Builder
3. Story Mining System
4. Find Your Stadium Sign
5. The Three Lenses

### Workflow Packs (All Paid)
1. The Authority Architecture Pack™
2. The Breakthrough Pattern Pack
3. The Content Engine Pack
4. The Decision Architecture Pack
5. The Resistance Alchemist Pack
6. The Signature Method Pack™
7. The Language Mining Method™
