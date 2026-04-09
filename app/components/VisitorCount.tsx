"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// The data from your screenshot
const stats = [
  { id: 1, value: 6, label: "Years of Industry Experience" },
  { id: 2, value: 150, label: "Completed Tours" },
  { id: 3, value: 25, label: "Chauffeur Guides" },
  { id: 4, value: 50, label: "Vehicles" },
];

// A reusable counter component so each number animates independently
function Counter({ endValue, label }: { endValue: number; label: string }) {
  const [count, setCount] = useState(0);

  const startCounting = () => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = endValue / (duration / 16); // 60fps frame rate target

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        // Math.round ensures it counts up smoothly even for small numbers like 6
        setCount(Math.round(start)); 
      }
    }, 16);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onViewportEnter={startCounting}
      className="text-center p-6 flex flex-col items-center justify-center"
    >
      {/* Numbers: Styled with your theme's Green */}
      <h3 className="text-6xl font-bold text-green-600 mb-4">
        {count}+
      </h3>
      {/* Text: Styled with your theme's Dark Blue */}
      <p className="text-lg text-blue-900 font-medium max-w-[200px]">
        {label}
      </p>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
            At <span className="text-blue-900 font-bold">SerenCey</span>, we customize each itinerary to fit your preferences, ensuring a unique experience.
          </p>
        </motion.div>

        {/* The 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          {stats.map((stat) => (
            <Counter key={stat.id} endValue={stat.value} label={stat.label} />
          ))}
        </div>

      </div>
    </section>
  );
}