import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';

const films = [
  {
    id: 1,
    title: 'Discover FIU Surf',
    url: 'https://www.youtube.com/shorts/k4hxHSEf-dI',
  },
  {
    id: 2,
    title: 'Competitions',
    url: 'https://www.youtube.com/watch?v=QTnYrmRJqDk',
  },
  {
    id: 3,
    title: 'Chasing the Swell',
    url: 'https://www.youtube.com/watch?v=CFibf8IyzyU',
  },
  {
    id: 4,
    title: 'Life on the Board',
    url: 'https://www.youtube.com/watch?v=WZKaweZUYm8',
  },
];

const getVideoId = (url) => {
  const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/);
  return match ? match[1] : null;
};

const FilmsSection = () => {
  const [selectedFilm, setSelectedFilm] = useState(null);

  const openModal = (film) => setSelectedFilm(film);
  const closeModal = () => setSelectedFilm(null);

  return (
    <section id="films" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center uppercase mb-12"
        >
          Films
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {films.map((film, index) => {
            const videoId = getVideoId(film.url);
            const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
            
            return (
              <motion.div
                key={film.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-gray-800 rounded-xl overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={() => openModal(film)}
              >
                <div className="relative aspect-video">
                  <img
                    src={thumbnail}
                    alt={film.title}
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-blue-600/90 text-white p-4 rounded-full">
                      <Play className="w-8 h-8 ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold">{film.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Video Modal */}
      {selectedFilm && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 rounded-xl overflow-hidden max-w-4xl w-full"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-xl font-bold text-white">{selectedFilm.title}</h3>
              <button onClick={closeModal} className="p-2 rounded-full hover:bg-gray-700">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${getVideoId(selectedFilm.url)}`}
                title={selectedFilm.title}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default FilmsSection;

