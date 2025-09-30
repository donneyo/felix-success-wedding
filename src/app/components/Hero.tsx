// src/app/components/Hero.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Tangerine } from "next/font/google";

const alexBrush = Tangerine({ subsets: ["latin"], weight: "700" });

export default function Hero() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756162680/fs3_nkwmr2.jpg",
      text: "Felix & Success — We can’t wait to share our special day with you",
    },
    {
      image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756162671/fs7_eikabw.jpg",
      text: "Together is a beautiful place to be",
    },
    {
      image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756162668/fs8_nt4sd6.jpg",
      text: "Join us as we begin our forever story",
    },
    {
      image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756162668/fs5_xgalb1.jpg",
      text: "Your presence means the world to us",
    },
    {
      image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756162661/fs4_ayju7d.jpg",
      text: "Save the date — love is in the air",
    },
    {
      image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756162667/fs2_bdhvx8.jpg",
      text: "From this moment, forever",
    },
    {
      image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756162657/fs6_yvncit.jpg",
      text: "Celebrate love, laughter, and happily ever after",
    },
    {
      image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756162657/fs1_bkhhtg.jpg",
      text: "Counting down to the best day of our lives",
    },
  ];

  const handleArrow = (direction: "l" | "r") => {
    if (direction === "l") setIndex(index !== 0 ? index - 1 : slides.length - 1);
    if (direction === "r") setIndex(index !== slides.length - 1 ? index + 1 : 0);
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
      <button
        aria-label="previous"
        onClick={() => handleArrow("l")}
        className="absolute z-20 top-1/2 left-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition"
      >
        <span className="block w-4 h-4 border-t-2 border-l-2 border-white rotate-[-45deg]" />
      </button>

      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, i) => (
          <div
            key={i}
            aria-hidden={index !== i}
            className={`absolute inset-0 w-full h-full transition-opacity duration-[800ms] ease-in-out ${
              index === i ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image src={slide.image} alt={slide.text} fill className="object-cover" priority={i === 0} />
          </div>
        ))}
      </div>

      {/* Overlay text & countdown (single instances) */}
      <div className="absolute inset-0 flex flex-col justify-end items-center pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
        <div className="relative mx-4 mb-12 max-w-4xl text-center pointer-events-auto">
          <p className={`${alexBrush.className} text-white text-4xl sm:text-5xl md:text-6xl leading-tight drop-shadow-lg`}>
            {slides[index].text}
          </p>

          {/* Countdown box — single, not repeated */}
          <CountdownBox />
        </div>
      </div>

      {/* Right Arrow */}
      <button
        aria-label="next"
        onClick={() => handleArrow("r")}
        className="absolute z-20 top-1/2 right-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition"
      >
        <span className="block w-4 h-4 border-t-2 border-r-2 border-white rotate-[45deg]" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute z-20 bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 pointer-events-auto">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`go-to-slide-${i}`}
            className={`w-3 h-3 rounded-full transition-all ${index === i ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"}`}
          />
        ))}
      </div>
    </div>
  );
}

function CountdownBox() {
  const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });

  useEffect(() => {
    const targetDate = new Date("2025-10-06T16:00:00").getTime();
    const interval = setInterval(() => {
      const now = Date.now();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 text-white pointer-events-auto">
      <div className="grid grid-cols-4 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold">{timeLeft.days}</div>
          <div className="text-xs">Days</div>
        </div>
        <div>
          <div className="text-2xl font-bold">{timeLeft.hours}</div>
          <div className="text-xs">Hours</div>
        </div>
        <div>
          <div className="text-2xl font-bold">{timeLeft.minutes}</div>
          <div className="text-xs">Minutes</div>
        </div>
        <div>
          <div className="text-2xl font-bold">{timeLeft.seconds}</div>
          <div className="text-xs">Seconds</div>
        </div>
      </div>
    </div>
  );
}
