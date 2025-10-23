// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Sadece Kinetic Navbar sayfasını import ediyoruz
import KineticNavbarPage from './pages/KineticNavbarPage'; 

function App() {
  return (
    <Routes>
      {/* Ana sayfa olarak Kinetic Navbar sayfasını ayarla */}
      <Route path="/" element={<KineticNavbarPage />} /> 
      
      {/* Bu projede başka rota yok */}
    </Routes>
  );
}

export default App;