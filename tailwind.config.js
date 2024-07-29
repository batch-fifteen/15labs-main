/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
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
});
