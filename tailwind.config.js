/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-color1": "#ff7e67",
        "custom-color2": "#fad02e",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to bottom, #FAFAFA, #C44404)",
      },
      keyframes: {
        colorChange: {
          "0%": { backgroundColor: "#ffffff" },
          "100%": { backgroundColor: "#002338" }, // Example ending color: green
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        colorChange: "colorChange 2s forwards", // Customize duration as needed
        fadeIn: "fadeIn 2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
