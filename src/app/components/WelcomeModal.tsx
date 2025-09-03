"use client";
import { useState, useEffect } from "react";

export default function WelcomeModal() {
  const [showReservation, setShowReservation] = useState(false);
  const [showGift, setShowGift] = useState(false);

  useEffect(() => {
    // Show reservation modal immediately when page loads
    setShowReservation(true);
  }, []);

  const handleCloseReservation = () => {
    setShowReservation(false);

    // Show gift modal after 30 seconds
    setTimeout(() => {
      setShowGift(true);
    }, 30000);
  };

  const handleRSVP = () => {
    const rsvpSection = document.querySelector("#rsvp");
    if (rsvpSection) {
      rsvpSection.scrollIntoView({ behavior: "smooth" });
    }
    handleCloseReservation();
  };

 const handleGift = () => {
     const giftSection = document.querySelector("#gifts");
     if (giftSection) {
       giftSection.scrollIntoView({ behavior: "smooth" });
     }
     setShowGift(false);
   };

  return (
    <>
      {/* Reservation Modal */}
      {showReservation && (
       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
         <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-6 relative animate-fadeIn">
           <h2 className="text-gray-700 text-2xl font-bold mb-4 text-center">
             Message from the Couple
           </h2>
           <p className="text-gray-700 mb-6">
             We are so excited to have you! Please RSVP by{" "}
             <span className="font-semibold">20 Sept</span>. We'll be adding
             updates soon to our schedule, FAQS, registry, and photos.
           </p>
           <div className="flex justify-center gap-4">
             <button
               onClick={handleRSVP}
               className="px-6 py-2 bg-blue-900 text-white font-semibold rounded-lg hover:bg-pink-600 transition"
             >
               RSVP Now
             </button>
             <button
               onClick={handleCloseReservation}
               className="px-6 py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 transition"
             >
               Close
             </button>
           </div>
         </div>
       </div>

      )}

      {/* Gift Modal */}
      {showGift && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-6 relative animate-fadeIn">
            <h2 className="text-gray-700 text-2xl font-bold mb-4 text-center">
              Gift the Couple 🎁
            </h2>
            <p className="text-gray-700 mb-6">
               Your love is enough, but if you'd like to bless us with a gift,
                             we’d truly appreciate it 💖
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleGift}
                className="px-6 py-2 bg-blue-900 text-white font-semibold rounded-lg hover:bg-pink-600 transition"
              >
                Send a Gift
              </button>
              <button
                onClick={() => setShowGift(false)}
                className="px-6 py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}



