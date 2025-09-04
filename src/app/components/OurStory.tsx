"use client";

import { motion } from "framer-motion";

export default function OurStory() {
    return (
        <section
            id="story"
            className="py-20 bg-gradient-to-br from-blue-1500 to-white-100"
        >
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="font-serif text-4xl md:text-5xl text-center text-white-400 mb-16 font-bold">
                    Our Love Story
                </h2>

                {/* First Row */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-rose-600">
                            <div className="h-100 bg-gray-200 flex items-center justify-center relative">
                                <img
                                     src="https://res.cloudinary.com/dfevwox5z/image/upload/v1756231868/hw3_vq0lws.jpg"
                                     alt="Our first photo together"
                                     className="w-full h-full object-cover"
                                   />
                                <div className="absolute bottom-4 left-4 bg-rose-600/90 rounded-lg px-3 py-2">
                                    <p className="text-xs text-wine-800 font-medium">
                                        How We Met - 2020
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="font-serif text-2xl text-teal-600 mb-4 font-bold">
                            The Beginning
                        </h3>
                        <p className="text-white-700 leading-relaxed mb-6">
                            Felix and Success first crossed paths at a mutual friend's
                            gathering in 2020. What started as a simple conversation about
                            their shared love for adventure and good coffee quickly blossomed
                            into something beautiful.
                        </p>
                        <p className="text-white-100 leading-relaxed">
                            From late-night conversations to weekend adventures, they
                            discovered they were perfect complements to each other - Felix's
                            calm nature balancing Success's vibrant energy, creating a love
                            story that feels like destiny.
                        </p>
                    </motion.div>
                </div>

                {/* Second Row */}
                <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
                    <motion.div
                        className="order-2 md:order-1"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="font-serif text-2xl text-teal-600 mb-4 font-bold">
                            The Proposal
                        </h3>
                        <p className="text-white-700 leading-relaxed mb-6">
                            On a beautiful sunset evening at their favorite hiking spot, Felix
                            got down on one knee and asked Success to be his forever adventure
                            partner. With tears of joy and an enthusiastic "Yes!", they began
                            planning their next chapter together.
                        </p>
                        <p className="text-white-700 leading-relaxed">
                            Now, surrounded by family and friends, they're ready to say "I do"
                            and start their greatest adventure yet - marriage!
                        </p>
                    </motion.div>

                    <motion.div
                        className="order-1 md:order-2"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-rose-600">
                            <div className="h-100 bg-gray-200 flex items-center justify-center relative">
                               <img src="https://res.cloudinary.com/dfevwox5z/image/upload/v1756231868/will_you_marry_me_1_va6vj6.jpg"
                                  alt="Our first photo together"
                                   className="w-full h-full object-cover"/>
                                <div className="absolute bottom-4 left-4 bg-rose-600/90 rounded-lg px-3 py-2">
                                    <p className="text-xs text-wine-800 font-medium">
                                        The Proposal - 2024
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>



{/* Love Story Interview Q&A Section */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="mt-10"
>
  <div className="bg-white rounded-2xl shadow-xl border-2 bg-gradient-to-br from-white to-teal-100 p-6 md:p-10">
    <h3 className="text-3xl md:text-4xl font-bold text-teal-600 mb-6 text-center">
      Couple's Q&A Session 
    </h3>

    <ol className="list-decimal pl-6 space-y-6 text-gray-700">
      {/* Q1 */}
      <li>
        <details className="group">
          <summary className="cursor-pointer text-lg font-normal text-wine-700 group-hover:underline">
            How did you first meet?
          </summary>
          <p className="mt-2 text-gray-700">
            We met in the most unexpected way – at a friend’s gathering. What
            started as small talk turned into hours of conversation, and we’ve
            been inseparable ever since.
          </p>
        </details>
      </li>

      {/* Q2 */}
      <li>
        <details className="group">
          <summary className="cursor-pointer text-lg font-normal text-wine-700 group-hover:underline">
            Who made the first move?
          </summary>
          <p className="mt-2 text-gray-700">
            Believe it or not, it was actually <strong>him</strong> who made the
            first move, but she always says she secretly wanted it that way 😉
          </p>
        </details>
      </li>

      {/* Q3 */}
      <li>
        <details className="group">
          <summary className="cursor-pointer text-lg font-normal text-wine-700 group-hover:underline">
            What was your first date like?
          </summary>
          <p className="mt-2 text-gray-700">
            Our first date was simple yet magical. A walk, some laughter, and
            endless conversations that made us realize this was something special.
          </p>
        </details>
      </li>

      {/* Q4 */}
      <li>
        <details className="group">
          <summary className="cursor-pointer text-lg font-normal text-wine-700 group-hover:underline">
            When did you know it was love?
          </summary>
          <p className="mt-2 text-gray-700">
            We both knew at different times, but the moment our hearts aligned,
            there was no looking back. It felt like home.
          </p>
        </details>
      </li>
    </ol>
  </div>
</motion.div>
 </div>
 </section>
  );
}
