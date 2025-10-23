# Kinetic Navbar - Navbar Templates

<br>

<div align="center">
  <img src="src/assets/Ekran Resmi 2025-10-23 19.03.14.png" alt="Kinetic Circuit Board Navbar Demo" width="600"/>
</div>

<br>

An energetic and digital-themed navbar component inspired by cyberpunk aesthetics and circuit boards. Designed as part of Nora's Navbar Gallery, this experiment features glitch effects, assembly animations, and neon highlights.

It showcases how animation can convey a sense of energy and digital interaction within a standard UI element.

<br>

## ✨ Key Features

* **Assembly Animation:** The navbar and its links enter the screen with a staggered animation (`variants`, `staggerChildren`, `type: 'spring'`), simulating components being put together.
* **Glitch Text Effect:** Navigation links use a custom `GlitchText.jsx` component that applies a brief visual distortion effect (`keyframes`, `animation`) on mouse hover, configured via Tailwind CSS.
* **Neon Accents:** Utilizes bright neon colors (`neon-cyan`, `neon-green`) for highlights, borders, and text, against a dark `circuit-board` background.
* **Animated Underline:** An underline effect simulates "energy flow" by animating `scaleX` and `opacity` on the active or hovered link.
* **Cyberpunk Style:** Features uppercase, tracked-out typography and sharp visual elements consistent with the theme.

<br>

## 🚀 Tech Stack

* **Core:** React.js
* **Animation:** Framer Motion (`variants`, `staggerChildren`), Tailwind CSS (`keyframes`, `animation`)
* **Styling:** Tailwind CSS (with custom colors and keyframes)

<br>

## 🔧 How to Use / View

This component is part of the `nora-navbar-gallery` project.

1.  **Ensure the main project is set up:**
    * Clone the `nora-navbar-gallery` repository.
    * Install dependencies: `npm install`
    * **Crucially:** Ensure your `tailwind.config.js` includes the custom `colors`, `keyframes`, and `animation` definitions provided with this component. Restart the dev server after modifying the config.

2.  **Navigate to the component's route:**
    * Run the development server: `npm run dev`
    * Check `src/App.jsx` for the specific route assigned to this component (e.g., `/kinetic-navbar`).

3.  **Integrate into your own project:**
    * Copy the `KineticNavbarPage.jsx`, `KineticNavbar.jsx`, and `GlitchText.jsx` components.
    * Install the required dependencies (`framer-motion`, `react-router-dom`).
    * Update your `tailwind.config.js` with the necessary custom definitions.
    * Adapt the `navItems` array and link handling as needed.

<br>

---

<div align="center">
  <p>Digitally forged, by</p>
  <h3>Nora</h3>
</div>
