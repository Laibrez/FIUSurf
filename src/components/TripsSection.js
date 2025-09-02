import React from 'react';
import { motion } from 'framer-motion';

const trips = [
  {
    id: 1,
    title: 'Costa Rica Trip',
    date: 'Summer 2023',
    description: 'We explored the waves of Tamarindo and Santa Teresa. Pura Vida!',
    image: '/images/trips/costa-rica.jpg', // Path to your image in public/images/trips
    map: 'https://maps.google.com/maps?q=tamarindo,costa%20rica&output=embed',
  },
  {
    id: 2,
    title: 'Cocoa Beach Getaway',
    date: 'Spring 2024',
    description: 'An epic weekend on Florida\'s East Coast. Sun, sand, and surf!',
    image: '/images/trips/cocoa-beach.jpg', // Path to your image in public/images/trips
    map: 'https://maps.google.com/maps?q=cocoa%20beach,florida&output=embed',
  },
];

const TripsSection = () => {
  return (
    <section id="trips" className="py-20 bg-beige-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-center text-gray-900 uppercase mb-12"
        >
          Trips
        </motion.h2>

        <div className="space-y-16">
          {trips.map((trip, index) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden p-6 md:p-8 group"
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 order-last md:order-none'}`}>
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-64 object-cover rounded-lg mb-6 md:mb-0 transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">{trip.title}</h3>
                <p className="text-blue-600 font-semibold mb-4">{trip.date}</p>
                <p className="text-gray-700 leading-relaxed mb-6">{trip.description}</p>
                <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
                  <iframe
                    src={trip.map}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${trip.title}`}
                  ></iframe>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300"
                >
                  View Itinerary
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripsSection;