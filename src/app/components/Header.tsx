"use client";
    import { useState, useEffect } from "react";
    import { Tangerine } from "next/font/google";

    const tangerine = Tangerine({
      subsets: ["latin"],
      weight: "400",
    });

    export default function Header() {
      const [open, setOpen] = useState(false);

      // Lock body scroll when menu is open
      useEffect(() => {
        if (open) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
      }, [open]);

      const menuItems = [
        { href: "#", label: "Home" },
        { href: "#story", label: "Our Story" },
        { href: "#gallery", label: "Gallery" },
        { href: "#details", label: "Wedding party" },
        { href: "#location", label: "Location" },
        { href: "#gifts", label: "Gifts" },
        { href: "#rsvp", label: "RSVP" },
      ];

      return (
        <nav className="fixed top-0 w-full bg-transparent z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end items-center">
            {/* Hamburger Menu */}
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-800 p-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              {open ? (
                <span className="text-4xl font-extrabold transition-all duration-600 ease-in-out transform scale-110">
                  ✖
                </span>
              ) : (
                <div className="flex flex-col space-y-2 transition-all duration-300 ease-in-out">
                  <span className="block w-10 h-1 bg-gray-800 rounded"></span>
                  <span className="block w-8 h-1 bg-gray-800 rounded"></span>
                  <span className="block w-6 h-1 bg-gray-800 rounded"></span>
                </div>
              )}
            </button>
          </div>

          {/* Sidebar Menu */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-zinc-900/90 to-zinc-800/60 backdrop-blur-lg border-r border-zinc-700 shadow-2xl
            transform transition-transform duration-600 ease-in-out z-40
              ${open ? "translate-x-0" : "-translate-x-full"}`}
          >
            {/* Title Section */}
            <div className="px-6 pt-12 text-center">
              <h1 className="text-1xl md:text-1xl lg:text-1xl font-bold tracking-wider text-gray-200 whitespace-nowrap">
                SUCCESS <span className="animate-pulse text-pink-500">❤️</span> FELIX
              </h1>

            </div>

            {/* Menu Items */}
            <div className="flex flex-col space-y-6 px-6 mt-16 text-gray-200 font-medium tracking-wide">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg rounded-lg px-4 py-2 transition-all duration-300
                             hover:bg-pink-500/20 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]
                             hover:text-pink-500"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Overlay when menu is open */}
          {open && (
            <div
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 z-30"
            />
          )}
        </nav>
      );
    }



