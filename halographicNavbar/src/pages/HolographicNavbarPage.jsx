import React from 'react';
import HolographicNavbar from '../components/HolographicNavbar';

const HolographicNavbarPage = () => {
  return (
    <div>
      {/* Navbar'ı çağır */}
      <HolographicNavbar />

      {/* Kaydırmayı test etmek için boş içerik */}
      <div className="pt-32 px-8"> {/* Navbar'ın altına içerik sığması için padding-top */}
        <h1 className="text-4xl font-bold mb-4">Holographic Navbar Test Page</h1>
        {/* Çok fazla boşluk */}
        <div className="h-[200vh] border-l-2 border-dashed border-gray-700 ml-4 pl-4">
          <p>Scrolling area...</p>
        </div>
      </div>
    </div>
  );
};

export default HolographicNavbarPage;