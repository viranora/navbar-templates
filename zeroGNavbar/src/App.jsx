import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ZeroGNavbarPage from './pages/ZeroGNavbarPage'; // 1. YENİ IMPORT


function App() {
  return (
    <Routes>
      {/* Ana sayfa olarak Sıfır-G Navbar sayfasını ayarla */}
      <Route path="/" element={<ZeroGNavbarPage />} /> 

      {/* Bu projede başka rota yok */}
    </Routes>
  );
}

export default App;