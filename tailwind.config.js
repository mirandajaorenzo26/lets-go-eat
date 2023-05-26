/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#E9E6E6",
        black: "#1C1C1C",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
