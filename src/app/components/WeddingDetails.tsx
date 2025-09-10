"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function WeddingDetails() {
  // Bridesmaids slides
  const bridesmaidsSlides = [
    {
      label: "Maid of Honor - Loveth",
      img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757376059/b1_hmrjzl.jpg",
    },
    {
      label: "Bridesmaid - Abigail",
      img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757376057/b8_juvmyj.jpg",
    },
    {
      label: "Bridesmaid - Bella",
      img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757465841/bella_xfbvhx.jpg",
    },
    {
          label: "Bridesmaid - Ajoke",
          img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757376055/b6_u2jcqh.jpg",
        },
        {
          label: "Bridesmaid - Annabella",
          img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757376055/b4_rbgfw1.jpg",
        },
        {
          label: "Bridesmaid - Ruky",
          img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757376058/b3_uxgxzn.jpg",
        },
        {
            label: "Bridesmaid - Favor",
            img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757376055/b5_ipfxc1.jpg",
        },
        {
            label: "Bridesmaid - Sarah",
            img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757376058/b9_ppun4e.jpg",
        },
        {
            label: "Bridesmaid - Joy",
            img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757376064/b7_lsfv3r.jpg",
        },
        {
            label: "Bridesmaid - Mary",
             img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757376054/b2_hnzuoz.jpg",
        },
        {
            label: "Bridesmaid - Nancy",
            img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757465376/IMG-20250909-WA0056_oiykmd.jpg",
        },
        {
            label: "Bridesmaid - Christiana",
            img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757465841/ristia_vz1ikg.jpg",
        },
  ];

  // Groomsmen slides
  const groomsmenSlides = [
    {
      label: "Best Man - Neyo",
      img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757468706/neyo1_fxkbjv.jpg",
    },
    {
      label: "Groomsman - Skenk",
      img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757467070/skenk_bsrovy.jpg",
    },
    {
      label: "Groomsman - Lawrence",
      img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757467070/lawrence_lybmq2.jpg",
    },
    {
      label: "Groomsman - Vicent",
      img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757467070/vicent_ffqnlf.jpg",
    },
    {
          label: "Groomsman - Adigun",
          img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757467069/adg_ky95re.jpg",
        },
        {
          label: "Groomsman - Olaolu",
          img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757467069/olu_ryq1dx.jpg",
        },
        {
          label: "Groomsman - Osagie",
          img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757467069/osagie_pk4xja.jpg",
        },
    {
          label: "Groomsman - Tolulope",
          img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757467068/ope_soxbkd.jpg",
        },
        {
          label: "Groomsman - Friday",
          img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757467067/friday_wudktf.jpg",
        },
        {
          label: "Groomsman - Ire",
          img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757467067/ire_okkq8k.jpg",
        },
        {
            label: "Groomsman - Dubby",
            img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757467065/dubby_sy5u4p.jpg",
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
        <h2 className="font-serif text-4xl md:text-5xl text-center text-white-900 mb-8 font-bold">
          The Wedding Crew
        </h2>

        {/* Wedding Crew Section */}
        <div className="space-y-20 py-20">
          {/* Bridesmaids Carousel */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-base md:text-lg font-semibold text-gray-500 tracking-wide uppercase">
              Bridesmaids
            </h3>
            <CrewCarousel slides={bridesmaidsSlides} />
          </div>

          {/* Groomsmen Carousel */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-base md:text-lg font-semibold text-gray-500 tracking-wide uppercase">
              Groomsmen
            </h3>
            <CrewCarousel slides={groomsmenSlides} />
          </div>

          {/* Others Carousel */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-base md:text-lg font-semibold text-gray-500 tracking-wide uppercase">
              DJ And Event Planner
            </h3>
            <CrewCarousel slides={othersSlides} />
          </div>
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
          <div className="absolute bottom-10 left-4 bg-rose-600/90 rounded-lg px-3 py-2">
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
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
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
