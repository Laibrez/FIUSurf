import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ShoppingBag, 
  CreditCard, 
  Lock, 
  User, 
  Mail, 
  MapPin, 
  Phone,
  Minus,
  Plus,
  X,
  CreditCard as CreditCardIcon
} from 'lucide-react';

const CheckoutSection = ({ cartItems = [], onBackToShop, onOrderComplete }) => {
  const [step, setStep] = useState(1); // 1: Shipping Info, 2: Payment
  const [loading, setLoading] = useState(false);
  const [cartProducts, setCartProducts] = useState(cartItems);

  // Form states
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US'
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  const [errors, setErrors] = useState({});

  // Recalculate totals if cartItems change
  useEffect(() => {
    setCartProducts(cartItems);
  }, [cartItems]);

  // Calculate totals
  const subtotal = cartProducts.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 8.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;
    if (formType === 'shipping') {
      setShippingInfo(prev => ({ ...prev, [name]: value }));
    } else {
      setPaymentInfo(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateShipping = () => {
    let newErrors = {};
    if (!shippingInfo.firstName) newErrors.firstName = 'First name is required';
    if (!shippingInfo.lastName) newErrors.lastName = 'Last name is required';
    if (!shippingInfo.email) newErrors.email = 'Email is required';
    if (!shippingInfo.address) newErrors.address = 'Address is required';
    if (!shippingInfo.city) newErrors.city = 'City is required';
    if (!shippingInfo.state) newErrors.state = 'State is required';
    if (!shippingInfo.zipCode) newErrors.zipCode = 'ZIP code is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const validatePayment = () => {
    let newErrors = {};
    if (!paymentInfo.cardholderName) newErrors.cardholderName = 'Cardholder name is required';
    if (!paymentInfo.cardNumber) newErrors.cardNumber = 'Card number is required';
    if (!paymentInfo.expiryDate) newErrors.expiryDate = 'Expiry date is required';
    if (!paymentInfo.cvv) newErrors.cvv = 'CVV is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (validateShipping()) {
        setStep(2);
      }
    } else if (step === 2) {
      if (validatePayment()) {
        processPayment();
      }
    }
  };

  const processPayment = () => {
    setLoading(true);
    // Simulate a payment process
    setTimeout(() => {
      setLoading(false);
      const orderDetails = {
        id: Math.random().toString(36).substr(2, 9),
        items: cartProducts,
        total: total.toFixed(2),
        shippingInfo,
        date: new Date().toLocaleDateString()
      };
      onOrderComplete(orderDetails);
    }, 2000); // 2-second delay for simulation
  };
  
  const sectionVariants = {
    hidden: { opacity: 0, x: '100vw' },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 50, damping: 20 } },
    exit: { opacity: 0, x: '-100vw', transition: { ease: 'easeInOut' } }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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
              <CreditCardIcon className="inline-block w-8 h-8 mr-2" />
              Checkout
            </h1>
            <motion.button 
              onClick={step === 1 ? onBackToShop : () => setStep(step - 1)} 
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              {step === 1 ? 'Back to Cart' : 'Back to Shipping'}
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Form steps */}
            <motion.div
              className="md:col-span-2 bg-white rounded-2xl shadow-lg p-6"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex justify-between items-center mb-6 border-b pb-4">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white transition-colors duration-300 ${step >= 1 ? 'bg-orange-600' : 'bg-gray-300'}`}>1</div>
                  <span className={`ml-2 font-semibold transition-colors duration-300 ${step >= 1 ? 'text-gray-900' : 'text-gray-500'}`}>Shipping</span>
                </div>
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white transition-colors duration-300 ${step >= 2 ? 'bg-orange-600' : 'bg-gray-300'}`}>2</div>
                  <span className={`ml-2 font-semibold transition-colors duration-300 ${step >= 2 ? 'text-gray-900' : 'text-gray-500'}`}>Payment</span>
                </div>
              </div>

              {/* Shipping Form */}
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="shipping-form"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-bold mb-4">Shipping Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={shippingInfo.firstName}
                          onChange={(e) => handleInputChange(e, 'shipping')}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-600 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                        />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={shippingInfo.lastName}
                          onChange={(e) => handleInputChange(e, 'shipping')}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-600 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                        />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={shippingInfo.email}
                        onChange={(e) => handleInputChange(e, 'shipping')}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-600 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={shippingInfo.phone}
                        onChange={(e) => handleInputChange(e, 'shipping')}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-600 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={shippingInfo.address}
                        onChange={(e) => handleInputChange(e, 'shipping')}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-600 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                      />
                      {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">City</label>
                        <input
                          type="text"
                          name="city"
                          value={shippingInfo.city}
                          onChange={(e) => handleInputChange(e, 'shipping')}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-600 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                        />
                        {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">State</label>
                        <input
                          type="text"
                          name="state"
                          value={shippingInfo.state}
                          onChange={(e) => handleInputChange(e, 'shipping')}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-600 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                        />
                        {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                        <input
                          type="text"
                          name="zipCode"
                          value={shippingInfo.zipCode}
                          onChange={(e) => handleInputChange(e, 'shipping')}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-600 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                        />
                        {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Payment Form */}
                {step === 2 && (
                  <motion.div
                    key="payment-form"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-bold mb-4">Payment Information</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Cardholder Name</label>
                      <input
                        type="text"
                        name="cardholderName"
                        value={paymentInfo.cardholderName}
                        onChange={(e) => handleInputChange(e, 'payment')}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-600 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                      />
                      {errors.cardholderName && <p className="text-red-500 text-xs mt-1">{errors.cardholderName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={paymentInfo.cardNumber}
                        onChange={(e) => handleInputChange(e, 'payment')}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-600 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                      />
                      {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Expiry Date (MM/YY)</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={paymentInfo.expiryDate}
                          onChange={(e) => handleInputChange(e, 'payment')}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-600 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                        />
                        {errors.expiryDate && <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={paymentInfo.cvv}
                          onChange={(e) => handleInputChange(e, 'payment')}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-600 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                        />
                        {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Order summary */}
            <motion.div 
              className="md:col-span-1 bg-white rounded-2xl shadow-lg p-6 flex flex-col"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
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
              
              <div className="mt-6 flex flex-col space-y-3">
                <motion.button
                  onClick={handleNextStep}
                  disabled={loading}
                  className="w-full py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Processing...
                    </div>
                  ) : (
                    step === 1 ? 'Continue to Payment' : 'Complete Order'
                  )}
                </motion.button>
              </div>

              {/* Security Badge */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center space-x-2">
                  <Lock className="w-4 h-4 text-gray-600" />
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

export default CheckoutSection;
