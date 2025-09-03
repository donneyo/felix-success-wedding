"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Tangerine, Playfair_Display } from "next/font/google";

// Calligraphy font for elegant style
const alexBrush = Tangerine({
  subsets: ["latin"],
  weight: "700",

});

// Serif font for clean bold subtitle
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Hero = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      image:
        "https://res.cloudinary.com/dfevwox5z/image/upload/v1756162680/fs3_nkwmr2.jpg",
      text: "Felix & Success — We can’t wait to share our special day with you",
    },
    {
      image:
        "https://res.cloudinary.com/dfevwox5z/image/upload/v1756162671/fs7_eikabw.jpg",
      text: "Together is a beautiful place to be",
    },
    {
      image:
        "https://res.cloudinary.com/dfevwox5z/image/upload/v1756162668/fs8_nt4sd6.jpg",
      text: "Join us as we begin our forever story",
    },
    {
      image:
        "https://res.cloudinary.com/dfevwox5z/image/upload/v1756162668/fs5_xgalb1.jpg",
      text: "Your presence means the world to us",
    },
    {
      image:
        "https://res.cloudinary.com/dfevwox5z/image/upload/v1756162661/fs4_ayju7d.jpg",
      text: "Save the date — love is in the air",
    },
    {
      image:
        "https://res.cloudinary.com/dfevwox5z/image/upload/v1756162667/fs2_bdhvx8.jpg",
      text: "From this moment, forever",
    },
    {
      image:
        "https://res.cloudinary.com/dfevwox5z/image/upload/v1756162657/fs6_yvncit.jpg",
      text: "Celebrate love, laughter, and happily ever after",
    },
    {
      image:
        "https://res.cloudinary.com/dfevwox5z/image/upload/v1756162657/fs1_bkhhtg.jpg",
      text: "Counting down to the best day of our lives",
    },
  ];

  const handleArrow = (direction: "l" | "r") => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : slides.length - 1);
    }
    if (direction === "r") {
      setIndex(index !== slides.length - 1 ? index + 1 : 0);
    }
  };

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Left Arrow */}
      <div
        className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center
                   rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition"
        onClick={() => handleArrow("l")}
      >
        <span className="block w-4 h-4 border-t-2 border-l-2 border-white rotate-[-45deg]" />
      </div>

      {/* Fade Wrapper */}
      <div className="relative w-full h-full">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 w-screen h-screen transition-opacity duration-[4000ms] ease-in-out ${
              index === i ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={`slide ${i}`}
              fill
              className="object-cover"
              priority={i === 0}
            />

            {/* Overlay text */}
            <div className="absolute inset-0 flex items-end md:items-center justify-center">
              {/* subtle gradient for readability */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
              <div className="relative mx-4 mb-20 md:mb-0 max-w-4xl text-center">
                <p
                  className={`${alexBrush.className} text-white bold text-7xl md:text-6xl font-normal drop-shadow-lg`}
                >
                  {slide.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <div
        className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center
                   rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition"
        onClick={() => handleArrow("r")}
      >
        <span className="block w-4 h-4 border-t-2 border-r-2 border-white rotate-[45deg]" />
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              index === i ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;


