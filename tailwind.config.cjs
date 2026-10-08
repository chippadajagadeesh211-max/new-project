// tailwind.config.cjs
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#145A8D",
        secondary: "#159A9C",
        accent: "#4E9F6E",
        warning: "#D99A2B",
        critical: "#D9534F",
        background: "#F6F8F7",
        surface: "#FFFFFF",
        textPrimary: "#24323D",
        textSecondary: "#64727D",
        border: "#DCE5E8"
      }
    }
  },
  plugins: []
};
