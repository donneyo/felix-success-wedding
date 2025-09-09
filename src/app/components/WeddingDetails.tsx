"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function WeddingDetails() {
  // Bridesmaids slides
  const bridesmaidsSlides = [
    {
      label: "Maid of Honor - Jane Smith",
      img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757376057/b8_juvmyj.jpg",
    },
    {
      label: "Bridesmaid - Emily Johnson",
      img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757376057/b8_juvmyj.jpg",
    },
    {
      label: "Bridesmaid - Sarah Williams",
      img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757376057/b8_juvmyj.jpg",
    },
  ];

  // Groomsmen slides
  const groomsmenSlides = [
    {
      label: "Best Man - Don Neyo",
      img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756910342/bestman_pdejkw.webp",
    },
    {
      label: "Groomsman - Michael Brown",
      img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757376057/b8_juvmyj.jpg",
    },
    {
      label: "Groomsman - David Wilson",
      img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757376057/b8_juvmyj.jpg",
    },
    {
      label: "Groomsman - Daniel Anderson",
      img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757376057/b8_juvmyj.jpg",
    },
  ];

  // Others (DJ, Event Planner, etc.)
  const othersSlides = [
    {
      label: "DJ - DJ Neyo",
      img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756910333/Dj_NEYO_E_Flyer_l1x5wu.jpg",
    },
    {
      label: "Event Planner - Sophia Martinez",
      img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757376057/b8_juvmyj.jpg",
    },
  ];

  return (
    <section
      id="details"
      className="py-20 bg-gradient-to-br from-blue-1500 to-white-100"
    >
     <div className="max-w-6xl mx-auto px-4">
       <h2 className="font-serif text-4xl md:text-5xl text-center text-white-900 mb-12 font-bold">
         Our Wedding Crew
       </h2>

       {/* Wedding Crew Section */}
       <div className="space-y-20 py-20">
         {/* Bridesmaids Carousel */}
         <section className="flex flex-col items-center space-y-6">
           <CrewCarousel slides={bridesmaidsSlides} />
           <h2 className="font-serif text-3xl md:text-4xl text-center text-white-900 font-bold">
             The Bridesmaids
           </h2>
         </section>

         {/* Groomsmen Carousel */}
         <section className="flex flex-col items-center space-y-6">
           <CrewCarousel slides={groomsmenSlides} />
           <h2 className="font-serif text-3xl md:text-4xl text-center text-white-900 font-bold">
             The Groomsmen
           </h2>
         </section>

         {/* Others Carousel */}
         <section className="flex flex-col items-center space-y-6">
           <CrewCarousel slides={othersSlides} />
           <h2 className="font-serif text-3xl md:text-4xl text-center text-white-900 font-bold">
             Dj & Events Planner
           </h2>
         </section>
       </div>
     </div>

    </section>
  );
}

// Reusable Crew Carousel
function CrewCarousel({ slides }: { slides: { label: string; img: string }[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[28rem] overflow-hidden rounded-2xl shadow-xl border-2 border-rose-600">
      {slides.map((item, i) => (
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
            <p className="text-sm text-white font-medium">{item.label}</p>
          </div>
        </motion.div>
      ))}

      {/* Prev / Next buttons */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
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
