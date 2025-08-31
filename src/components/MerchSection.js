import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'FIU Surf Wax',
    category: 'Accessories',
    price: 5.00,
    image: '/images/merch/surf-wax.jpg',
    alt: 'FIU logo surf wax',
  },
  {
    id: 2,
    name: 'FIU Surf Tee',
    category: 'Apparel',
    price: 25.00,
    image: '/images/merch/surf-tee.jpg',
    alt: 'Student wearing FIU Surf tee at the beach',
  },
  {
    id: 3,
    name: 'FIU Surf Hat',
    category: 'Accessories',
    price: 20.00,
    image: '/images/merch/surf-hat.jpg',
    alt: 'Student wearing FIU Surf hat',
  },
  {
    id: 4,
    name: 'FIU Surf Board',
    category: 'Boards',
    price: 500.00,
    image: '/images/merch/surf-board.jpg',
    alt: 'Surf board with FIU logo',
  },
  {
    id: 5,
    name: 'FIU Hoodie',
    category: 'Apparel',
    price: 45.00,
    image: '/images/merch/hoodie.jpg',
    alt: 'FIU Hoodie',
  },
  {
    id: 6,
    name: 'FIU Tote Bag',
    category: 'Accessories',
    price: 15.00,
    image: '/images/merch/tote-bag.jpg',
    alt: 'FIU Tote Bag',
  },
];

const MerchSection = ({ onProductClick }) => {
  const handleProductClick = (product) => {
    if (onProductClick) {
      onProductClick(product);
    }
  };

  return (
    <section id="merch" className="py-20 bg-gradient-to-b from-gray-50 to-beige-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-center text-gray-900 uppercase mb-12"
        >
          Merch
        </motion.h2>

        <div className="flex justify-center space-x-4 mb-12">
          {['Category', 'Price', 'Popularity'].map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-white text-gray-700 rounded-full shadow-md hover:bg-orange-100 hover:text-orange-600 transition-colors duration-300"
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleProductClick(product)}
              className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300"
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <motion.span 
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="text-white text-lg font-bold bg-orange-600 px-6 py-2 rounded-full"
                  >
                    Shop Now
                  </motion.span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{product.category}</p>
                <div className="flex items-center justify-between">
                  <p className="text-orange-600 text-2xl font-extrabold">
                    ${product.price.toFixed(2)}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-orange-600 hover:text-orange-700 font-semibold"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(product);
                    }}
                  >
                    View Details →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MerchSection;
