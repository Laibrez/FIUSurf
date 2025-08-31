import React from 'react';
import { motion } from 'framer-motion';

const skateContent = [
  {
    id: 1,
    title: 'Skate Meetups',
    description: 'We organize regular sessions at Miami\'s best skate parks. Come skate with us!',
    image: '/images/skating/skate-meetup.jpg', // Path to your image in public/images/skating
  },
  {
    id: 2,
    title: 'Local Spots',
    description: 'Discover secret spots and the most popular skate parks near FIU.',
    image: '/images/skating/skate-spot.jpg', // Path to your image in public/images/skating
  },
  {
    id: 3,
    title: 'Trick Videos',
    description: 'Watch the FIU skate crew showing off their best tricks and lines.',
    image: '/images/skating/trick-video.jpg', // Path to your image in public/images/skating
  },
];

const SkatingSection = () => {
  return (
    <section id="skating" className="relative py-20 bg-gray-800 text-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-center uppercase mb-12"
        >
          Skating
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skateContent.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the FIU skate crew and roll with us!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-blue-600 text-white text-xl font-bold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View Skate Calendar
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SkatingSection;