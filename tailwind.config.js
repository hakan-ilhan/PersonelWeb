/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      backgroundColor: {
        primary: "#171043",
        hakan: "#1A210B",
        dark: "#2A262B",
        grey: "#484148",
        irmaque: "#F4F4F4",
        projects: "#DDEEFE",
        card: "#525252",
        projects1: "#2D3235",
        projects2: "#495351 ",
        rightproject: "#D9F6F1",
      },
      colors: {
        span: "#AF0C48",
        basicInfo: "#EA2678",
        skillsText: "#D9D9D9",
        skillsTitle: "#0A0A14",
        irmaque: "#F4F4F4",
        skillsLight: "#777777",
        blue1: "#1769FF",
        linked: "#0077B5",
        lang: "#E92577",
      },
      spacing: {
        "38rem": "38rem",
        "34rem": "34rem",
      },
      letterSpacing: {
        5: "0.05em", // 5% değeri için özel sınıf
      },
      fontSize: {
        "2rem": "2rem",
        "2.5rem": "2.5rem",
        "1.3rem": "1.3rem",
      },
      height: {
        "43rem": "43rem",
      },
      lineHeight: {
        "4rem": "4rem",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      play: ["Playfair Display", "serif"],
    },
  },
  plugins: [],
};
