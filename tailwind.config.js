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
      backgroundImage: {
        "half-half": "linear-gradient(to right, #EEEEEE 50%, #33D4F7 50%)",
      },
    },
  },
  plugins: [],
};
