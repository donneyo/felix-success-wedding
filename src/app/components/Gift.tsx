"use client";

import { useState } from "react";
import toast from "react-hot-toast";

type Gift = {
  id: number;
  category: string;
  name: string;
  price?: number;
  tagColor: string;
  border: string;
  emoji: string;
  image?: string;
};

export default function GiftRegistry() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", amount: "" });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [showCashModal, setShowCashModal] = useState(false);

  const handleNotify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.amount) {
      toast.error("Please fill in your name, email and amount");
      return;
    }

    setLoading(true); // start loading

    try {
      const res = await fetch("/api/pledges", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          giftName: "Cash Gift",
          donorName: formData.name,
          donorEmail: formData.email,
          amount: formData.amount,
          method: "cash",
          message: "",
        }),
      });

      if (!res.ok) throw new Error("Failed to notify couple");

      setSuccessMsg(
        `Thank you ${formData.name}! 🎉 We’ve received your cash gift pledge of ₦${formData.amount}.`
      );
      setTimeout(() => setSuccessMsg(""), 7000);

      setFormData({ name: "", email: "", amount: "" });
      setShowCashModal(false);
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false); // stop loading
    }
  };


  const gifts: Gift[] = [
    { id: 1, category: "kitchen", name: "Professional Cookware Set", price: 120000, tagColor: "bg-gold", border: "border-gold", emoji: "🍳", image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756902847/cookware2_wwhz8e.jpg" },
    { id: 2, category: "kitchen", name: "Premium Microwave oven", price: 40000, tagColor: "bg-navy", border: "border-navy", emoji: "☕", image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756905108/microwave_cxncoc.jpg" },
    { id: 3, category: "kitchen", name: "Elegant Dinnerware Set", price: 49000, tagColor: "bg-crimson", border: "border-crimson", emoji: "🍽️", image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756905572/dinner_wares_mwfjce.jpg" },
    { id: 4, category: "home", name: "Hisense 1.5HP Inverter air conditioner.", price: 472499, tagColor: "bg-gold", border: "border-gold", emoji: "🕯️", image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756905901/Ac_air_conditioner_ntjsor.jpg" },
    { id: 5, category: "home", name: "Inverter and solar panel", price: 600000, tagColor: "bg-navy", border: "border-navy", emoji: "🖼️", image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756906276/inverter_dyttf1.jpg" },
    { id: 6, category: "home", name: "Smart TV 50inches", price: 316999, tagColor: "bg-crimson", border: "border-crimson", emoji: "🪴", image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756906562/tv_blj4ny.jpg" },
    { id: 7, category: "bedroom", name: "Luxury Bedding Set", price: 350000, tagColor: "bg-gold", border: "border-gold", emoji: "🛏️", image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756907334/bed_zxefwr.jpg" },
    { id: 8, category: "bedroom", name: "Steel Wardrobe,Cabinet & Storage With Inner Safe", price: 245000, tagColor: "bg-navy", border: "border-navy", emoji: "🛁", image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756907539/wardrobe_nmo6nv.jpg" },
    { id: 9, category: "experience", name: "Honeymoon Fund", price: 7000000, tagColor: "bg-crimson", border: "border-crimson", emoji: "✈️", image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756907857/bahamas_rhdwwn.jpg" },
    { id: 10, category: "experience", name: "Fine Dining Experience", price: 250000, tagColor: "bg-gold", border: "border-gold", emoji: "🍽️", image: "https://res.cloudinary.com/dfevwox5z/image/upload/v1756907938/dinner_fc4wur.jpg" },
  ];

  const filteredGifts =
    filter === "all" ? gifts : gifts.filter((g) => g.category === filter);

  const handleConfirmGift = async () => {
    if (!formData.name || !formData.email) {
      alert("Please enter your name and email before confirming.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/pledges", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          giftId: selectedGift?.id,
          giftName: selectedGift?.name,
          amount: selectedGift?.price ?? "Any Amount",
          donorName: formData.name,
          donorEmail: formData.email,
          method: "bank-transfer",
        }),
      });

      if (!res.ok) throw new Error("Failed to save pledge");

      setSuccessMsg(
        `Thank you ${formData.name}! 🎉 We’ve received your pledge for ${selectedGift?.name}.`
      );
      setTimeout(() => setSuccessMsg(""), 7000);

      setFormData({ name: "", email: "", amount: "" });
      setSelectedGift(null);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="gifts" className="py-20 bg-gradient-to-br from-blue-1500 to-white-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl text-center text-teal mb-8 font-bold">
          Gift Registry
        </h2>
        <p className="text-center text-navy mb-16 max-w-2xl mx-auto">
          Your presence at our wedding is the greatest gift of all! However, if
          you'd like to help us start our new life together, here are some items
          we'd love to have in our home.
        </p>

        {/* Registry Categories */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {["all", "kitchen", "home", "bedroom", "experience", "cash"].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                if (cat === "cash") {
                  setShowCashModal(true);
                } else {
                  setFilter(cat);
                }
              }}
              className={`px-6 py-2 rounded-full transition-colors font-medium ${
                filter === cat
                  ? "bg-rose-500 text-white"
                  : "bg-white text-black border-2 border-navy hover:bg-navy hover:text-white"
              }`}
            >
              {cat === "all" && "All Items"}
              {cat === "kitchen" && "🍳 Kitchen"}
              {cat === "home" && "🏠 Home & Living"}
              {cat === "bedroom" && "🛏️ Bedroom"}
              {cat === "experience" && "✈️ Experiences"}
              {cat === "cash" && "💳 Cash Gift"}
            </button>
          ))}
        </div>

        {/* Gift Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGifts.map((gift) => (
            <div key={gift.id} className={`gift-item ${gift.category}`}>
              <div
                className={`bg-white rounded-2xl overflow-hidden shadow-xl border-2 ${gift.border}`}
              >
                {/* Image / Placeholder */}
                <div className="h-48 bg-gray-200 flex items-center justify-center relative">
                  {gift.image ? (
                    <img
                      src={gift.image}
                      alt={gift.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="text-center text-gray-500">
                      <div className="text-4xl mb-2">{gift.emoji}</div>
                      <p className="text-sm font-medium">Replace with photo</p>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h4 className="font-serif text-lg text-black mb-2 font-bold">
                    {gift.name}
                  </h4>
                  <p className="text-black text-sm mb-4">
                    Special gift for our new journey
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-black font-bold text-lg">
                      {gift.price ? `₦${gift.price}` : "Any Amount"}
                    </span>

                    <span
                      className={`text-xs text-white ${gift.tagColor} px-3 py-1 rounded-full font-medium`}
                    >
                      {gift.category}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedGift(gift)}
                    className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition-colors font-medium"
                  >
                    Select This Gift 🎁
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for gift confirmation */}
        {selectedGift && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-96 text-center relative">
              <button
                onClick={() => setSelectedGift(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              >
                ✖
              </button>

              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                I pledge to gift: {selectedGift.name}
              </h3>
              <p className="text-gray-600 mb-4">
                Cash Equivalent:{" "}
                <span className="font-semibold">
                  {selectedGift.price ? `₦${selectedGift.price}` : "Any Amount"}
                </span>
              </p>

              {/* Pledge form */}
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full border p-2 text-black rounded-lg mb-3"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full border p-2 text-black rounded-lg mb-6"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              {/* OR Divider */}
              <div className="flex items-center justify-center my-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="px-4 text-gray-600 font-bold text-lg">OR</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              {/* Bank Transfer Details */}
              <div className="bg-gray-100 rounded-lg p-4 text-left mb-6">
                <p className="font-semibold text-gray-700">Bank Transfer Details</p>
                <p className="font-semibold text-gray-700">Bank: Fcmb</p>
                <p className="font-semibold text-gray-700">
                  Account Number: 5478830019
                </p>
                <p className="font-semibold text-gray-700">
                  Account Name: Felix Eshenake Tega
                </p>
              </div>

              <button
                onClick={handleConfirmGift}
                disabled={loading}
                className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 mb-3"
              >
                {loading ? "Submitting..." : "Confirm Gift 🎁"}
              </button>

              <button
                onClick={() => setSelectedGift(null)}
                className="w-full bg-gray-300 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Cash Gift Modal */}
        {showCashModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-2xl shadow-lg w-96 p-6 relative">
              <button
                onClick={() => setShowCashModal(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
              >
                &times;
              </button>

              <h2 className="text-lg font-bold text-gray-800 mb-4">
                Send Cash Gift To The Account
              </h2>

              {/* Bank Details */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-700 text-sm mb-4">
                <p>
                  <strong>Bank:</strong> Fcmb
                </p>
                <p>
                  <strong>Account Name:</strong> Felix Eshenake Tega
                </p>
                <p>
                  <strong>Account Number:</strong> 5478830019
                </p>
              </div>

              <form onSubmit={handleNotify} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 bg-white"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 bg-white"
                />
                <input
                  type="number"
                  placeholder="Amount (₦)"
                  value={formData.amount}
                  onChange={(e) =>
                    setFormData({ ...formData, amount: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 bg-white"
                />

               <button
                 type="submit"
                 disabled={loading}
                 className={`w-full rounded-lg py-2 font-medium transition-colors ${
                   loading
                     ? "bg-rose-400 cursor-not-allowed"
                     : "bg-rose-500 text-white hover:bg-rose-600"
                 }`}
               >
                 {loading ? "Submitting..." : "Notify Couple"}
               </button>

              </form>
            </div>
          </div>
        )}

        {successMsg && (
          <div className="fixed bottom-5 right-5 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-lg">
            {successMsg}
          </div>
        )}
      </div>
    </section>
  );
}
