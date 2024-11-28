/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(234, 30, 13, 1)",
        secondary: " rgba(245, 249, 254, 1)",
      },
    },
  },
  plugins: [],
};
