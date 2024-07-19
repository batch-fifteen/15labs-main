/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        mx: "auto",
        center: true,
      },
      fontFamily: {
        serif: ['"Roboto Serif"', "serif"],
      },
    },
  },
  plugins: [],
};
