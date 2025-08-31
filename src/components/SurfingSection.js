import React from 'react';
import { motion } from 'framer-motion';

const surfSpots = [
  {
    name: 'South Beach',
    description: 'Famous for its gentle waves and vibrant atmosphere. Ideal for beginners.',
    image: '/images/surfing/south-beach.jpg', // Path to your image in public/images/surfing
  },
  {
    name: 'Haulover Beach',
    description: 'Known for its more consistent waves and fewer crowds. A local favorite.',
    image: '/images/surfing/haulover-beach.jpg', // Path to your image in public/images/surfing
  },
  {
    name: 'Dania Beach',
    description: 'A good spot for medium-sized waves, often less crowded than other spots.',
    image: '/images/surfing/dania-beach.jpg', // Path to your image in public/images/surfing
  },
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
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{spot.name}</h3>
                <p className="text-gray-700 leading-relaxed">{spot.description}</p>
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
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
          >
            We offer lessons for all levels and board rentals. Check real-time surf conditions!
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-blue-600 text-white text-xl font-bold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View Conditions & Lessons
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default SurfingSection;