import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Floating wave elements inspired by the designs
  const floatingElements = Array.from({ length: 8 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute"
      style={{
        left: `${10 + i * 12}%`,
        top: `${20 + (i % 3) * 25}%`,
      }}
      animate={{
        y: [-30, 30, -30],
        rotate: [0, 360],
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{
        duration: 8 + i * 0.8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.5,
      }}
    >
      <div className="w-4 h-4 rounded-full bg-white/20 blur-sm" />
    </motion.div>
  ));

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Enhanced Styling */}
      <div className="absolute inset-0">
        <img
          src="/images/mainsite/mainfs.jpg"
          alt="Sunset waves background"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        
        {/* Dynamic gradient overlay for sunset tones */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-transparent to-pink-800/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-orange-900/20" />
      </div>

      {/* Floating Elements */}
      {floatingElements}

      {/* Parallax Content Container */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10"
      >
        {/* Main Heading with Stagger Animation */}
        <div className="mb-8 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2 
            }}
            className="text-white text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider drop-shadow-2xl"
            style={{
              textShadow: '0 0 40px rgba(255,140,0,0.8), 0 0 60px rgba(0,0,0,0.9), 2px 2px 4px rgba(0,0,0,0.8)',
            }}
          >
            <span className="block">FIU</span>
            <span className="block text-3xl md:text-5xl lg:text-6xl mt-2 font-light tracking-[0.3em]">
              SURF CLUB
            </span>
          </motion.h1>
        </div>

        {/* Subtitle with Wave Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-12 relative"
        >
          <p className="text-white text-xl md:text-3xl font-light tracking-wide drop-shadow-2xl"
             style={{ textShadow: '0 0 20px rgba(0,0,0,0.9), 0 2px 4px rgba(255,140,0,0.3)' }}>
            RIDE THE WAVE OF ADVENTURE
          </p>
          <motion.div
            animate={{ 
              scaleX: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-32 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
          />
        </motion.div>

        {/* Enhanced Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 relative z-20">
          <motion.button
            initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.2,
              type: 'spring',
              stiffness: 200,
              damping: 15
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(255, 140, 0, 0.4)',
              backgroundColor: '#ea580c'
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-orange-600 text-white text-lg font-bold rounded-full shadow-xl overflow-hidden transform transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              JOIN THE CLUB
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🌊
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.4,
              type: 'spring',
              stiffness: 200,
              damping: 15
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(255, 140, 0, 0.3)',
              backgroundColor: 'rgba(255, 255, 255, 0.98)'
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-white/95 backdrop-blur-sm text-orange-700 text-lg font-bold rounded-full shadow-xl border-2 border-orange-200/50 overflow-hidden transform transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              SHOP MERCH
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                🏄‍♂️
              </motion.span>
            </span>
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center"
            style={{ boxShadow: '0 0 10px rgba(0,0,0,0.5)' }}
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

