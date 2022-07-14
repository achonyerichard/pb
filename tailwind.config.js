/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        my_bg_image:
          "linear-gradient(to right bottom, rgba(0,0,0,0),rgba(0,0,0,1)), url('../assets/images/hero.png')",
        body_bg:
          "linear-gradient(to right bottom, rgba(0,0,0,0.9),rgba(0,0,0,1))",
      },
    },
    colors: {
      primary: "#ffffff",
      secondary: "#B9384C",
      active: "#109CF1",
      hover: "#BDCE45",
      footer: "#002020",
    },
  },
  plugins: [],
};