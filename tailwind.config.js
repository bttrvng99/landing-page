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
        primaryRed: "rgb(var(--color-primary-red))",
        backgroundBlack: "rgb(var(--color-background-black))",
        buttonGray: "rgb(#D9D9D9)",
      },
    },
  },
  plugins: [],
};
