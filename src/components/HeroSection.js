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

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Floating wave elements inspired by ocean bubbles
  const floatingElements = Array.from({ length: 12 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute"
      style={{
        left: `${5 + i * 8}%`,
        top: `${15 + (i % 4) * 20}%`,
      }}
      animate={{
        y: [-40, 40, -40],
        x: [-20, 20, -20],
        scale: [0.5, 1.2, 0.5],
        opacity: [0.1, 0.4, 0.1],
      }}
      transition={{
        duration: 6 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.3,
      }}
    >
      <div className="w-3 h-3 rounded-full bg-blue-300/30 blur-sm" />
    </motion.div>
  ));

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Enhanced Ocean Styling */}
      <div className="absolute inset-0">
        <img
          src="/images/mainsite/wave1.jpg"
          alt="Sunset waves background"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        
        {/* Ocean blue gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/50 via-cyan-600/30 to-blue-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-cyan-700/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
      </div>

      {/* Floating Ocean Elements */}
      {floatingElements}

      {/* Additional ocean wave particles */}
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute"
          style={{
            right: `${10 + i * 15}%`,
            bottom: `${20 + i * 10}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.5, 0.8],
            opacity: [0.05, 0.2, 0.05],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.7,
          }}
        >
          <div className="w-6 h-6 rounded-full bg-cyan-300/20 blur-lg" />
        </motion.div>
      ))}

      {/* Parallax Content Container */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10"
      >
        {/* Main Heading with Ocean Glow */}
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
              textShadow: '0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(14, 165, 233, 0.6), 0 0 80px rgba(6, 182, 212, 0.4), 2px 2px 8px rgba(0,0,0,0.9)',
            }}
          >
            <span className="block">FIU</span>
            <span className="block text-3xl md:text-5xl lg:text-6xl mt-2 font-light tracking-[0.3em]">
              SURF CLUB
            </span>
          </motion.h1>
        </div>

        {/* Subtitle with Ocean Wave Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-12 relative"
        >
          <p className="text-white text-xl md:text-3xl font-light tracking-wide drop-shadow-2xl"
             style={{ textShadow: '0 0 30px rgba(14, 165, 233, 0.8), 0 2px 8px rgba(0,0,0,0.9)' }}>
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
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          />
        </motion.div>

        {/* Enhanced Ocean-themed Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 relative z-20">
          <motion.button
            onClick={() => scrollToSection('#crew')}
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
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.5), 0 0 60px rgba(14, 165, 233, 0.3)',
              backgroundColor: '#1d4ed8'
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-blue-600 text-white text-lg font-bold rounded-full shadow-2xl overflow-hidden transform transition-all duration-300"
            style={{
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            }}
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
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('#merch')}
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
              boxShadow: '0 20px 40px rgba(6, 182, 212, 0.4), 0 0 60px rgba(14, 165, 233, 0.2)',
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              borderColor: 'rgba(6, 182, 212, 0.6)'
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-white/90 backdrop-blur-sm text-blue-700 text-lg font-bold rounded-full shadow-2xl border-2 border-cyan-200/60 overflow-hidden transform transition-all duration-300"
            style={{
              boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
            }}
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
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-blue-50"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        {/* Ocean-themed Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cyan-300/80 rounded-full flex justify-center backdrop-blur-sm"
            style={{ 
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              backgroundColor: 'rgba(14, 165, 233, 0.1)'
            }}
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-cyan-300 rounded-full mt-2"
              style={{ boxShadow: '0 0 8px rgba(6, 182, 212, 0.6)' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;


