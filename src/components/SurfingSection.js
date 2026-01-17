import React from 'react';
import { motion } from 'framer-motion';

const skateContent = [
  {
    id: 1,
    title: 'Skate Meetups',
    description: "We organize regular sessions at Miami's best skate parks. Only Wednesdays",
    image: '/images/skating/skate-meetup.jpg',
  },
  {
    id: 2,
    title: 'Social Events',
    description: 'Hangouts, meetups, sport-events, trips and more. Get to know amazing people.',
    image: '/images/skating/social1.jpeg',
  },
  {
    id: 3,
    title: 'Film Premieres',
    description: 'Watch with us the latest surf videos, surf classics, edits and upcoming works.',
    image: '/images/skating/939.png',
  },
];

const sponsors = [
  {
    id: 1,
    name: 'Sponsor 1',
    image: '/images/skating/social1.jpeg',
  },
  {
    id: 2,
    name: 'Sponsor 2',
    image: '/images/skating/social1.jpeg',
  },
  {
    id: 3,
    name: 'Sponsor 3',
    image: '/images/skating/social1.jpeg',
  },
];

const SkatingSection = () => {
  return (
    <section id="surfing" className="relative py-20 bg-gray-800 text-white overflow-hidden">
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

        {/* Become a Sponsor Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Become a Sponsor</h3>
          <p className="text-gray-300 mb-6">
            Support our events and community by becoming a sponsor. Click the button below to learn more.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdrN7r6FSs3BJfQFvWudBjA8C-uN4MnLgUpBaTxHkwY3iIpVA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
          >
            Become a Sponsor
          </a>
        </motion.div>

        {/* Sponsors Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Our Sponsors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex justify-center"
              >
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
                >
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="w-full h-24 object-contain"
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkatingSection;
