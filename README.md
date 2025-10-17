# Profile Card

A small, mobile-first responsive profile card built with plain HTML and CSS. Clean, colorful design with progressive enhancement for tablet and desktop. Easy to customize for personal portfolios or component libraries.

## Preview

Open `index.html` in your browser to view the component. The design is mobile-first (stacked layout) and adapts at these breakpoints:

- Tablet enhancements: `@media (min-width: 600px)`
- Desktop layout: `@media (min-width: 1000px)`

## Features

- Mobile-first single-column layout for small screens
- Tablet and desktop progressive enhancements (inline social links, larger avatar, two-column grid)
- Colorful gradients, avatar ring, subtle elevation and hover effects
- Hobbies and dislikes shown as tag-like chips
- Accessible focus-visible outlines and semantic markup
- No dependencies — plain HTML/CSS (optional tiny JS for time display)

## Project structure

- `index.html` — markup for the profile card
- `style.css` — mobile-first stylesheet with CSS variables and media queries
- `script.js` — optional script for dynamic content (e.g., current time)
- `README.md` — this file

## Quick start

1. Clone or download this project folder.
2. Open `index.html` in a browser (double-click or use your editor's Live Server extension).

## Customization

- Colors: edit the CSS variables at the top of `style.css` (in the `:root` block), e.g. `--accent-1`, `--accent-2`, `--muted`.
- Text & avatar: change the HTML in `index.html` (name, bio, and the `img` `src`).
- Social links: update the anchors inside the `.social-links` list.
- Breakpoints: adjust the media query `min-width` values in `style.css` to match your target devices.

## Accessibility

- Uses semantic HTML (header, nav, section) and ARIA attributes where appropriate.
- Keyboard focus styles included (`:focus-visible`) for interactive elements.
- If you need higher contrast, tweak the CSS variables for color values.

## Author
Hakeem Bello
