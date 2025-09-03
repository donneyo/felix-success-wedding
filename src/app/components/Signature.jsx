// components/Signature.jsx
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
    subsets: ["latin"],
    weight: "400",
});

export default function Signature() {
    return (
        <div className="relative inline-block text-center">
            <h1
                className={`text-5xl md:text-6xl text-white ${greatVibes.className}`}
            >
                Felix <span className="text-purple-400">&</span> Success
            </h1>

            {/* underline curve */}
            <svg
                className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-[240px] h-[35px] text-purple-400/80"
                viewBox="0 0 300 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
            >
                <path d="M5 30 C 80 10, 220 10, 295 30" />
            </svg>
        </div>
    );
}
