/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "10rem",
      },
    },
    extend: {
      colors: {
        primary: "#FF0000",
        primaryHover: "#FF4B4B",
        primaryActive: "E10000",
        background: "#000000",
        button: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
