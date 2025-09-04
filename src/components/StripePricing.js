import React, { useEffect } from "react";
import { ShoppingBag } from 'lucide-react';

const StripePricing = () => {
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

  return (
    <>
      <section id="merch" className="py-10 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
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

          {/* Stripe Pricing Table */}
          <div className="p-4 rounded-xl border border-gray-200 shadow-md max-h-[600px] overflow-hidden">
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <stripe-pricing-table 
                    pricing-table-id="prctbl_1S3NWb0Tih50iApdG0qRXe1J"
                    publishable-key="pk_test_51S03US0Tih50iApdGJ8IZxIKNzXGq5IjOt0H5gRExffx0qytegr8FJJ5LRwpO7Q33fsdGQcibRlZqys2sV3O9CTF00FQUFWvwu">
                  </stripe-pricing-table>
                `,
              }}
            />
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
        }
      `}</style>
    </>
  );
};

export default StripePricing;
