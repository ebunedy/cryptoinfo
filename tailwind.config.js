module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "primary-1": "#FFFFFF",
      "primary-2": "#E0E0E0",
      "primary-3": "#3671E9",
      "dark-blue": "#0D0D2B",
      "light-blue": "#031264",
      "light-red": "#dc2626",
      "light-green": "#22c55e",
      "light-teal": "#cbd5e1",
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../public/images/illustration.png')",
        "hero-texture": "url('../public/images/illustration2.png')",
        "hero2-texture": "url('../public/images/illustration3.png')",
        "menu-icon": "url('../public/images/icon-menu.svg')",
        "close-icon": "url('../public/images/icon-close.svg')",
      },
    },
  },
  plugins: [],
};
