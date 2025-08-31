import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, Send } from 'lucide-react';

const crewMembers = [
  {
    id: 1,
    name: 'Alex Wagenman',
    role: 'Describe Role',
    photo: '/images/crew/alex.jpg', // Path to your image in public/images/crew
  },
  {
    id: 2,
    name: 'Elan Camaret',
    role: 'Describe Role',
    photo: '/images/crew/elan.jpg', // Path to your image in public/images/crew
  },
  {
    id: 3,
    name: 'Michelle',
    role: 'Describe Role',
    photo: '/images/crew/michelle.jpg', // Path to your image in public/images/crew
  },
];

const CrewSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = () => {
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="crew" className="py-20 bg-beige-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-center text-gray-900 uppercase mb-12"
        >
          Crew
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {crewMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <motion.img
                src={member.photo}
                alt={member.name}
                className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-blue-600 shadow-md"
                whileHover={{ rotate: 5 }}
              />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-semibold text-lg">{member.role}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-center max-w-6xl mx-auto">
            {/* Group Photo */}
            <div className="flex-1">
              <img
                src="/images/crew/group-photo.jpg" // Path to your image in public/images/crew
                alt="FIU Surf Club Group Photo"
                className="w-full rounded-xl shadow-lg"
              />
              <p className="text-gray-700 text-xl mt-6 font-semibold text-center">
                We're more than a club, we're a family!
              </p>
            </div>

            {/* Join Us Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-white shadow-xl max-w-sm"
            >
              <h3 className="text-2xl font-bold mb-3 uppercase">Join Us</h3>
              
              {/* Instagram Link */}
              <motion.a
                href="https://instagram.com/fiusurfclub" // Replace with your actual Instagram handle
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-4 py-3 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl mb-4 w-full justify-center"
              >
                <Instagram className="w-5 h-5" />
                Follow @FIUSurfClub
              </motion.a>

              {/* Email Signup */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="w-4 h-4 text-blue-200" />
                  <span className="font-semibold">Get Updates</span>
                </div>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-500 text-white py-3 px-4 rounded-lg font-semibold text-sm text-center"
                  >
                    🌊 Thanks! Check your email.
                  </motion.div>
                ) : (
                  <div className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm"
                    />
                    <motion.button
                      onClick={handleEmailSubmit}
                      disabled={isSubmitting || !email}
                      whileHover={{ scale: (isSubmitting || !email) ? 1 : 1.05 }}
                      whileTap={{ scale: (isSubmitting || !email) ? 1 : 0.95 }}
                      className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-400 px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 flex items-center gap-2 justify-center text-sm"
                    >
                      {isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-3 h-3" />
                          Subscribe
                        </>
                      )}
                    </motion.button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CrewSection;
