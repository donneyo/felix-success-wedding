/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                  gold: "#FFD700",      // metallic gold
                        wine: "#722F37",
            },
            fontFamily: {
                sans: "var(--font-sans)",
                mono: "var(--font-mono)",
            },
        },
    },
    plugins: [],
};
