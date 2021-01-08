const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mulish", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "wine-red": "#EB5757",
      },
      backgroundImage: (theme) => ({
        "hero-image": "url('/src/images/windbnb-home-background.webp')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
