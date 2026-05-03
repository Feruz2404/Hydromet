/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#07203A",
        deep: "#0B3560",
        primary: "#0E5FA3",
        sky: "#3AAFDF",
        ice: "#C8E8F5",
        mist: "#F0F7FC",
        ink: "#071828",
        muted: "#4A6580",
        border: "#D0E4F0"
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "Noto Sans", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"]
      },
      boxShadow: {
        soft: "0 16px 40px rgba(11,53,96,0.12)"
      }
    }
  },
  plugins: [],
}
