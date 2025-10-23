import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
// import { Link } from 'react-router-dom'; // Eğer gerçek sayfa geçişleri isterseniz

// Navbar linkleri (örnek)
const navItems = ["Home", "About", "Projects", "Contact"];

const HolographicNavbar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Hangi linkin aktif olduğunu tutar
  const [isScrolled, setIsScrolled] = useState(false); // Sayfanın kaydırılıp kaydırılmadığı

  // 1. SCROLL DİNLEYİCİSİ
  const { scrollY } = useScroll();

  // scrollY değiştiğinde bu fonksiyon çalışır
  useMotionValueEvent(scrollY, "change", (latest) => {
    // Eğer 50 pikselden fazla kaydırıldıysa 'isScrolled' true olur
    setIsScrolled(latest > 50); 
  });

  return (
    // Navbar container'ı, sayfanın üstüne sabitlenir
    // Kaydırılınca stilinin değişmesi için 'isScrolled' kullanılır
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center py-4 transition-all duration-300 ease-in-out`}
      // Kaydırılınca arkaplanı biraz daha belirgin hale getir ve yüksekliği azalt
      animate={{ 
        paddingTop: isScrolled ? '0.5rem' : '1rem', 
        paddingBottom: isScrolled ? '0.5rem' : '1rem',
        backgroundColor: isScrolled ? 'rgba(17, 24, 39, 0.8)' : 'rgba(17, 24, 39, 0.5)', // bg-gray-900 with opacity
        backdropFilter: isScrolled ? 'blur(16px)' : 'blur(8px)',
      }}
    >
      <div className="relative flex items-center space-x-8 px-6">
        {navItems.map((item, index) => (
          <div key={item} className="relative z-10"> {/* Linkler şeridin üzerinde olmalı */}
            {/* Link Metni */}
            <button
              onClick={() => setActiveIndex(index)}
              className={`px-3 py-1 text-lg font-medium transition-colors duration-300
                         ${activeIndex === index ? 'text-white' : 'text-gray-400 hover:text-gray-100'}`}
            >
              {item}
            </button>

            {/* 2. AKTİF LİNK VURGUSU (ŞERİT) */}
            {/* Sadece aktif link için render edilir */}
            {activeIndex === index && (
              <motion.div
                // layoutId ÇOK ÖNEMLİ: 
                // Bu ID sayesinde Framer Motion hangi elementin 
                // hangi elemente "dönüşeceğini" bilir ve animasyonu yapar.
                layoutId="active-highlight" 
                className="absolute inset-x-0 bottom-[-8px] h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                // Yaylanma efekti için transition
                transition={{ type: 'spring', stiffness: 300, damping: 25 }} 
              />
            )}
          </div>
        ))}
      </div>
    </motion.nav>
  );
};

export default HolographicNavbar;