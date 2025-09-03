"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const attending = formData.get("attendance") as string;
    const guests = formData.get("guests") as string;
    const dietary = formData.get("dietary") as string;
    const message = formData.get("message") as string;

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`,
          email,
          attending,
          guests,
          dietary,
          message,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit RSVP");

      toast.success("RSVP submitted successfully 🎉");
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="rsvp"
      className="py-20 bg-gradient-to-br from-blue-1500 to-white-100"
    >
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl text-center text-white-800 mb-8 font-bold">
          RSVP
        </h2>
        <p className="text-center text-white-700 mb-12">
          We can’t wait to celebrate with you! Please let us know if you’ll be
          joining us.
        </p>

        <div className="bg-white text-black rounded-2xl p-8 shadow-xl border-2 border-teal">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-black  mb-2 font-bold">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border-2 border-teal-100 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-black mb-2 font-medium">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border-2 border-teal-100 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-black mb-2 font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-teal-100 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-black mb-2 font-medium">
                  Will you be attending? *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="attendance" value="Yes" required />
                    <span className="ml-2 text-gray-800">
                      Yes, I’ll be there! 🎉
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="attendance" value="No" required />
                    <span className="ml-2 text-gray-800">
                      Sorry, I can’t make it 😢
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-black mb-2 font-medium">
                  Number of Guests
                </label>
                <select
                  name="guests"
                  className="w-full px-4 py-3 border-2 border-teal-100 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-colors text-gray-800"
                >
                  <option value="1">Just me</option>
                  <option value="2">2 people</option>
                  <option value="3">3 people</option>
                  <option value="4">4 people</option>
                </select>
              </div>

              <div>
                <label className="block text-black mb-2 font-medium">
                  Dietary Restrictions
                </label>
                <textarea
                  name="dietary"
                  rows={3}
                  placeholder="Please let us know about any allergies or dietary needs..."
                  className="w-full px-4 py-3 border-2 border-teal-100 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-colors text-gray-800"
                />
              </div>

              <div>
                <label className="block text-black mb-2 font-medium">
                  Special Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Share your wishes, memories, or excitement for our big day..."
                  className="w-full px-4 py-3 border-2 border-teal-100 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-colors text-gray-800"
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-rose-500 text-white py-4 rounded-lg font-bold hover:opacity-90 transition-opacity text-lg"
                >
                  {loading ? "Sending..." : "Send RSVP 💕"}
                </button>
                <button
                  type="button"
                  className="px-6 py-4 bg-rose-600 text-white rounded-lg font-bold hover:bg-rose-700 transition-colors"
                >
                  💖
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="font-serif text-2xl text-gray-800 mb-2 font-bold">
                Thank You!
              </h3>
              <p className="text-gray-700">
                Your RSVP has been received. We can’t wait to celebrate with you!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
