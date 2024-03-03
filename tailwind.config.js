/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kok: "#274C5B",
        yashil: "#7EB693",
        sariq: "#EFD372",
        kulrang: "#D4D4D4",
        oq: "#F9F8F8",
        ochyashil: "#EFF6F1",
        toqkul: "#525C60",
      },
      container: {
        center: true,
        padding: "0 20px",
        width: "100%",
      },
      screens: {
        md: "768px",
        lg: "992px",
      }
    },
  },
  plugins: [],
}