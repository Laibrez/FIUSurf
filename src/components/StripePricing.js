import React, { useEffect } from "react";
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const StripePricing = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="merch" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500 rounded-full mb-6 shadow-lg">
            <ShoppingBag className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-4">
            MERCH
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Rep the crew with our exclusive FIU Surf Club merchandise.
            Premium quality gear for true wave riders.
          </p>
        </motion.div>

        {/* Stripe Pricing Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-6 rounded-2xl border border-gray-200 shadow-lg">
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
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500">
            Questions about our merchandise?
            <span className="text-orange-600 font-medium ml-2">
              Contact us anytime!
            </span>
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        stripe-pricing-table {
          --background: white;
          --text: #111827;
          --accent: #f97316;
        }
      `}</style>
    </section>
  );
};

export default StripePricing;
