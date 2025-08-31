import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MerchSection from './components/MerchSection';
import ShopSection from './components/ShopSection';
import SurfingSection from './components/SurfingSection';
import FilmsSection from './components/FilmsSection';
import TripsSection from './components/TripsSection';
import EventsCalendar from './components/EventsCalendar';
import CompetitionSection from './components/CompetitionSection';
import SkatingSection from './components/SkatingSection';
import CrewSection from './components/CrewSection';
import Footer from './components/Footer';
import CartSection from './components/Cart';
import CheckoutSection from './components/Checkout';

export default function App() {
  // State to manage the current view of the application
  const [currentView, setCurrentView] = useState('home');
  // State for the product selected from the MerchSection
  const [selectedProduct, setSelectedProduct] = useState(null);
  // State for the items in the user's shopping cart
  const [cartItems, setCartItems] = useState([]);
  // State for the order details after a successful checkout
  const [orderComplete, setOrderComplete] = useState(null);

  // Handles clicking a product in the MerchSection, transitioning to the ShopSection
  const handleProductClick = (product) => {
    // Transform your existing product data to match ShopSection format
    const shopProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.price + 10, // Add original price for discount effect
      rating: 4.5,
      reviews: Math.floor(Math.random() * 200) + 50,
      description: `Premium ${product.name} designed for FIU Surf Club members. Perfect for beach days, surf sessions, and representing your crew.`,
      details: "High-quality materials, comfortable fit, official FIU Surf Club branding",
      images: [
        product.image,
        product.image, // You can add more variants later
        product.image,
        product.image
      ],
      variants: [
        { name: "Ocean Blue", color: "#1e40af" },
        { name: "Sunset Orange", color: "#ea580c" },
        { name: "Classic White", color: "#ffffff" },
        { name: "Midnight Black", color: "#000000" }
      ],
      sizes: product.category === 'Apparel' ? ["XS", "S", "M", "L", "XL", "XXL"] : ["One Size"],
      inStock: true,
      category: product.category
    };
    setSelectedProduct(shopProduct);
    setCurrentView('shop');
  };

  // Handles navigating back to the home page from other sections
  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProduct(null);
  };
  
  // Handles adding an item to the cart from the ShopSection
  const handleAddToCart = (item) => {
    setCartItems(prevItems => {
      // Check if the item already exists in the cart
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id && cartItem.selectedSize === item.selectedSize);
      if (existingItem) {
        // If it exists, update the quantity
        return prevItems.map(cartItem =>
          cartItem.id === item.id && cartItem.selectedSize === item.selectedSize
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      // Otherwise, add the new item to the cart
      return [...prevItems, item];
    });
    // After adding to cart, switch to the CartSection view
    setCurrentView('cart');
  };
  
  // Updates the cart items state, used by the CartSection to handle quantity changes/removals
  const handleUpdateCart = (updatedCart) => {
    setCartItems(updatedCart);
  };
  
  // Handles the user proceeding from the CartSection to the CheckoutSection
  const handleProceedToCheckout = (items) => {
    setCartItems(items);
    setCurrentView('checkout');
  };
  
  // Handles the user going back to the ShopSection from the CartSection or CheckoutSection
  const handleBackToShop = () => {
    setCurrentView('shop');
  };
  
  // Handles the completion of the order in the CheckoutSection
  const handleOrderComplete = (order) => {
    setOrderComplete(order);
    setCurrentView('orderComplete');
    setCartItems([]); // Clear the cart after a successful order
  };

  return (
    <div className="font-sans antialiased text-gray-900">
      {/* Conditionally render components based on the currentView state */}
      {currentView === 'home' && (
        <>
          <Navbar />
          <HeroSection />
          <MerchSection onProductClick={handleProductClick} />
          <SurfingSection />
          <FilmsSection />
          <TripsSection />
          <EventsCalendar />
          <CompetitionSection />
          <SkatingSection />
          <CrewSection />
          <Footer />
        </>
      )}

      {currentView === 'shop' && (
        <ShopSection
          product={selectedProduct}
          onBackToMerch={() => setCurrentView('home')}
          onAddToCart={handleAddToCart}
          onViewCart={() => setCurrentView('cart')}
        />
      )}

      {currentView === 'cart' && (
        <CartSection
          cartItems={cartItems}
          onBackToShop={handleBackToShop}
          onProceedToCheckout={handleProceedToCheckout}
          onUpdateCart={handleUpdateCart}
        />
      )}

      {currentView === 'checkout' && (
        <CheckoutSection
          cartItems={cartItems}
          onBackToShop={handleBackToShop}
          onOrderComplete={handleOrderComplete}
        />
      )}

      {/* A simple placeholder for an order complete page */}
      {currentView === 'orderComplete' && (
        <div className="min-h-screen flex items-center justify-center bg-green-50">
          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Order Complete!</h2>
            <p className="text-gray-700 mb-6">Thank you for your purchase.</p>
            <button
              onClick={handleBackToHome}
              className="px-6 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

