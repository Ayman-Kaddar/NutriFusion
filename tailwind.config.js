/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      fontFamily: {
        horizon: ['"Horizon"', "sans-serif"],
        horizon_outlined: ['"Horizon_outlined"', "sans-serif"],
        notosans: ['"Noto Sans"', "sans-serif"],
      },
      colors: {
        primary: {
          500: "#fefcf4",
        },
      },
    },
  },
  plugins: [],
};

