import React from 'react';
import { motion } from 'framer-motion';

const skateContent = [
  {
    id: 1,
    title: 'Skate Meetups',
    description: 'We organize regular sessions at Miami\'s best skate parks. Only Wednesdays',
    image: '/images/skating/skate-meetup.jpg', // Path to your image in public/images/skating
  },
  {
    id: 2,
    title: 'Social Events',
    description: 'Hangouts, meetups, sport-events, trips and more. Get to know amazing people.',
    image: '/images/skating/skate-spot.jpg', // Path to your image in public/images/skating
  },
  {
    id: 3,
    title: 'Film Premieres',
    description: 'Watch with us the latest surf videos, surf classics, edits and upcoming works.',
    image: '/images/skating/939.png', // Path to your image in public/images/skating
  },
];

const SkatingSection = () => {
  return (
    <section id="other events" className="relative py-20 bg-gray-800 text-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-center uppercase mb-12"
        >
          Other Events
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
        </motion.div>
      </div>
    </section>
  );
};

export default SkatingSection;