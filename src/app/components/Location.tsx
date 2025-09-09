"use client";

import { motion } from "framer-motion";

export default function Location() {
  return (
    <section
      id="location"
      className="py-20 bg-gradient-to-br from-blue-1500 to-white-100"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl text-center text-white-900 mb-12 font-bold">
          Location
        </h2>

        <motion.div
          className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-teal-600"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full h-80 md:h-[500px]">
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
      </div>
    </section>
  );
}
