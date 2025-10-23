# Holographic Navbar - Navbar Templates

<br>

<div align="center">
  <img src="src/assets/Ekran Resmi 2025-10-23 19.05.00.png" alt="Holographic Ribbon Navbar Demo" width="600"/>
  <p><em>(Replace placeholder with actual visual preview)</em></p>
</div>

<br>

A minimalist and elegant navbar component featuring a fluid, light-based ribbon aesthetic. Designed as part of Nora's Navbar Gallery, this experiment focuses on smooth morphing animations and subtle scroll interactions.

It demonstrates how Framer Motion's `layoutId` can create seamless transitions for active state indicators, giving the impression of a flowing, adaptive element.

<br>

## ✨ Key Features

* **Flowing Highlight:** Instead of a static underline, a gradient ribbon smoothly animates (`layoutId`, `type: 'spring'`) to position itself under the currently active navigation link.
* **Scroll Adaptation:** The navbar subtly changes its padding, background opacity, and blur intensity (`useScroll`, `useMotionValueEvent`, `animate`) as the user scrolls down the page, becoming less intrusive.
* **Glassmorphism Effect:** Uses Tailwind CSS (`backdrop-blur`, opacity) to create a semi-transparent, blurred background effect that adapts on scroll.
* **Clean & Minimalist:** Focuses on typography and the fluid motion of the highlight ribbon against a dark background.

<br>

## 🚀 Tech Stack

* **Core:** React.js
* **Animation:** Framer Motion (`layoutId`, `useScroll`, `useMotionValueEvent`)
* **Styling:** Tailwind CSS

<br>

## 🔧 How to Use / View

This component is part of the `nora-navbar-gallery` project.

1.  **Ensure the main project is set up:**
    * Clone the `nora-navbar-gallery` repository.
    * Install dependencies: `npm install`
    * Make sure Tailwind CSS is configured correctly.

2.  **Navigate to the component's route:**
    * Run the development server: `npm run dev`
    * This component might be displayed on the root route (`/`) or a specific route. Check `src/App.jsx` for the route configuration (e.g., `/`).

3.  **Integrate into your own project:**
    * Copy the `HolographicNavbarPage.jsx` and `HolographicNavbar.jsx` components.
    * Install the required dependencies (`framer-motion`, `react-router-dom`).
    * Ensure your project has Tailwind CSS set up.
    * Adapt the `navItems` array and link handling (`onClick` or use `react-router-dom Link`) as needed.

<br>

---

<div align="center">
  <p>Crafted with elegance, by</p>
  <h3>Nora</h3>
</div>
