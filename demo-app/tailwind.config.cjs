/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    fontFamily: {
      sans: [
        "Calibre, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      ],
      mono: ["monospace"],
      space: ["SpaceMono"],
    },
    fontSize: {
      "2xl": ["36px", "50px"],
      xl: ["28px", "44px"],
      lg: ["24px", "32px"],
      md: ["20px", "28px"],
      base: ["18px", "24px"],
      sm: ["16px"],
      xs: ["14px"],
    },
    boxShadow: {
      lg: "2px 4px 9px var(--shadow-color)",
    },
  },
  plugins: [],
};
