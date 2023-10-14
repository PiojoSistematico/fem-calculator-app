/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBackground: "hsl(var(--main-background) / <alpha-value>)",
        toggleBackground: "hsl(var(--toggle-background) / <alpha-value>)",
        screenBackground: "hsl(var(--screen-background) / <alpha-value>)",
        keyBackground1: "hsl(var(--key-background-1) / <alpha-value>)",
        keyShadow1: "hsl(var(--key-shadow-1) / <alpha-value>)",
        keyBackground2: "hsl(var(--key-background-2) / <alpha-value>)",
        keyShadow2: "hsl(var(--key-shadow-2) / <alpha-value>)",
        keyBackground3: "hsl(var(--key-background-3) / <alpha-value>)",
        keyShadow3: "hsl(var(--key-shadow-3) / <alpha-value>)",
        text1: "hsl(var(--text-1) / <alpha-value>)",
        text2: "hsl(var(--text-2) / <alpha-value>)",
        text3: "hsl(var(--text-3) / <alpha-value>)",
      },
      fontFamily: {
        league: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
