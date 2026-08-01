---
name: Ethereal Editorial
colors:
  surface: '#fcf9f4'
  surface-dim: '#dcdad5'
  surface-bright: '#fcf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ee'
  surface-container: '#f0ede8'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e5e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#474741'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f3f0eb'
  outline: '#787770'
  outline-variant: '#c8c7be'
  surface-tint: '#5f5e5a'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1c19'
  on-primary-container: '#85847f'
  inverse-primary: '#c9c6c1'
  secondary: '#715a3e'
  on-secondary: '#ffffff'
  secondary-container: '#fdddb9'
  on-secondary-container: '#786044'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1e1b13'
  on-tertiary-container: '#898378'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2dd'
  primary-fixed-dim: '#c9c6c1'
  on-primary-fixed: '#1c1c19'
  on-primary-fixed-variant: '#474743'
  secondary-fixed: '#fdddb9'
  secondary-fixed-dim: '#e0c29f'
  on-secondary-fixed: '#281803'
  on-secondary-fixed-variant: '#584329'
  tertiary-fixed: '#e9e2d4'
  tertiary-fixed-dim: '#ccc6b9'
  on-tertiary-fixed: '#1e1b13'
  on-tertiary-fixed-variant: '#4a463d'
  background: '#fcf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e5e2dd'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  margin-desktop: 80px
  margin-tablet: 40px
  margin-mobile: 20px
  gutter: 24px
  section-gap: 160px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is built for a high-end, editorial e-commerce experience. The brand personality is quiet, confident, and curated, targeting a discerning audience that values slow fashion and intentional living. The aesthetic draws from **Minimalism** and **Modern Editorial** movements, prioritizing large-scale product photography and meticulous typographic hierarchy over decorative interface elements.

The emotional response should be one of calm and exclusivity. By utilizing expansive whitespace and a restrained color palette, the UI disappears to let the products—shoes, apparel, and jewelry—act as the primary visual interest. The design system rejects aggressive "buy now" tactics in favor of a narrative-driven, gallery-like shopping experience.

## Colors

The palette is rooted in warm neutrals, moving away from sterile whites toward "paper" tones that feel tactile and organic.

- **Primary (Charcoal):** Used for typography, borders, and high-impact background blocks to create a sense of grounded luxury.
- **Secondary (Muted Gold/Sand):** Reserved for subtle accents, specific calls to action, and highlighted states.
- **Tertiary (Warm Grey/Putty):** Used for secondary UI backgrounds, image placeholders, and subtle separators.
- **Neutral (Cream/Sand):** The foundation of the system. Used for the primary background to soften the visual impact and provide an editorial feel.

## Typography

The typographic strategy balances the authority of a literary serif with the modern efficiency of a sharp grotesque. 

**Libre Caslon Text** is used for all headlines and display moments. It should be typeset with slightly tighter tracking in large sizes to maintain its editorial punch. **Hanken Grotesk** handles all functional UI elements, body copy, and navigation. 

Use `label-caps` for eyebrows and small functional headers to create clear section boundaries without needing heavy dividers. Line heights are intentionally generous in body copy to improve readability and reinforce the "slow" brand philosophy.

## Layout & Spacing

This design system utilizes a **Fixed Grid** approach for desktop (max-width: 1440px) and a **Fluid Grid** for mobile/tablet. 

- **Desktop:** 12-column grid with a generous 80px outer margin.
- **Tablet:** 8-column grid with 40px margins.
- **Mobile:** 4-column grid with 20px margins.

The "Section Gap" (160px) is critical for maintaining the high-end feel; it ensures that different content narratives do not bleed into one another. Spacing between elements (Stack) should follow a strict 8px base-unit scale to maintain rhythm across the boutique shopping experience.

## Elevation & Depth

To maintain the editorial feel, this design system avoids shadows and depth-based lighting effects. Instead, hierarchy is established through:

- **Tonal Layering:** Using the primary charcoal color for high-contrast containers against the neutral cream background.
- **Thin Outlines:** Utilizing 1px solid lines in Charcoal (at 10-20% opacity) to define product grids and navigation boundaries.
- **Full-Width Bleeds:** Occasional high-impact imagery should bleed to the edge of the viewport to break the grid and create a sense of immersion.
- **Overlap:** Small UI elements (like "New" badges or "Est. Date" boxes) can slightly overlap image containers to create a tactile, layered paper effect.

## Shapes

The shape language is strictly **Sharp (0px)**. 

Every UI element—from buttons and input fields to product cards and images—uses 90-degree corners. This evokes the precision of architectural design and the sharp edges of a printed high-fashion magazine. Circular elements are permitted only for specific functional icons (like a cart bubble) but should be avoided for structural components.

## Components

### Buttons
- **Primary:** Solid Charcoal background with White/Cream text. Rectangular, no radius.
- **Secondary:** Ghost style with a 1px Charcoal border or simple underline text with an arrow (e.g., `OUR STORY →`).
- **Hover States:** Subtle opacity shifts or background color transitions between Charcoal and Muted Gold.

### Input Fields
- Underline-only or 1px bordered boxes. 
- Labels use `label-caps` positioned above the field. 
- Placeholder text is light grey and uses `body-md`.

### Product Cards
- No borders or shadows.
- The image is the hero, followed by `label-caps` for the category and `body-md` for the product name and price.
- Aspect ratios should be consistent (e.g., 3:4 or 4:5) to mimic a lookbook.

### Chips/Filters
- Rectangular boxes with 1px borders. 
- Active state: Solid Charcoal background with Neutral text.
- Inactive state: Neutral background with 1px Putty border.

### Navigation
- Global header is sticky with a blurred Neutral background or a solid hairline border at the bottom.
- Typography is kept small and uppercase (`label-caps`) to remain unobtrusive.