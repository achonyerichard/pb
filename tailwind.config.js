/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        nav: "linear-gradient(to right bottom, rgba(0,0,0,0),rgba(0,0,0,0.4)), url('../assets/images/hero.png')",
        my_bg_image:
          "linear-gradient(to right bottom, rgba(0,0,0,0.2),rgba(0,0,0,1)), url('../assets/images/hero.png')",
        body_bg:
          "linear-gradient(to right bottom, rgba(0,0,0,0.9),rgba(0,0,0,1))",
        layout: "url('../assets/images/layout.png')",
        footer_bg: "linear-gradient(to right bottom, #C41731,#BA3448)",
      },
    },
    colors: {
      primary: "#ffffff",
      secondary: "#B9384C",
      active: "#109CF1",
      hover: "#BDCE45",
      footer: "#002020",
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', ],
      'serif': ['ui-serif', 'Georgia', ],
      'mono': ['ui-monospace', 'SFMono-Regular', ],
      'display': ['Oswald', ],
      'body': ['"Open Sans"', ],
    }

  },
  plugins: [require("tw-elements/dist/plugin")],
};
