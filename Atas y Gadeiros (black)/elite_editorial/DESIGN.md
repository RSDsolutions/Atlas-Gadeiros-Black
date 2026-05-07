---
name: Elite Editorial
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5b2'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#99907e'
  outline-variant: '#4d4637'
  surface-tint: '#e6c364'
  primary: '#e6c364'
  on-primary: '#3d2e00'
  primary-container: '#c9a84c'
  on-primary-container: '#503d00'
  inverse-primary: '#755b00'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#c9c6c6'
  on-tertiary: '#313030'
  tertiary-container: '#adabab'
  on-tertiary-container: '#40403f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe08f'
  primary-fixed-dim: '#e6c364'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#584400'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1b1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Anton
    fontSize: 96px
    fontWeight: '400'
    lineHeight: 100%
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 110%
    letterSpacing: 0.04em
  headline-md:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 120%
    letterSpacing: 0.04em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 160%
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
    letterSpacing: '0'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 100%
    letterSpacing: 0.15em
spacing:
  unit: 4px
  gutter: 24px
  margin: 64px
  container-max: 1440px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 80px
---

## Brand & Style
The design system is engineered for a high-end sports consultancy, evoking the prestige of an exclusive members' club combined with the precision of a strategic advisory firm. The brand personality is authoritative, clandestine, and elite, moving away from typical "energetic" sports aesthetics toward a more reserved, editorial direction.

The visual style is a fusion of **Minimalism** and **High-Contrast Editorial**. It prioritizes extreme clarity, structural grid discipline, and a monochromatic foundation punctuated by a single metallic accent. The objective is to create an interface that feels like a bespoke digital broadsheet for the football executive class.

- **Minimalism:** Use generous whitespace to signify luxury and importance.
- **High-Contrast:** Sharp transitions between deep blacks and rich gold create a focused, high-stakes atmosphere.
- **Atmosphere:** Professional, quiet, and powerful. No decorative flourishes; every element must serve a functional or structural purpose.

## Colors
The palette is rooted in a "Deep Dark" philosophy to minimize visual noise and maximize the impact of the gold accent.

- **Backgrounds:** The primary canvas is #0A0A0A. This creates a true-black foundation that allows content to recede or pop based on layering.
- **Surfaces:** Use #141414 for large section containers and #1C1C1C for interactive cards and elevated surfaces.
- **Accent:** Rich Gold (#C9A84C) is the sole driver of action. It is used sparingly for primary actions, critical data points, and thin structural borders to maintain its premium status.
- **Typography:** Headlines and primary body text use pure white (#FFFFFF) or off-white (#F5F5F5). Secondary metadata uses a muted slate gray (#888888).

## Typography
The typographic hierarchy follows an editorial broadsheet logic.

- **Headlines:** 'Anton' provides a heavy, vertical impact reminiscent of vintage sports journalism and modern luxury branding. All headlines should be uppercase to reinforce an authoritative tone.
- **Body Text:** 'Inter' is selected for its systematic, neutral quality. It balances the aggressive nature of the headlines with corporate legibility.
- **Rhythm:** Maintain high contrast between headline sizes and body text. Use 'Display-XL' for section headers to create a "cover story" feel.
- **Spacing:** Tighten letter-spacing on large headlines for a compact, architectural look. Increase letter-spacing on labels and small caps to improve airiness and premium feel.

## Layout & Spacing
The layout follows a **Fixed 12-Column Grid** for desktop and a **4-Column Grid** for mobile. 

- **Editorial Alignment:** Content should often be asymmetrical. For example, a headline may span 8 columns while the description spans the adjacent 4, creating an imbalanced but sophisticated visual rhythm.
- **Margins:** Exceptionally wide horizontal margins (64px+) are used to "squeeze" the content, directing focus to the center and suggesting exclusivity.
- **Vertical Spacing:** Use large vertical gaps (stack-lg) between major sections to allow the design to breathe. Avoid overcrowding components.
- **Sticky Navigation:** The primary navigation must remain fixed at the top, utilizing a solid #0A0A0A background with a 1px gold bottom border to provide a constant anchor for the user.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Low-Contrast Outlines**. Shadows are strictly forbidden to maintain the flat, editorial aesthetic.

- **Level 0 (Base):** #0A0A0A - The canvas.
- **Level 1 (Sections):** #141414 - Used for grouping content or full-width background stripes.
- **Level 2 (Interactive):** #1C1C1C - Used for cards and input fields.
- **Structural Outlines:** Use 1px solid borders in #C9A84C (Gold) for primary focus elements and #2A2A2A for subtle containment. These lines should be razor-sharp.

## Shapes
The shape language is strictly **Sharp (0px)**. 

Every element—from buttons and input fields to cards and images—must have 90-degree corners. This evokes a sense of architectural permanence, discipline, and corporate rigor. Avoid any rounding or organic curves which might soften the professional, high-stakes impact of the firm.

## Components
- **Buttons:**
  - *Primary:* Solid #C9A84C background with #0A0A0A text. Sharp corners. Uppercase Anton text.
  - *Secondary (Outlined):* 1px #C9A84C border, no fill, Gold text. Used for less critical actions.
- **Cards:** Background #1C1C1C. No shadows. A 1px gold top-border is used as a signature accent for "Featured" or "Premium" advisory insights.
- **Navigation:** Sticky top bar, #0A0A0A fill. Nav items in Inter, small-caps, white text. The active state is indicated by a 2px gold underline.
- **Input Fields:** Background #141414 with a 1px #2A2A2A border. On focus, the border changes to #C9A84C.
- **Data Visuals:** Use gold for line graphs and charts against the dark background. No gradients or fills; use thin, precise strokes.
- **Management Chips:** Small, rectangular labels with #1C1C1C background and gold text, used for categorizing athlete portfolios or service types.