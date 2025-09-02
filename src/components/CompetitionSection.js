import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy, Users } from 'lucide-react';

const events = [
  {
    id: 1,
    name: 'FIU Surf Classic',
    date: 'March 15, 2025',
    location: 'South Beach',
    type: 'Surf',
    description: 'Annual championship event featuring the best FIU surfers'
  },
  {
    id: 2,
    name: 'FIU Skate Jam',
    date: 'April 22, 2025',
    location: 'Local Skate Park',
    type: 'Skate',
    description: 'Street and vert competition for all skill levels'
  },
  {
    id: 3,
    name: 'Battle of the Boards',
    date: 'May 10, 2025',
    location: 'Haulover Beach',
    type: 'Surf',
    description: 'Epic surf battle between universities across Florida'
  },
];

const CompetitionSection = () => {
  // Floating wave elements similar to hero
  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-3 h-3 bg-orange-400/20 rounded-full"
      style={{
        left: `${15 + i * 12}%`,
        top: `${20 + (i % 3) * 15}%`,
      }}
      animate={{
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        opacity: [0.2, 0.6, 0.2],
      }}
      transition={{
        duration: 6 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.3,
      }}
    />
  ));

  return (
    <section id="competitions" className="relative py-20 bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      {floatingElements}

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-wider text-white mb-6"
              style={{
                textShadow: '0 0 40px rgba(255,140,0,0.8), 0 0 60px rgba(0,0,0,0.9), 2px 2px 4px rgba(0,0,0,0.8)',
              }}>
            COMPETITIONS
          </h2>
          <motion.div
            animate={{ 
              scaleX: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Events */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Upcoming Events</h3>
            
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">{event.name}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    event.type === 'Surf' 
                      ? 'bg-blue-500/20 text-blue-200' 
                      : 'bg-green-500/20 text-green-200'
                  }`}>
                    {event.type}
                  </span>
                </div>
                
                <div className="space-y-2 text-white/80">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p className="text-white/70 text-sm mt-3">{event.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Video & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Competition Video */}
            <div className="relative">
              <div className="aspect-video bg-black/30 rounded-xl overflow-hidden backdrop-blur-sm border border-white/20">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster="/images/competitions/competition-thumbnail.jpg"
                >
                  <source src="/videos/competitions/fiu-surf-classic-2024.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="absolute inset-0 rounded-xl border-2 border-orange-400/30 pointer-events-none" />
            </div>

            {/* Join Competition CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center"
            >
              <Trophy className="w-16 h-16 text-orange-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                JOIN US IN THE NEXT COMPETITION
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Think you have what it takes? Sign up for our upcoming competitions and 
                represent FIU Surf Club. All skill levels welcome!
              </p>
              
              <div className="space-y-4">
                <motion.button
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdUCybB7bGEfTrhF7q2XPWHZQ78n2Qd1kxSaN_gULJSCHmlYA/viewform', '_blank')}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(255, 140, 0, 0.4)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-orange-600 text-white font-bold rounded-full shadow-xl hover:bg-orange-700 transition-all duration-300"
                >
                  <Users className="w-5 h-5 inline mr-2" />
                  REGISTER NOW
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionSection;
