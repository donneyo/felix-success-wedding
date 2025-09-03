"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function WeddingDetails() {
  // Countdown Timer Logic
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2025-10-06T16:00:00").getTime(); // 6th Oct, 2025

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Wedding Crew Data
  const crew = [
    { role: "Best Man", name: "Don neyo", image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756941359/PXL_20250827_143323810_ev50hd.jpg" },
    { role: "Maid of Honor", name: "Jane Smith", image: "https://res.cloudinary.com/xxxx/image/upload/v123456/bestman.jpg" },
    { role: "Bridesmaid", name: "Emily Johnson", image: "https://res.cloudinary.com/xxxx/image/upload/v123456/bestman.jpg" },
    { role: "Bridesmaid", name: "Sarah Williams" , image: "https://res.cloudinary.com/xxxx/image/upload/v123456/bestman.jpg"},
    { role: "Bridesmaid", name: "Emily Johnson", image: "https://res.cloudinary.com/xxxx/image/upload/v123456/bestman.jpg" },
    { role: "Bridesmaid", name: "Sarah Williams", image: "https://res.cloudinary.com/xxxx/image/upload/v123456/bestman.jpg" },
    { role: "Groomsman", name: "Michael Brown", image: "https://res.cloudinary.com/xxxx/image/upload/v123456/bestman.jpg" },
    { role: "Groomsman", name: "David Wilson", image: "https://res.cloudinary.com/xxxx/image/upload/v123456/bestman.jpg" },
    { role: "Groomsman", name: "Daniel Anderson", image: "https://res.cloudinary.com/xxxx/image/upload/v123456/bestman.jpg" },
    { role: "Groomsman", name: "James Thomas" , image: "https://res.cloudinary.com/xxxx/image/upload/v123456/bestman.jpg"},
    { role: "DJ", name: "DJ Neyo", image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756910333/Dj_NEYO_E_Flyer_l1x5wu.jpg" },
    { role: "Event Planner", name: "Sophia Martinez", image: "https://res.cloudinary.com/xxxx/image/upload/v123456/bestman.jpg" },
  ];

  return (
    <>
      {/* Wedding Details Section */}
      <section
        id="details"
        className="py-20 bg-gradient-to-br from-blue-1500 to-white-100"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl text-center text-white-900 mb-16 font-bold">
            Wedding Details
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Ceremony */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-teal-500">
              <div className="text-center mb-6">
                <h3 className="font-serif text-2xl text-black mb-2 font-bold">
                  Church wedding
                </h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong className="text-red-600">Date:</strong> September 25,
                  2025
                </p>
                <p>
                  <strong className="text-red-600">Time:</strong> 2:00 PM
                </p>
                <p>
                  <strong className="text-red-600">Location:</strong>
                  Kingsville church auditorium
                  <br />
                  No 2 akinwunmi street alagomeji yaba
                  <br /> Lagos 101241
                </p>
              </div>
            </div>

            {/* Reception */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-teal-300">
              <div className="text-center mb-6">
                <h3 className="font-serif text-2xl text-black mb-2 font-bold">
                  Reception
                </h3>
              </div>

              <div className="space-y-3 text-gray-700">
                <p>
                  <strong className="text-red-600">Time:</strong> 12:00 PM - 6:00
                  PM
                </p>
                <p>
                  <strong className="text-red-600">Location:</strong>
                  10/12 Nnobi St, Surulere, Lagos
                  <br />
                  whiteley event centre
                  <br /> Lagos 101241
                </p>
                <p>
                  <strong className="text-red-600">Dress Code:</strong> White ,
                  Torquoise blue , Gold
                </p>
              </div>
            </div>

            <motion.div
              className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-teal-600 mt-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full h-100 md:h-[500px]">
                <iframe
                  src="https://embed.waze.com/iframe?zoom=16&lat=6.499570&lon=3.347295&pin=1"
                  width="100%"
                  height="100%"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>

            {/* Traditional */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-teal-300">
              <div className="text-center mb-6">
                <h3 className="font-serif text-2xl text-black mb-2 font-bold">
                  Traditional wedding
                </h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong className="text-rose-600">Hotel:</strong> Love City Inn
                </p>
                <p>
                  <strong className="text-rose-600">Address:</strong> No 14 abuedefe
                  street off Siloku Road
                  <br /> Benin City
                </p>
                <p>
                  <strong className="text-red-600">Dress Code:</strong> White ,
                  Torquoise blue , Gold
                </p>
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mt-20 flex justify-center">
            <div className="bg-gradient-to-br from-blue-1500 to-white-100 rounded-2xl p-10 shadow-2xl border-2 border-teal-400 text-center w-[100%] md:w-[600px]">
              <h3 className="font-serif text-2xl text-white mb-8 font-bold tracking-wide">
                Countdown to Our Big Day
              </h3>
              <div className="grid grid-cols-4 gap-6">
                <div className="flex flex-col items-center">
                  <div className="text-5xl font-bold text-white-900">
                    {timeLeft.days}
                  </div>
                  <div className="text-sm text-white-800 mt-2">Days</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-5xl font-bold text-white-900">
                    {timeLeft.hours}
                  </div>
                  <div className="text-sm text-white-800 mt-2">Hours</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-5xl font-bold text-white-900">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-sm text-white-800 mt-2">Minutes</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-5xl font-bold text-rose-400">
                    {timeLeft.seconds}
                  </div>
                  <div className="text-sm text-white-800 mt-2">Seconds</div>
                </div>
              </div>
            </div>
          </div>

          {/* Wedding Crew Section */}
          <section className="py-20">
            <h2 className="font-serif text-4xl md:text-5xl text-center text-white-900 font-bold mb-12">
              Our Wedding Crew
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {crew.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden text-center p-4 border hover:shadow-xl transition"
                >
                  {/* Crew Image or Placeholder */}
                                   {member.image ? (
                                     <img
                                       src={member.image}
                                       alt={member.name}
                                       className="w-full h-100 object-cover mb-4 rounded-lg"
                                     />
                                   ) : (
                                     <div className="w-full h-60 bg-gray-200 flex items-center justify-center mb-4 rounded-lg">
                                       <span className="text-gray-500 text-sm">
                                         Image Placeholder
                                       </span>
                                     </div>
                                   )}
                  {/* Role & Name */}
                  <h4 className="text-lg font-bold text-gray-800">
                    {member.role}
                  </h4>
                  <p className="text-gray-600">{member.name}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
