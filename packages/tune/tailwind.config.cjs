/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.vue"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("prettier-plugin-tailwindcss"),
    // ...
  ],
};
