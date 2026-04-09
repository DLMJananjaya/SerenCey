"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Discover the Pearl of the Indian Ocean</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the rich culture, lush landscapes, and golden beaches of Sri Lanka with SerenCey.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* About Sri Lanka Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Why Sri Lanka?</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              From the ancient ruins of Sigiriya to the misty tea plantations of Nuwara Eliya, Sri Lanka offers a world of unforgettable experiences within a single island. Whether you crave thrilling wildlife safaris or peaceful sunset strolls on Unawatuna beach, the magic of Ceylon awaits.
            </p>
          </motion.div>

          {/* About SerenCey Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Our Promise</h3>
            <p className="text-gray-600 leading-relaxed">
              At <strong>SerenCey</strong>, we map your freedom. We don't just book tours; we craft personalized journeys tailored to your dreams. With local expertise, 24/7 support, and carefully vetted guides, we ensure your Sri Lankan adventure is safe, authentic, and truly unforgettable.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}