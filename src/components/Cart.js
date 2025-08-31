import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ShoppingBag, 
  Minus, 
  Plus, 
  X, 
  CreditCard,
  Trash
} from 'lucide-react';

const CartSection = ({ cartItems = [], onBackToShop, onProceedToCheckout, onUpdateCart }) => {
  // Use a state to manage the cart products, initialized with the prop data
  const [cartProducts, setCartProducts] = useState(cartItems);
  const [showProgressBar, setShowProgressBar] = useState(false);

  // Use useEffect to keep the local state in sync with the parent's cartItems prop
  useEffect(() => {
    setCartProducts(cartItems);
  }, [cartItems]);

  // Calculate totals
  const subtotal = cartProducts.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingThreshold = 50;
  const shipping = subtotal >= shippingThreshold ? 0 : 8.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;
  const progressBarPercentage = Math.min((subtotal / shippingThreshold) * 100, 100);

  // Update cart item quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(productId);
      return;
    }
    const updatedCart = cartProducts.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartProducts(updatedCart);
    onUpdateCart?.(updatedCart);
  };

  // Remove item from cart
  const removeItem = (productId) => {
    const updatedCart = cartProducts.filter(item => item.id !== productId);
    setCartProducts(updatedCart);
    onUpdateCart?.(updatedCart);
  };

  // Handle proceed to checkout
  const handleProceedToCheckout = () => {
    onProceedToCheckout?.(cartProducts);
  };

  // Animation variants for the whole section
  const sectionVariants = {
    hidden: { opacity: 0, x: '100vw' },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 50, damping: 20 } },
    exit: { opacity: 0, x: '-100vw', transition: { ease: 'easeInOut' } }
  };
  
  // Animation variants for the card items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } }
  };

  return (
    <motion.section
      className="bg-gray-100 min-h-screen py-12"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900">
              <ShoppingBag className="inline-block w-8 h-8 mr-2" />
              Your Cart ({cartProducts.length})
            </h1>
            <motion.button 
              onClick={onBackToShop} 
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Continue Shopping
            </motion.button>
          </div>

          {/* Main content area */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cart items list */}
            <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-6">
              {cartProducts.length > 0 ? (
                <AnimatePresence>
                  {cartProducts.map((item) => (
                    <motion.div
                      key={item.id}
                      className="flex items-center space-x-4 mb-4 pb-4 border-b last:border-b-0"
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover" 
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://placehold.co/80x80/e5e7eb/7f8c8d?text=Product";
                          }}
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-600">Size: {item.selectedSize || 'N/A'}</p>
                        <p className="text-xl font-extrabold text-orange-600">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <motion.button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-600 border border-gray-300 rounded-full hover:bg-gray-100"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Minus className="w-4 h-4" />
                        </motion.button>
                        <span className="w-8 text-center font-semibold text-gray-800">{item.quantity}</span>
                        <motion.button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-600 border border-gray-300 rounded-full hover:bg-gray-100"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Plus className="w-4 h-4" />
                        </motion.button>
                      </div>
                      <motion.button 
                        onClick={() => removeItem(item.id)}
                        className="ml-4 text-gray-400 hover:text-red-500 transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <Trash className="w-5 h-5" />
                      </motion.button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              ) : (
                <div className="text-center py-10">
                  <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-xl text-gray-600">Your cart is empty.</p>
                  <motion.button
                    onClick={onBackToShop}
                    className="mt-6 px-6 py-3 bg-gray-200 text-gray-800 rounded-full font-semibold hover:bg-gray-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Shopping
                  </motion.button>
                </div>
              )}
            </div>

            {/* Order summary */}
            <motion.div 
              className="md:col-span-1 bg-white rounded-2xl shadow-lg p-6 flex flex-col"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
            >
              <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-2 text-gray-600 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold text-gray-900">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (8%)</span>
                  <span className="font-semibold text-gray-900">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                <span className="text-xl font-bold">Total</span>
                <span className="text-3xl font-extrabold text-orange-600">${total.toFixed(2)}</span>
              </div>
              
              {/* Shipping progress bar */}
              {subtotal < shippingThreshold && (
                <div className="mt-4">
                  <p className="text-sm text-gray-500 text-center mb-2">
                    Add <span className="font-bold text-orange-600">${(shippingThreshold - subtotal).toFixed(2)}</span> to get free shipping!
                  </p>
                  <div className="relative h-2 bg-gray-200 rounded-full">
                    <div 
                      className="absolute h-full bg-orange-600 rounded-full transition-all duration-500 ease-in-out" 
                      style={{ width: `${progressBarPercentage}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Checkout Button */}
              <motion.button
                onClick={handleProceedToCheckout}
                disabled={cartProducts.length === 0}
                className="w-full mt-6 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 disabled:bg-gray-400 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <CreditCard className="w-5 h-5 inline mr-2" />
                Proceed to Checkout
              </motion.button>

              {/* Continue Shopping */}
              <button
                onClick={onBackToShop}
                className="w-full mt-3 py-3 text-gray-600 hover:text-gray-800 transition-colors"
              >
                ← Continue Shopping
              </button>

              {/* Security Badge */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Secure Checkout</span>
                </div>
                <p className="text-xs text-gray-500 text-center mt-1">
                  256-bit SSL encryption
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CartSection;
