/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Neon Renkler
      colors: {
        'neon-cyan': '#00FFFF',
        'neon-green': '#39FF14',
        'circuit-board': '#1A1A1A', // Koyu zemin
      },
      // Glitch Animasyonu için Keyframes
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0, 0)', opacity: '1' },
          '10%': { transform: 'translate(-3px, -2px)', opacity: '0.8' },
          '20%': { transform: 'translate(3px, 2px)', opacity: '1' },
          '30%': { transform: 'translate(-3px, 2px)', opacity: '0.7' },
          '40%': { transform: 'translate(3px, -2px)', opacity: '1' },
          '50%': { transform: 'translate(-2px, 1px) skewX(5deg)', opacity: '0.8'},
          '60%': { transform: 'translate(2px, -1px) skewX(-5deg)', opacity: '1'},
          '70%': { transform: 'translate(-2px, -1px)', opacity: '0.9'},
          '80%': { transform: 'translate(2px, 1px)', opacity: '1'},
          '90%': { transform: 'translate(-1px, 2px)', opacity: '0.8'},
        }
      },
      // Animasyonu çağırmak için utility
      animation: {
        glitch: 'glitch 0.3s linear 1', // 0.3 saniye sürsün, 1 kere oynasın
      }
    },
  },
  plugins: [],
}