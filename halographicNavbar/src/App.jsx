import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HolographicNavbarPage from './pages/HolographicNavbarPage'; // 1. YENİ IMPORT

function App() {
  return (
    <Routes>
      {/* Ana sayfa olarak Holografik Navbar sayfasını ayarla */}
      <Route path="/" element={<HolographicNavbarPage />} /> 

      {/* Diğer sayfalar (varsa) */}
    </Routes>
  );
}

export default App;