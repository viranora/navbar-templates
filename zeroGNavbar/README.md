# Zero-G Navbar - Navbar Templates

<br>

<div align="center">
  <img src="src/assets/Ekran Resmi 2025-10-23 19.00.45.png" alt="Zero-G Orbs Navbar Demo" width="600"/>
</div>

<br>

A highly interactive and unconventional navbar component inspired by zero-gravity environments and futuristic interfaces. Designed as part of Nora's Navbar Gallery, this experiment replaces the traditional navigation bar with floating, interactive orbs.

It demonstrates physics-based animations and direct manipulation concepts, creating a playful and engaging way to navigate.

<br>

## ✨ Key Features

* **No Traditional Bar:** Navigation links are represented as individual floating "orbs".
* **Idle Animation:** Orbs gently drift and change position over time using `useSpring` for a zero-gravity feel.
* **Mouse Repulsion:** Orbs react to the mouse cursor, moving away slightly when the cursor gets close (`useMotionValue`, `useEffect`, distance calculation). This creates a tangible sense of interaction.
* **Physics-Based Movement:** All movements (idle, repulsion) utilize Framer Motion's spring physics (`useSpring`) for natural-looking motion.
* **Activation State:** The currently active orb scales up slightly and emits a subtle energy ring animation.
* **3D/Glass Effect:** Orbs use gradients, borders, and `backdrop-blur` to achieve a semi-transparent, glossy appearance.

<br>

## 🚀 Tech Stack

* **Core:** React.js
* **Animation:** Framer Motion (`useSpring`, `useMotionValue`, `useTransform`, `useEffect`)
* **Styling:** Tailwind CSS

<br>

## 🔧 How to Use / View

This component is part of the `nora-navbar-gallery` project.

1.  **Ensure the main project is set up:**
    * Clone the `nora-navbar-gallery` repository.
    * Install dependencies: `npm install`
    * Make sure Tailwind CSS is configured correctly (including the custom `orb-*` colors).

2.  **Navigate to the component's route:**
    * Run the development server: `npm run dev`
    * Check `src/App.jsx` for the specific route assigned to this component (e.g., `/zero-g-navbar`).

3.  **Integrate into your own project:**
    * Copy the `ZeroGNavbarPage.jsx` and `ZeroGNavbar.jsx` components (which includes the `Orb` sub-component).
    * Install the required dependencies (`framer-motion`, `react-router-dom`).
    * Ensure your project has Tailwind CSS set up with the necessary colors.
    * Adapt the `navItems` array and link handling (`onClick`) as needed. Note that the layout is based on flexbox centering, adjust positioning if integrated differently.

<br>

---

<div align="center">
  <p>Floating through concepts, by</p>
  <h3>Nora</h3>
</div>
