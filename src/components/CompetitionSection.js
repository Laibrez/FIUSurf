import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy, Users, Instagram } from 'lucide-react';

const events = [
  {
    id: 1,
    name: 'Miami Masters Championship',
    date: 'February 18, 2024',
    location: 'South Beach, Miami',
    type: 'Surf',
    description: 'Elite surfing championship featuring top competitors from across Florida',
    result: '2nd Place Overall',
    image: 'wave2.jpg'
  },
  {
    id: 2,
    name: 'Miami Beach Open',
    date: 'January 14, 2024',
    location: 'Miami Beach',
    type: 'Surf',
    description: 'Annual open competition showcasing emerging talent in competitive surfing',
    result: '1st Place - Longboard Division',
    image: 'comp1.jpg'
  }
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Previous Results */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Previous Results</h3>
            
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                {/* Competition Image */}
                <div className="relative w-full h-64">
                  <img
                    src={`/images/comps/${event.image}`}
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/80 text-white backdrop-blur-sm">
                      {event.result}
                    </span>
                  </div>
                </div>

                {/* Competition Details */}
                <div className="p-3">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-base font-bold text-white">{event.name}</h4>
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-200">
                      {event.type}
                    </span>
                  </div>
                  
                  <div className="space-y-0.5 text-white/80 mb-1">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3 h-3" />
                      <span className="text-xs">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-3 h-3" />
                      <span className="text-xs">{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-white/70 text-xs leading-tight">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Instagram Reel & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 sticky top-8"
          >
            {/* Instagram Reel Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center"
            >
              <div className="flex items-center justify-center mb-4">
                <Instagram className="w-6 h-6 text-pink-400 mr-2" />
                <h3 className="text-xl font-bold text-white">Competition Highlights</h3>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4 mb-4 min-h-[300px] flex items-center justify-center border-2 border-dashed border-white/30">
                <iframe
                  src="https://www.instagram.com/reel/DGLgalEuyuy/embed"
                  width="100%"
                  height="450"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  className="rounded-lg"
                  title="FIU Surf Club Competition Reel"
                />
              </div>
              
              <motion.button
                onClick={() => window.open('https://www.instagram.com/fiusurf/?hl=en', '_blank')}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 30px rgba(255, 20, 147, 0.3)',
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-full shadow-xl hover:from-pink-700 hover:to-purple-700 transition-all duration-300"
              >
                <Instagram className="w-4 h-4 inline mr-2" />
                VIEW MORE ON INSTAGRAM
              </motion.button>
            </motion.div>

            {/* Join Competition CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center"
            >
              <Trophy className="w-10 h-10 text-orange-400 mx-auto mb-2" />
              <h3 className="text-lg font-bold text-white mb-2">
                JOIN US IN THE NEXT COMPETITION
              </h3>
              <p className="text-white/80 mb-4 text-sm leading-relaxed">
                Think you have what it takes? Sign up for our upcoming competitions!
              </p>
              
              <motion.button
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdUCybB7bGEfTrhF7q2XPWHZQ78n2Qd1kxSaN_gULJSCHmlYA/viewform', '_blank')}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 15px 30px rgba(255, 140, 0, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-orange-600 text-white font-bold rounded-full shadow-xl hover:bg-orange-700 transition-all duration-300 text-sm"
              >
                <Users className="w-4 h-4 inline mr-2" />
                REGISTER NOW
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionSection;