/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "script.js"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      height: {
        128: "32rem",
      },
      colors: {
        primary: "#ef4444",
        secondary: "#64748b",
        dark: "#111827",
      },
    },
  },
  plugins: [],
};
