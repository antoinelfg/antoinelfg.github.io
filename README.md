# PhD Academic Portfolio

A premium personal academic website for a first-year PhD student in AI/computational research with a focus on geometry, probability, and biomedical machine learning.

## Design Philosophy

This website moves beyond generic academic templates to create a distinctive, memorable research identity that balances:

- **Serious & credible** for academic/professional audiences
- **Visually ambitious** with geometric and probabilistic aesthetics
- **Modern & refined** typography and interactions
- **Colorful yet controlled** with orange as the signature accent

## Features

### Visual Identity
- Geometric animated backgrounds with particle networks
- Custom color system (orange, yellow, red, green, blue, purple)
- Light/dark mode with polished toggle
- Premium typography using Space Grotesk and Inter
- Smooth animations and hover effects using Motion (formerly Framer Motion)

### Pages

**Home Page**
- Hero section with animated geometric background and photo frame
- Bio/positioning section
- Research focus cards (6 key areas)
- Featured work/projects grid
- Experience timeline
- Quick facts and CV download
- Contact footer

**Projects/WIP Page**
- Detailed project cards with expandable content
- Support for video/Manim animation placeholders
- Research tags and methods
- External links (GitHub, papers, etc.)
- More experimental, immersive feel

### Components

Reusable design system includes:
- Navigation with active state indicators
- Theme toggle (light/dark)
- Geometric background animations
- Project cards with hover states
- Research focus cards
- Timeline items
- Tag/badge system
- Social link rows
- Footer with contact info

## Technical Stack

- **React** with TypeScript
- **React Router** for multi-page navigation
- **Motion** (motion/react) for animations
- **Tailwind CSS v4** for styling
- **Lucide React** for icons

## Customization

### Update Personal Information

1. **Hero section** (`/src/app/components/Hero.tsx`):
   - Name, title, headline
   - Social links (GitHub, LinkedIn, Lab page)
   - Profile photo URL
   - Email address

2. **Bio** (`/src/app/components/Bio.tsx`):
   - Bio text
   - Research highlights

3. **Timeline** (`/src/app/components/Timeline.tsx`):
   - Education and work experience

4. **Projects** (`/src/app/pages/Projects.tsx`):
   - Project details, images, tags
   - Links to GitHub, papers, etc.

### Color Customization

Edit `/src/styles/theme.css` to adjust the color palette:
- `--orange`: Primary accent color
- `--yellow`, `--red`, `--green`, `--blue`, `--purple`: Supporting colors
- Separate values for light and dark modes

### Typography

Fonts are defined in `/src/styles/fonts.css`:
- **Display**: Space Grotesk (headings)
- **Body**: Inter (body text)
- **Mono**: JetBrains Mono (code/tags)

## Deployment

This site is designed for static hosting and works great with:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Build command:
```bash
npm run build
```

## Structure

```
/src
  /app
    /components     # Reusable UI components
    /pages          # Page components (Home, Projects)
    App.tsx         # Root app component
    routes.tsx      # React Router configuration
  /styles
    fonts.css       # Font imports
    index.css       # Global styles
    theme.css       # Color system and theme
```

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Strong color contrast in both themes
- Responsive design (mobile, tablet, desktop)

## Future Enhancements

- Add actual video/animation embedding for Manim exports
- Blog section for research notes
- Publications list with BibTeX integration
- Interactive demos for projects
- Analytics integration

---

Built with geometry, probability, and attention to detail.
