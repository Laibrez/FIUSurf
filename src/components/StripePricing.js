import React, { useEffect, useState } from "react";
import { ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

const StripePricing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Define your pricing tables data
  const pricingTables = [
    {
      title: "Merchandise",
      description: "T-shirts, hoodies, and accessories",
      pricingTableId: "prctbl_1S3dZe0FUd7MfPTQLomTd9HC",
      publishableKey: "pk_live_51S03UE0FUd7MfPTQ5be98SvTgjPJ3dpMthI2GICvY2P8gbhsB4cpS6udBuolXBonjGRK2AkdGdSbjfXU1aD1zZeN00xegQeA6s"
    },
    {
      title: "Shipping Options",
      description: "Standard and expedited shipping",
      pricingTableId: "prctbl_1S3cxy0Tih50iApdG1kqae4t",
      publishableKey: "pk_test_51S03US0Tih50iApdGJ8IZxIKNzXGq5IjOt0H5gRExffx0qytegr8FJJ5LRwpO7Q33fsdGQcibRlZqys2sV3O9CTF00FQUFWvwu"
    }
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector('script[src="https://js.stripe.com/v3/pricing-table.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % pricingTables.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + pricingTables.length) % pricingTables.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <section id="merch" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-4 shadow-lg">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
              MERCH
            </h2>
            <p className="text-md md:text-lg text-gray-600 max-w-xl mx-auto">
              Rep the crew with our exclusive FIU Surf Club merchandise.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative w-full max-w-6xl mx-auto">


            {/* Carousel Wrapper */}
            <div className="relative overflow-hidden rounded-xl border border-gray-200 shadow-md bg-white">
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-2 shadow-lg transition-all duration-200 hover:shadow-xl"
                disabled={pricingTables.length <= 1}
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-2 shadow-lg transition-all duration-200 hover:shadow-xl"
                disabled={pricingTables.length <= 1}
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>

              {/* Slides Container */}
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {pricingTables.map((table, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 min-h-[400px]"
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `
                          <stripe-pricing-table 
                            pricing-table-id="${table.pricingTableId}"
                            publishable-key="${table.publishableKey}">
                          </stripe-pricing-table>
                        `,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicators */}
            {pricingTables.length > 1 && (
              <div className="flex justify-center mt-6 space-x-2">
                {pricingTables.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide
                        ? 'bg-orange-500 scale-110'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Slide Counter */}
            {pricingTables.length > 1 && (
              <div className="text-center mt-4">
                <span className="text-sm text-gray-500">
                  {currentSlide + 1} of {pricingTables.length}
                </span>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              Questions about our merchandise?
              <span className="text-orange-600 font-medium ml-2">
                Contact us anytime!
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* CSS Styles */}
      <style jsx>{`
        stripe-pricing-table {
          --background: white;
          --text: #111827;
          --accent: #f97316;
          width: 100%;
          display: block;
        }
        
        /* Ensure Stripe table is fully visible */
        .stripe-pricing-table-wrapper {
          width: 100%;
          overflow: visible;
        }

        /* Smooth scrolling for carousel */
        .carousel-container {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};

export default StripePricing;


