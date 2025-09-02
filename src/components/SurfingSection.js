import React from 'react';
import { motion } from 'framer-motion';

const surfSpots = [
  { name: 'Private lessons - Coming soon', image: '/images/surfing/south-beach.jpg' },
  { name: 'Beginner group lessons', image: '/images/surfing/haulover-beach.jpg' },
  { name: 'Weekly practices', image: '/images/surfing/dania-beach.jpg' },
];

const SurfingSection = () => {
  return (
    <section id="surfing" className="relative py-20 bg-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-center text-gray-900 uppercase mb-12"
        >
          Surfing
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {surfSpots.map((spot, index) => (
            <motion.div
              key={spot.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img src={spot.image} alt={spot.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">{spot.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Learn to Surf with Us!
          </motion.h3>
          <motion.button
            onClick={() => window.open('https://chat.whatsapp.com/your-whatsapp-group-link', '_blank')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
          >
            Lessons
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default SurfingSection;