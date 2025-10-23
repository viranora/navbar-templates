import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Örnek linkler
const navItems = ["EXPLORE", "STATION", "SYSTEMS", "LOGS"];

// Rastgele sayı
const random = (min, max) => Math.random() * (max - min) + min;

// Tek bir küre (orb) component'ı
const Orb = ({ item, index, mouseX, mouseY, isActive, onClick }) => {
  const ref = useRef(null); // Kürenin pozisyonunu almak için

  // Kürenin "dinlenme" (idle) pozisyonu için motion value'lar
  // Bunlar yavaşça rastgele hareket edecek
  const idleX = useSpring(random(-20, 20), { stiffness: 5, damping: 10 });
  const idleY = useSpring(random(-10, 10), { stiffness: 5, damping: 10 });

  // Fare etkileşimi için motion value'lar
  // Fare küreye yaklaştıkça onu itecek
  const repelX = useMotionValue(0);
  const repelY = useMotionValue(0);

  // Fare pozisyonu (mouseX, mouseY) değiştiğinde itme gücünü hesapla
  useEffect(() => {
    const unsubscribeX = mouseX.onChange((latestX) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const orbCenterX = rect.left + rect.width / 2;
        const distanceX = latestX - orbCenterX;
        const maxDistance = 150; // Etkileşim mesafesi
        if (Math.abs(distanceX) < maxDistance) {
          // Mesafe azaldıkça itme gücü (ters yönde) artsın
          const force = (1 - Math.abs(distanceX) / maxDistance) * -Math.sign(distanceX) * 25; // 25px itme gücü
          repelX.set(force);
        } else {
          repelX.set(0); // Mesafe dışındaysa itme yok
        }
      }
    });
    // Y ekseni için de aynı mantık
    const unsubscribeY = mouseY.onChange((latestY) => {
       if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const orbCenterY = rect.top + rect.height / 2;
        const distanceY = latestY - orbCenterY;
        const maxDistance = 100; 
        if (Math.abs(distanceY) < maxDistance) {
          const force = (1 - Math.abs(distanceY) / maxDistance) * -Math.sign(distanceY) * 20; 
          repelY.set(force);
        } else {
          repelY.set(0);
        }
      }
    });

    // Idle animasyonunu periyodik olarak güncelle (sürekli hafif hareket)
    const interval = setInterval(() => {
      idleX.set(random(-20, 20));
      idleY.set(random(-10, 10));
    }, 5000); // 5 saniyede bir hedef değiştir

    return () => {
      unsubscribeX();
      unsubscribeY();
      clearInterval(interval);
    };
  }, [mouseX, mouseY, repelX, repelY, idleX, idleY]);

  // Toplam X ve Y pozisyonu = Idle hareketi + Fare itmesi
  const totalX = useMotionValue(0);
  const totalY = useMotionValue(0);

  useEffect(() => {
    const updatePosition = () => {
        totalX.set(idleX.get() + repelX.get());
        totalY.set(idleY.get() + repelY.get());
    };
    const unsubIdleX = idleX.onChange(updatePosition);
    const unsubIdleY = idleY.onChange(updatePosition);
    const unsubRepelX = repelX.onChange(updatePosition);
    const unsubRepelY = repelY.onChange(updatePosition);
    return () => {
        unsubIdleX(); unsubIdleY(); unsubRepelX(); unsubRepelY();
    }
  }, [idleX, idleY, repelX, repelY, totalX, totalY]);
  

  return (
    <motion.div
      ref={ref}
      className="relative cursor-pointer"
      onClick={onClick}
      // Kürenin toplam pozisyonunu ayarla
      style={{ x: totalX, y: totalY }}
      // Sayfa yüklenirken animasyon
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: isActive ? 1.15 : 1, // Aktifse biraz büyüt
        transition: { type: 'spring', stiffness: 200, damping: 15, delay: index * 0.1 } 
      }}
      whileHover={{ scale: 1.1 }} // Üzerine gelince de büyüt
    >
      {/* Küre Görseli */}
      <div 
        className={`w-28 h-12 rounded-full flex items-center justify-center 
                   bg-gradient-to-br from-orb-blue/70 to-orb-purple/70 
                   border border-white/20 shadow-lg backdrop-blur-sm
                   transition-all duration-300
                   ${isActive ? 'shadow-orb-cyan/50 shadow-xl' : ''}`} // Aktifse parlama
      >
        <span 
          className={`text-sm font-semibold uppercase tracking-widest transition-colors duration-300
                     ${isActive ? 'text-white' : 'text-gray-300'}`}
        >
          {item}
        </span>
      </div>

      {/* Aktifse Enerji Halkası (İsteğe bağlı) */}
      {isActive && (
        <motion.div 
          className="absolute inset-[-6px] border-2 border-orb-cyan rounded-full opacity-50"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.1, opacity: [0, 0.5, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      )}
    </motion.div>
  );
};


// Ana Navbar Component'ı
const ZeroGNavbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Fare pozisyonunu tüm component içinde takip et
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    // Navbar container'ı - Geleneksel şerit yok, sadece küreleri hizalar
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-8 pb-4">
      <div className="flex items-center space-x-12"> {/* Küreler arası boşluk */}
        {navItems.map((item, index) => (
          <Orb
            key={item}
            item={item}
            index={index}
            mouseX={mouseX}
            mouseY={mouseY}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ZeroGNavbar;