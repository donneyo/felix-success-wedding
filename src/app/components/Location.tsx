"use client";

import { motion } from "framer-motion";

export default function Location() {
  return (
    <section
      id="location"
      className="py-20 bg-gradient-to-br from-blue-1500 to-white-100"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl text-center text-white-900 mb-16 font-bold">
          Wedding Venues
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Church Wedding */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-teal-300">
            <div className="text-center mb-6">
              <h3 className="font-serif text-2xl text-black mb-2 font-bold">
                Church Wedding
              </h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong className="text-red-600">Time:</strong> 10:00 AM
              </p>
              <p>
                <strong className="text-red-600">Location:</strong> St. Paul’s Anglican Church
                <br /> 25 Marina Road, Lagos Island
              </p>
              <p>
                <strong className="text-red-600">Dress Code:</strong> White, Torquoise Blue, Gold
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
                <strong className="text-red-600">Time:</strong> 12:00 PM – 6:00 PM
              </p>
              <p>
                <strong className="text-red-600">Location:</strong> 10/12 Nnobi St, Surulere, Lagos
                <br />
                Whiteley Event Centre
                <br /> Lagos 101241
              </p>
              <p>
                <strong className="text-red-600">Dress Code:</strong> White, Torquoise Blue, Gold
              </p>
            </div>
          </div>

          {/* Traditional */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-teal-300">
            <div className="text-center mb-6">
              <h3 className="font-serif text-2xl text-black mb-2 font-bold">
                Traditional Wedding
              </h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong className="text-rose-600">Hotel:</strong> Love City Inn
              </p>
              <p>
                <strong className="text-rose-600">Address:</strong> No 14 Abuedefe Street off Siloku Road
                <br /> Benin City
              </p>
              <p>
                <strong className="text-red-600">Dress Code:</strong> White, Torquoise Blue, Gold
              </p>
            </div>
          </div>

          {/* Map */}
          <motion.div
            className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-teal-600 md:col-span-2 lg:col-span-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full h-72 md:h-[400px]">
              <iframe
                src="https://embed.waze.com/iframe?zoom=16&lat=6.499570&lon=3.347295&pin=1"
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-sm text-gray-600 text-center p-3 bg-gray-50 border-t">
              👉 You can type your address inside the map to get directions to the venue.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
