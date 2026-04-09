"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// We store the tour data here to keep the code clean
const tours = [
  {
    id: 1,
    title: "Serenity in Sri Lanka – 8 Days of Bliss",
    price: "550 Us $",
    description: "From ancient wonders to coastal beauty, this journey blends culture, nature, and adventure into one perfect escape.",
    image: "/tours/tour1.jpg", // You will need to add these images to your public/tours folder
    tag: "CLASSIC",
    sale: "20% OFF"
  },
  {
    id: 2,
    title: "Enchanting Sri Lanka: 10-Day Adventures",
    price: "690 Us $",
    description: "From misty mountains to sun-kissed shores, experience the best of Sri Lanka in one epic adventure",
    image: "/tours/tour2.jpg",
    tag: "CLASSIC",
    sale: "20% OFF"
  },

  {
    id: 3,
    title: "Enchanting Sri Lanka: 12-Day Adventures",
    price: "850 Us $",
    description: "Dive into the diverse Sri Lankan Culture, set off on a Safari, Climb Sigiriya Rock & checkout the breathtaking Sceneries",
    image: "/tours/tour3.jpg",
    tag: "CLASSIC",
    sale: "20% OFF"
  },
  {
    id: 4,
    title: "Essence of Sri Lanka – 8-Day Discovery",
    price: "550 Us $",
    description: "Explore ancient cities, scenic hills, and stunning beaches on this unforgettable island journey.",
    image: "/tours/tour4.jpg",
    tag: "CLASSIC",
    sale: "20% OFF"
  }
];

export default function TopSelling() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          {/* Using the teal color from your screenshot */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#35878b]">
            Our Top Selling Sri Lankan Experiences
          </h2>
        </motion.div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }} // Staggered fade in
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              
              {/* Image Container with Badges */}
              <div className="relative h-48 w-full bg-gray-200">
                {/* IMPORTANT: Since we are using Next.js Image with string paths, 
                  make sure you have a folder called 'tours' inside your 'public' folder 
                  with these images, OR switch this to a standard <img> tag if you prefer.
                */}
                <Image 
                  src={tour.image} 
                  alt={tour.title}
                  fill
                  className="object-cover"
                />
                
                {/* Top Left Tag */}
                <div className="absolute top-3 left-3">
                  <span className="text-white font-bold text-sm tracking-wider drop-shadow-md">
                    {tour.tag}
                  </span>
                </div>

                {/* Top Right Sale Badge */}
                <div className="absolute top-3 right-3">
                  <div className="bg-red-600 text-white rounded-full h-12 w-12 flex flex-col items-center justify-center shadow-md transform rotate-12">
                    <span className="text-[10px] font-bold leading-none">SALE</span>
                    <span className="text-sm font-bold leading-none">{tour.sale}</span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-[#206970] font-bold text-lg leading-tight mb-2">
                  {tour.title}
                </h3>
                
                <p className="text-gray-700 text-sm mb-3">
                  {tour.price}
                </p>
                
                <p className="text-gray-600 text-xs mb-6 flex-grow leading-relaxed">
                  {tour.description}
                </p>
                
                {/* Button fixed to bottom */}
                <Link 
                  href={`/tours/${tour.id}`} 
                  className="mt-auto w-full bg-[#35878b] hover:bg-[#206970] text-white text-center py-2.5 rounded-lg text-sm font-semibold transition-colors"
                >
                  Tour Details
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}