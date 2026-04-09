"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sarah Jenkins",
    country: "UK",
    text: "SerenCey planned the perfect honeymoon for us! The hotel selections in Ella were breathtaking.",
    rating: 5
  },
  {
    name: "Mark & Lisa",
    country: "Australia",
    text: "Our wildlife safari in Yala was incredible. The guide was so knowledgeable. Highly recommend mapping your freedom with them!",
    rating: 5
  },
  {
    name: "David Chen",
    country: "Singapore",
    text: "Smooth transfers, great communication, and an amazing itinerary covering Kandy and Galle. 10/10.",
    rating: 5
  }
];

export default function ReviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Traveler Stories</h2>
          <p className="text-lg text-gray-600">See what our guests have to say about their SerenCey experience.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              // This delay makes the cards animate in one by one (1, then 2, then 3)
              transition={{ duration: 0.5, delay: index * 0.2 }} 
              className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex text-yellow-400 mb-4">
                {/* 5 Stars */}
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{review.text}"</p>
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500">{review.country}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}