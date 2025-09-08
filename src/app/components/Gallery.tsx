"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Gallery() {
  const featuredSlides = [
    {
      label: "Engagement Session",
      img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757373397/eng5_aod0fy.jpg",
    },
   {
         label: "Engagement Session",
         img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757373399/eng4_iwr0cm.jpg",
       },
    {
          label: "Engagement Session",
          img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757373397/eng2_ehddmi.jpg",
        },
    {
              label: "Engagement Session",
              img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757373396/eng3_xptnwn.jpg",
            },
        {
                  label: "Engagement Session",
                  img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757373396/eng1_kumbmz.jpg",
                },
  ];

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-br from-blue-1500 to-white-100"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl text-center text-white-800 mb-16 font-bold">
          Our Journey Together
        </h2>

        {/* Grid of small photos */}
        <div className="grid grid-cols1 md:grid-cols-4 gap-4 mb-12">
          {[
            {
              label: "First Date",
              img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756231869/hw6_fc9qrh.jpg",
            },
            {
              label: "Adventure Trip",
              img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756231869/bc2_kmbwlu.jpg",
            },
            {
              label: "Family Trip",
              img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757373982/shoot_xq6soo.jpg",
            },
            {
              label: "Vacation",
              img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756231868/bc4_q9d1wy.jpg",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-rose-600">
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 bg-rose-600/90">
                  <p className="text-xs text-white text-center font-medium">
                    {item.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Photos Carousel */}
        <FeaturedPhotosCarousel featuredSlides={featuredSlides} />
      </div>
    </section>
  );
}

// Extract carousel into its own component
function FeaturedPhotosCarousel({ featuredSlides }: { featuredSlides: { label: string; img: string }[] }) {
  const [current, setCurrent] = useState(0);

  // autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featuredSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredSlides.length]);

  return (
    <div className="relative w-full h-100 overflow-hidden rounded-2xl shadow-xl border-2 border-rose-600">
      {featuredSlides.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: i === current ? 1 : 0,
            y: i === current ? 0 : 40,
          }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={item.img}
            alt={item.label}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-rose-600/90 rounded-lg px-3 py-2">
            <p className="text-xs text-white font-medium">{item.label}</p>
          </div>
        </motion.div>
      ))}

      {/* Prev / Next buttons */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + featuredSlides.length) % featuredSlides.length)
        }
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % featuredSlides.length)}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
        {featuredSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-rose-600" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
