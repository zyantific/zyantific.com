/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    colors: {
      // Brand Colors
      primary: "#11E2FF",
      // System Colors
      red: "#EF4444",
      green: "#22C55E",
      blue: "#01D0FF",
      yellow: "#FFBA08",
      // Light-Mode Colors
      "lm-heading": "#131022",
      "lm-background": "#FBFBFB",
      "lm-card-outline": "#3E4265",
      "lm-header-text": "#3E4265",
      "lm-logo": "#3E4265",
      "lm-body": "#585C7B",
      "lm-faded": "#FFFFFF",
      // Dark-Mode Colors
      "dm-heading": "#FFFFFF",
      "dm-card-outline": "#FFFFFF",
      "dm-background": "#131723",
      "dm-header-text": "#E2E5F1",
      "dm-logo": "#FFFFFF",
      "dm-body": "#D4D7E5",
      "dm-faded": "#191E2C",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [],
  },
};
