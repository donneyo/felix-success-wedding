"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Tangerine, Playfair_Display } from "next/font/google";

const alexBrush = Tangerine({ subsets: ["latin"], weight: "700" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600"] });

const Hero = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757503243/img_9828_copy_hbr0zs.jpg",
      text: "Felix & Success — We can’t wait to share our special day with you",
    },
    {
      image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757503233/img_0038_copy_tnw4c5.jpg",
      text: "Counting down to the best day of our lives",
    },
    {
      image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757503239/img_9877_copy_ybuqix.jpg",
      text: "Join us as we begin our forever story",
    },
    {
      image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757503220/img_0004_copy_oqtmxt.jpg",
      text: "Your presence means the world to us",
    },
    {
      image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757503239/img_9809_copy_ojihdd.jpg",
      text: "Save the date — love is in the air",
    },
    {
      image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757503211/img_0020_copy_siryfk.jpg",
      text: "From this moment, forever",
    },
    {
      image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1757503224/img_0071_copy_luukkm.jpg",
      text: "Celebrate love, laughter, and happily ever after",
    },
  ];

  // countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // Event: Oct 4, 2025 at 16:00 WAT (Lagos, UTC+1)
    // Convert to UTC instant: 16:00 WAT == 15:00 UTC
    const target = Date.UTC(2025, 9, 4, 15, 0, 0); // month 9 => October

    const tick = () => {
      const now = Date.now();
      const distance = target - now;

      if (distance <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
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
    };

    tick(); // run immediately so UI isn't blank for a second
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleArrow = (direction: "l" | "r") => {
    if (direction === "l") {
      setIndex((prev) => (prev !== 0 ? prev - 1 : slides.length - 1));
    } else {
      setIndex((prev) => (prev !== slides.length - 1 ? prev + 1 : 0));
    }
  };

  // AUTOPLAY
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
                   rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition z-20"
        onClick={() => handleArrow("l")}
        aria-label="Previous slide"
      >
        <span className="block w-4 h-4 border-t-2 border-l-2 border-white rotate-[-45deg]" />
      </div>

      {/* Slides */}
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
              unoptimized
              className="object-cover"
              priority={i === 0}
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center space-y-8">
              <p
                className={`${alexBrush.className} text-white text-5xl md:text-7xl font-normal drop-shadow-lg`}
              >
                {slide.text}
              </p>

              {/* Countdown under text — transparent card on image */}
              <div className="bg-black/50 backdrop-blur-md rounded-xl px-6 py-4 inline-block border border-white/20 shadow-lg">
                <h3 className="text-white text-lg mb-2 tracking-wider font-semibold">
                  Countdown to Our Big Day
                </h3>
                <div className="flex space-x-6 text-white font-bold text-2xl md:text-3xl">
                  <div className="text-center">
                    <p>{timeLeft.days}</p>
                    <span className="block text-sm font-normal">Days</span>
                  </div>
                  <div className="text-center">
                    <p>{timeLeft.hours}</p>
                    <span className="block text-sm font-normal">Hours</span>
                  </div>
                  <div className="text-center">
                    <p>{timeLeft.minutes}</p>
                    <span className="block text-sm font-normal">Minutes</span>
                  </div>
                  <div className="text-center">
                    <p className="text-rose-400">{timeLeft.seconds}</p>
                    <span className="block text-sm font-normal">Seconds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <div
        className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center
                   rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition z-20"
        onClick={() => handleArrow("r")}
        aria-label="Next slide"
      >
        <span className="block w-4 h-4 border-t-2 border-r-2 border-white rotate-[45deg]" />
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              index === i ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
            }`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
