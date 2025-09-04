import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube } from 'lucide-react'; // TikTok is not in lucide-react, removed it

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-white py-12"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-extrabold uppercase mb-4">FIU Surf Club</h3>
          <p className="text-gray-400">
            Where surf meets soul.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Contact</h4>
          <p className="text-gray-400">Email: <a href="mailto:fiusurfclub@gmail.com" className="text-orange-400 hover:underline">fiusurfclub@gmail.com</a></p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
          <p className="text-gray-400">Address: 11200 SW 8th St, Miami, FL 33199</p>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            <a href="https://www.instagram.com/fiusurf/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <Instagram size={28} />
            </a>
            <a href="https://m.youtube.com/@radlads305" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
              <Youtube size={28} />
            </a>
          </div>
          <h4 className="text-xl font-bold mb-4">Newsletter</h4>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 flex-grow"
            />
            <button
              type="submit"
              className="p-3 bg-blue-600 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} FIU Surf Club. All rights reserved.
      </div>
      <div className="container mx-auto text-center mt-4">
        <p>Contact us: <a href="mailto:fiusurfclub@gmail.com" className="text-orange-400 hover:underline">fiusurfclub@gmail.com</a></p>
        <p>
          Follow us on Instagram: 
          <a href="https://www.instagram.com/fiusurf/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">
            @fiusurf
          </a>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;