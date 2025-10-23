import React from 'react';
import ZeroGNavbar from '../components/ZeroGNavbar';

const ZeroGNavbarPage = () => {
  return (
    <div>
      {/* Navbar'ı çağır */}
      <ZeroGNavbar />

      {/* İçerik */}
      <div className="pt-48 px-8"> {/* Navbar'ın altına içerik sığması için daha fazla padding-top */}
        <h1 className="text-4xl font-bold mb-4 text-center text-orb-blue">Zero-G Navbar Test Page</h1>
        <p className="mb-4 text-center text-gray-500">Move your mouse near the orbs to interact with them. Click to activate.</p>
        
        <div className="h-[200vh] mt-10 border-l-2 border-dashed border-gray-700 ml-4 pl-4">
          <p className="text-gray-600">Scrolling content area...</p>
        </div>
      </div>
    </div>
  );
};

export default ZeroGNavbarPage;