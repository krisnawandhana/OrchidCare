module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f8f9ff",
          900: "#381a1a",
          "50_01": "#fafafa",
          "50_02": "#f7f8fa",
          "900_01": "#111827",
        },
        black: { 900: "#000000", "900_2d": "#0000002d" },
        blue_gray: {
          50: "#edeff1",
          100: "#cbd5e0",
          200: "#a0aec0",
          300: "#8f95b2",
          400: "#718096",
          900: "#2d2d2d",
        },
        white: { A700_01: "#ffffff", A700: "#fef9ff" },
        amber: { 100: "#fffbb1" },
        deep_purple: { 50: "#eceaf9", 400: "#6b5cd2" },
        green: { A100: "#b5ffb3", A700: "#16be27" },
        deep_orange: { 100: "#ffb6b1" },
        colors: "#6b5cd2ff",
        indigo: { 300: "#7c6fd7" },
        lime: { 700: "#b7a821", "700_01": "#b8a921" },
        red: { 900: "#b72121" },
      },
      fontFamily: {
        creteround: "Crete Round",
        generalsans: "General Sans",
        inter: "Inter",
        poppins: "Poppins",
      },
      boxShadow: { bs: "0px 3.3px  5px 0px #0000002d" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
