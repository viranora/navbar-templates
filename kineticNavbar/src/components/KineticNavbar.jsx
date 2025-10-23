import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlitchText from './GlitchText'; // Glitch component'ını import et

// Örnek linkler
const navItems = ["SYSTEM", "DATA", "NETWORK", "SECURITY", "LOGOUT"];

// Navbar Container Animasyonu (Montaj)
const navbarVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delayChildren: 0.5, // Linklerin başlaması için gecikme
      staggerChildren: 0.15, // Linklerin gelme aralığı
    },
  },
};

// Link Elemanı Animasyonu (Montaj)
const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const KineticNavbar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Aktif link

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-circuit-board/90 backdrop-blur-sm 
                 border-b border-neon-cyan/30 shadow-lg"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo veya Başlık (İsteğe bağlı, animasyonlu) */}
        <motion.div variants={linkVariants} className="text-xl font-bold text-neon-green tracking-widest">
          NORA_SYS
        </motion.div>

        {/* Linkler */}
        <div className="flex items-center space-x-6">
          {navItems.map((item, index) => (
            <motion.div key={item} variants={linkVariants} className="relative group">
              <button
                onClick={() => setActiveIndex(index)}
                className={`text-sm uppercase tracking-wider transition-colors duration-200
                           ${activeIndex === index ? 'text-neon-cyan' : 'text-gray-500 hover:text-gray-200'}`}
              >
                {/* Glitch Efektli Metin */}
                <GlitchText className={activeIndex === index ? 'font-semibold' : ''}>
                  {item}
                </GlitchText>
              </button>
              
              {/* "Enerji Akışı" Simülasyonu: Alt Çizgi */}
              <motion.div
                className={`absolute -bottom-1 left-0 right-0 h-[2px] bg-neon-cyan`}
                // Aktifse veya üzerine gelindiyse görünür yap
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0, 
                  scaleX: activeIndex === index ? 1 : 0,
                }}
                // Üzerine gelince animasyonu tetikle (isteğe bağlı)
                whileHover={{ 
                  opacity: 1, 
                  scaleX: 1,
                  transition: { duration: 0.2, ease: 'easeOut' } 
                }}
                // Başlangıçta gizli
                initial={{ opacity: 0, scaleX: 0 }}
                // Animasyon geçişi
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                // Transformun merkezini ayarla (önemli)
                style={{ originX: 0.5 }} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default KineticNavbar;