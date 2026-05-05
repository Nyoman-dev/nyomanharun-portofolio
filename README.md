<!-- @format -->

# Nyoman Harun Portfolio

Professional single-page portfolio website for fresh graduate IT Nyoman Harun.

## 🚀 Quick Start

1. Open `index.html` in any modern browser
2. No setup, no dependencies required

## 🎨 Key Decisions

| Decision       | Value                                                             | Why                                                                                                                                  |
| -------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Color**      | Dark-tech (#0a0a0a bg, #00ff88 neon green accent)                 | Startup-friendly, high contrast for recruiters scanning portfolios, memorable "tech glow" without clichés                            |
| **Typography** | Orbitron (display) + Space Mono (body)                            | Futuristic bold display for hero/sections, monospaced body evokes coding precision, perfect for dev portfolio                        |
| **Layout**     | Mobile-first semantic HTML5, CSS Grid/Flexbox, single-page scroll | Semantic structure for accessibility/SEO, mobile-first per specs (375px→1280px), smooth user flow Hero→About→Skills→Projects→Contact |
| **Style**      | Dark minimalism w/ subtle animations                              | Professional for corporate, edgy neon for startups, "wow" typing effect grabs attention in 5s, Intersection Observer reveals         |

## ✨ Features

- **Typing Animation**: Hero cycles name/title with blink cursor (vanilla JS)
- **Mobile Navbar**: Hamburger → X animation, full-width dropdown (<768px)
- **Scroll Animations**: Skill bars fill + fade-up reveals (Intersection Observer)
- **Responsive**: Breakpoints 375px/768px/1280px
- **Accessible**: ARIA labels, focus states, contrast ≥4.5:1
- **Performance**: No frameworks, lightweight, instant load

## 🔧 Customization

```
1. Skills: Edit data-width="90" → your %
2. Projects: Update links/descriptions in #projects
3. Contact: Replace email/LinkedIn/GitHub hrefs
4. Colors: Modify CSS :root vars (easy theming)
```

## 📱 Responsive Testing

```
Mobile: <768px → Hamburger menu
Tablet: 768px → Horizontal nav + 2-col projects
Desktop: 1280px+ → Max layout
```

Built with HTML5, CSS3, Vanilla JS. Production-ready for recruiters.
