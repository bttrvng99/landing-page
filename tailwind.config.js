/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryRed: "rgb(var(--color-primary-red))",
        backgroundBlack: "rgb(var(--color-background-black))",
        buttonGray: "rgb(#D9D9D9)"
      },
    },
  },
  plugins: [],
};
