"use client";

import { motion } from "framer-motion";

export default function Gallery() {
    return (
        <section
            id="gallery"
            className="py-20 bg-gradient-to-brfrom-blue-1500 to-white-100"
        >
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="font-serif text-4xl md:text-5xl text-center text-white-800 mb-16 font-bold">
                    Our Journey Together
                </h2>


                {/* Grid of small photos */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
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
                      label: "Family Dinner",
                      img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756231868/hw5_xkm1ag.jpg",
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


                {/* Featured Photos */}
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      label: "Engagement Session",
                      img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756162657/fs6_yvncit.jpg",
                    },
                    {
                      label: "Recent Photo",
                      img: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756231869/bc3_skfidp.jpg",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.2 }}
                    >
                      <div className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-rose-600">
                        <div className="h-64 bg-gray-200 flex items-center justify-center relative">
                          <div className="text-center text-gray-500 w-full h-full">
                            <img
                              src={item.img}
                              alt={item.label}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute bottom-4 left-4 bg-rose-600/90 rounded-lg px-3 py-2">
                            <p className="text-xs text-white font-medium">{item.label}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

            </div>
        </section>
    );
}
