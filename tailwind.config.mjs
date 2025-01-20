/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        small: "5p 5px 10px 10px",
      },
      colors: {
        blue: "#0a0f24",
        gray: "#1c1f2e",
        pink: "#ff3d81",
        green: "#4affd7",
        purple: "#9b59ff",
        lightgray: "#d1d1d1",
        white: "#ffffff",
      },
      fontFamily: {
        primary: ["Josefin Sans", "sans-serif"],
        secondary: ["bebas neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
