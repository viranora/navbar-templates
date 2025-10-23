import React, { useState } from 'react';

// Tailwind'de tanımladığımız 'animate-glitch' animasyonunu kullanacak
const GlitchText = ({ children, className = "" }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  const handleMouseEnter = () => {
    setIsGlitching(true);
    // Animasyon bittikten sonra state'i sıfırla ki tekrar tetiklenebilsin
    setTimeout(() => {
      setIsGlitching(false);
    }, 300); // Tailwind'deki animasyon süresiyle aynı olmalı
  };

  return (
    <span
      className={`inline-block relative ${className} ${isGlitching ? 'animate-glitch' : ''}`}
      onMouseEnter={handleMouseEnter}
    >
      {/* Orijinal Metin */}
      <span>{children}</span>
      
      {/* Glitch efekti için kopyalar (isteğe bağlı, daha güçlü efekt için) */}
       {isGlitching && (
         <>
          <span className="absolute top-0 left-0 text-neon-cyan opacity-80 mix-blend-screen" aria-hidden="true">{children}</span>
          <span className="absolute top-0 left-0 text-neon-green opacity-80 mix-blend-screen animate-glitch animation-delay-50" aria-hidden="true">{children}</span> 
          {/* animation-delay Tailwind'de yok, özel stil gerekebilir veya Framer Motion kullanılır */}
         </>
       )}
    </span>
  );
};

export default GlitchText;