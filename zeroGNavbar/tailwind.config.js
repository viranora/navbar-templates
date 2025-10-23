/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
         'space-bg': '#020617', // Çok Koyu Mavi/Siyah
         'orb-blue': '#38BDF8', // Parlak Mavi (Sky-500)
         'orb-purple': '#A78BFA',// Parlak Mor (Violet-400)
       },
       // İsteğe bağlı: Yıldızlı arka plan için
       backgroundImage: {
         'stars': "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"%3E%3Cg fill=\"%23334155\" fill-opacity=\"0.4\"%3E%3Ccircle cx=\"50\" cy=\"50\" r=\"1\"/%3E%3Ccircle cx=\"10\" cy=\"10\" r=\"1\"/%3E%3Ccircle cx=\"90\" cy=\"90\" r=\"1\"/%3E%3Ccircle cx=\"10\" cy=\"90\" r=\"1\"/%3E%3Ccircle cx=\"90\" cy=\"10\" r=\"1\"/%3E%3Ccircle cx=\"30\" cy=\"70\" r=\"1\"/%3E%3Ccircle cx=\"70\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/svg%3E')",
       }
    },
  },
  plugins: [],
}