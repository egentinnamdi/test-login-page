/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(234, 30, 13, 1)",
        secondary: "rgba(234, 239, 245, 1)",
        textColor: "rgba(124, 139, 160, 1)",
        textColorSecond: "rgba(52, 97, 253, 1)",
        textBlack: "rgba(59, 64, 84, 1)",
        inputColor: "rgba(245, 249, 254, 1)",
      },
    },
  },
  plugins: [],
};
