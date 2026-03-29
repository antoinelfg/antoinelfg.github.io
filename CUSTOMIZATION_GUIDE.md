# Customization Guide

This guide will help you personalize your academic portfolio website.

## Quick Start Checklist

### 1. Personal Information

**Hero Section** (`/src/app/components/Hero.tsx`)
- [ ] Line 33: Update name from "Dr. Alex Chen"
- [ ] Line 33: Change accent color on name if desired
- [ ] Line 39-42: Update headline and description
- [ ] Line 44-48: Update subheading text
- [ ] Line 107-110: Update profile photo URL
- [ ] Lines 63-70: Update CTA button links
- [ ] Lines 76-83: Update social links (GitHub, LinkedIn, Lab)

**Bio Section** (`/src/app/components/Bio.tsx`)
- [ ] Lines 28-36: Update bio text with your story

**Timeline** (`/src/app/components/Timeline.tsx`)
- [ ] Lines 8-39: Replace with your education and work experience
- [ ] Update: title, organization, location, period, description

**Quick Facts** (`/src/app/components/QuickFacts.tsx`)
- [ ] Lines 8-11: Update affiliation, lab, location, role
- [ ] Lines 14-25: Update skills list
- [ ] Lines 94-109: Update research themes

**Footer** (`/src/app/components/Footer.tsx`)
- [ ] Line 25: Update name
- [ ] Lines 27-29: Update bio description
- [ ] Line 41: Update email address
- [ ] Lines 46-51: Update social links

### 2. Projects

**Featured Work** (`/src/app/components/FeaturedWork.tsx`)
- [ ] Lines 7-40: Update the 4 featured projects
- [ ] For each project, update: title, description, status, tags, image URL

**Projects Page** (`/src/app/pages/Projects.tsx`)
- [ ] Lines 9-95: Update all 6 detailed projects
- [ ] For each project, customize:
  - title, summary, description
  - tags, status, statusColor
  - image URL
  - methods array
  - videoUrl (optional)
  - githubUrl, externalUrl (optional)
- [ ] Line 112: Update stat values if needed
- [ ] Line 150: Update collaboration CTA text
- [ ] Line 155: Update email address

### 3. Research Focus

**Research Focus Cards** (`/src/app/components/ResearchFocus.tsx`)
- [ ] Lines 7-42: Customize the 6 research focus areas
- [ ] For each: title, description, color
- [ ] Choose from available colors: orange, blue, purple, yellow, green, red

### 4. Navigation & Site Info

**Navigation** (`/src/app/components/Navigation.tsx`)
- [ ] Line 28: Update site name/logo text
- [ ] Lines 58 & 63: Update CV download link
- [ ] Lines 66-73 & 139-145: Update contact email

### 5. Color Customization

**Theme Colors** (`/src/styles/theme.css`)

Light mode colors (lines 39-46):
```css
--orange: #ff6b35;      /* Primary accent */
--yellow: #ffd23f;
--red: #ef476f;
--green: #06ffa5;
--blue: #118ab2;
--purple: #9d4edd;
```

Dark mode colors (lines 88-95):
```css
--orange: #ff7849;      /* Slightly adjusted for dark mode */
--yellow: #ffd83f;
--red: #ff5c85;
--green: #00ff9f;
--blue: #3da9d4;
--purple: #b76fff;
```

### 6. Images

Replace placeholder images throughout the site:

**Hero Photo** (`/src/app/components/Hero.tsx`)
- Line 107: Replace with your professional photo

**Project Images**
- FeaturedWork.tsx (lines 12, 20, 28, 36): Update image URLs
- Projects.tsx (lines 14, 24, 33, 43, 52, 61): Update image URLs

**Getting New Images:**
- Use Unsplash for stock photos: https://unsplash.com
- Or replace with your own images
- Recommended aspect ratio: 16:9 or square for portraits

### 7. Fonts (Optional)

**Current Fonts** (`/src/styles/fonts.css`):
- Display (headings): Space Grotesk
- Body (text): Inter  
- Mono (code/tags): JetBrains Mono

To change fonts:
1. Update Google Fonts import URL (line 1)
2. Update CSS variables (lines 3-5)

### 8. Contact Information

Update all instances of:
- [ ] Email: `alex.chen@stanford.edu` → your email
- [ ] GitHub: Update URLs in Hero, Footer, and project cards
- [ ] LinkedIn: Update URLs in Hero and Footer
- [ ] Lab page: Update URLs where applicable

## Tips

### Color System
The site uses 6 accent colors that you can reference in components:
- `var(--orange)` - Primary accent
- `var(--yellow)` - Warm accent
- `var(--red)` - Bold accent
- `var(--green)` - Fresh accent
- `var(--blue)` - Cool accent
- `var(--purple)` - Rich accent

### Adding New Projects

In `Projects.tsx`, copy this template:

```typescript
{
  title: "Your Project Title",
  summary: "One-line summary",
  description: "Detailed description here...",
  tags: ["Tag1", "Tag2", "Tag3"],
  status: "Ongoing", // or "Research", "Completed", "WIP", etc.
  statusColor: "orange", // Choose from: orange, blue, green, purple, yellow, red
  image: "https://your-image-url.jpg",
  videoUrl: "optional-video.mp4", // Optional
  methods: ["Method1", "Method2"], // Optional
  githubUrl: "#", // Optional
  externalUrl: "#" // Optional
}
```

### Testing Dark Mode

The site automatically detects system preference and saves user choice.
- Toggle using the sun/moon icon in navigation
- Preference is saved to localStorage
- Both modes are fully designed (not auto-inverted)

### Mobile Responsiveness

The site is fully responsive:
- Mobile: Single column layout, hamburger menu
- Tablet: 2-column grids
- Desktop: Full layout with 3-column grids

Test at different screen sizes to ensure content looks good.

## Common Customizations

### Change Primary Accent Color

If you want a different primary color instead of orange:

1. Update in `/src/styles/theme.css`:
   ```css
   --orange: #your-color; /* Both light and dark mode */
   ```

2. All buttons, highlights, and accents will automatically update!

### Add a New Page

1. Create new page in `/src/app/pages/YourPage.tsx`
2. Add route in `/src/app/routes.tsx`:
   ```typescript
   { path: "your-page", Component: YourPage }
   ```
3. Add nav link in `/src/app/components/Navigation.tsx`

### Modify Animation Speed

Animations use Motion (Framer Motion). To adjust:

Find `transition={{ duration: 0.6 }}` and change duration value.
Lower = faster, higher = slower.

## Need Help?

- React Router: https://reactrouter.com
- Motion: https://motion.dev
- Tailwind CSS: https://tailwindcss.com
- Lucide Icons: https://lucide.dev

---

Remember: All placeholder text is meant to be replaced with your actual research and accomplishments!
