import React from 'react';
import KineticNavbar from '../components/KineticNavbar';

const KineticNavbarPage = () => {
  return (
    <div>
      {/* Navbar'ı çağır */}
      <KineticNavbar />

      {/* Kaydırmayı test etmek için boş içerik */}
      <div className="pt-32 px-8"> {/* Navbar'ın altına içerik sığması için padding-top */}
        <h1 className="text-4xl font-bold text-neon-green mb-4">Kinetic Navbar Test Page</h1>
        <p className="mb-4 text-gray-400">Hover over the links to see the glitch effect. Click to activate the underline animation.</p>
        
        <div className="h-[200vh] border-l-2 border-dashed border-gray-700 ml-4 pl-4">
          <p className="text-gray-600">Scrolling area...</p>
        </div>
      </div>
    </div>
  );
};

export default KineticNavbarPage;