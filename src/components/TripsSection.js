import React from 'react';
import { motion } from 'framer-motion';

const trips = [
  {
    id: 1,
    title: 'Puerto Rico 2024',
    date: 'Winter 2024',
    description: 'Our latest PR trip, 10 days of some of the biggest waves we\'ve ever surfed.',
    image: '/images/trips/PR24.png',
    map: 'https://maps.google.com/maps?q=puerto%20rico&output=embed',
  },
  {
    id: 2,
    title: 'Puerto Rico 2023',
    date: 'Winter 2023',
    description: 'Our first trip to the island. Clean waves and fun we\'ll never forget.',
    image: '/images/trips/PR23.PNG',
    map: 'https://maps.google.com/maps?q=puerto%20rico&output=embed',
  },
  {
    id: 3,
    title: 'New Smyrna 2023',
    date: 'Fall 2023',
    description: 'A weekend trip up the coast with a couple of AirBnBs good swell.',
    image: '/images/trips/NS2023.PNG',
    map: 'https://maps.google.com/maps?q=new%20smyrna%20beach,florida&output=embed',
  },
  {
    id: 4,
    title: 'King of Clubs 2024',
    date: 'Summer 2024',
    description: 'Our first KOC. Camping, live music, hundreds of people, and an island all to ourselves.',
    image: '/images/trips/KC2024.png',
    map: 'https://maps.google.com/maps?q=sebastian%20inlet,florida&output=embed',
  },
  {
    id: 5,
    title: 'Hutchinson Island 2023',
    date: 'Fall 2023',
    description: 'A short trip chasing a hurricane swell. The Blue and Gold film was made during this trip!',
    image: '/images/trips/Hutchinson23.png',
    map: 'https://maps.google.com/maps?q=hutchinson%20island,florida&output=embed',
  },
];

const flashcards = [
  {
    id: 1,
    title: 'We go International',
    description: 'Adventures across different countries',
    icon: '🌍',
  },
  {
    id: 2,
    title: 'We go Camping',
    description: 'Under the stars and by the waves',
    icon: '🏕️',
  },
  {
    id: 3,
    title: 'We go Surfing',
    description: 'Chasing swells and perfect waves',
    icon: '🏄‍♂️',
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

        {/* Flashcards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {flashcards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trips Section */}
        <div className="space-y-16">
          {trips.map((trip, index) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="flex flex-col md:flex-row">
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? '' : 'md:order-2'}`}>
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img
                      src={trip.image}
                      alt={trip.title}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className={`w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center ${index % 2 === 0 ? '' : 'md:order-1'}`}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">{trip.title}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{trip.date}</p>
                  <p className="text-gray-700 leading-relaxed mb-6">{trip.description}</p>
                  <div className="w-full h-32 rounded-lg overflow-hidden">
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripsSection;

