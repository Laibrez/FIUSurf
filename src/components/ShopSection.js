import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, StarHalf, ShoppingCart, Heart, Minus, Plus } from 'lucide-react';

const ShopSection = ({ product, onBackToMerch, onAddToCart, onViewCart }) => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showCartButton, setShowCartButton] = useState(false);

  // The product data is now correctly referencing the images from the public/images/merch/products directory.
  // The 'product' prop, which comes from MerchSection, should already have correct paths.
  const productData = product || {
    id: 1,
    name: "FIU SURF CLUB TEE",
    price: 55,
    originalPrice: 75,
    rating: 4.5,
    reviews: 127,
    description: "Premium surf-inspired tee made with sustainable materials. Perfect for beach days and casual wear.",
    details: "100% organic cotton, pre-shrunk, comfortable fit",
    images: [
      "/images/merch/products/tshirt-green.jpg",
      "/images/merch/products/tshirt-blue.jpg",
      "/images/merch/products/tshirt-white.jpg",
      "/images/merch/products/tshirt-black.jpg"
    ],
    variants: [
      { name: "Forest Green", color: "#2d5016" },
      { name: "Ocean Blue", color: "#1e40af" },
      { name: "Classic White", color: "#ffffff" },
      { name: "Midnight Black", color: "#000000" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    inStock: true
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      console.log("Please select a size before adding to cart.");
      return;
    }
    const itemToAdd = {
      ...productData,
      selectedSize,
      quantity,
      image: productData.images[selectedVariant],
    };
    onAddToCart(itemToAdd);
    setShowCartButton(true);
  };
  
  const handleBuyNow = () => {
    if (!selectedSize) {
      console.log("Please select a size before buying.");
      return;
    }
    console.log("Redirecting to checkout for immediate purchase.");
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-5 h-5 fill-gray-300 text-gray-300" />);
    }
    return stars;
  };

  return (
    <section 
      className="bg-white min-h-screen py-12"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <button 
            onClick={onBackToMerch} 
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Merch
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible p-2">
              {productData.images.map((img, index) => (
                <div
                  key={index}
                  className={`w-20 h-20 flex-shrink-0 lg:w-24 lg:h-24 bg-gray-100 rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${selectedVariant === index ? 'border-orange-600' : 'border-transparent'}`}
                  onClick={() => setSelectedVariant(index)}
                >
                  <img src={img} alt={productData.name} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="relative flex-grow rounded-2xl overflow-hidden shadow-lg">
              <img
                src={productData.images[selectedVariant]}
                alt={productData.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="p-4">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2">{productData.name}</h2>
            <div className="flex items-center mb-4">
              <div className="flex mr-2">{renderStars(productData.rating)}</div>
              <span className="text-gray-600 text-sm">({productData.reviews} reviews)</span>
            </div>

            <div className="flex items-end mb-6">
              <p className="text-4xl font-extrabold text-orange-600 mr-4">${productData.price.toFixed(2)}</p>
              <p className="text-lg text-gray-400 line-through">${productData.originalPrice.toFixed(2)}</p>
            </div>

            <p className="text-gray-700 mb-6">{productData.description}</p>
            
            {/* Variants */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-800 mb-2">Color: <span className="font-normal text-gray-600">{productData.variants[selectedVariant].name}</span></p>
              <div className="flex space-x-2">
                {productData.variants.map((variant, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 rounded-full border-2 transition-all cursor-pointer ${selectedVariant === index ? 'border-gray-900' : 'border-gray-300'}`}
                    style={{ backgroundColor: variant.color }}
                    onClick={() => setSelectedVariant(index)}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Sizes */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-800 mb-2">Size: <span className="font-normal text-gray-600">{selectedSize || 'Select a size'}</span></p>
              <div className="flex flex-wrap gap-2">
                {productData.sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full border transition-all ${selectedSize === size ? 'bg-orange-600 text-white border-orange-600' : 'bg-white text-gray-900 border-gray-300 hover:border-gray-500'}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity */}
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-lg font-semibold text-gray-800">Quantity</span>
              <div className="flex items-center border border-gray-300 rounded-full">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="px-4 text-lg font-semibold text-gray-800">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col space-y-4 max-w-sm">
              {!showCartButton ? (
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedSize}
                  className="w-full py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all"
                >
                  <ShoppingCart className="w-5 h-5 inline mr-2" />
                  Add to cart
                </button>
              ) : (
                <button
                  onClick={onViewCart}
                  className="w-full py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-all"
                >
                  View Cart
                </button>
              )}
              
              <button
                onClick={handleBuyNow}
                disabled={!selectedSize}
                className="w-full py-4 border-2 border-black text-black font-bold rounded-full hover:bg-black hover:text-white disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed transition-all"
              >
                Buy now
              </button>

              <div className="text-center">
                <p className="text-sm text-gray-600">Free shipping over $50</p>
              </div>

              {/* Wishlist */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="flex items-center justify-center w-full py-2 text-gray-600 hover:text-red-500 transition-colors"
              >
                <Heart className={`w-5 h-5 mr-2 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                {isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
