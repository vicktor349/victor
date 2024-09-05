/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "bgColor": "#011627",
        "background": "#1E2D3D",
        "cardBackground": "#011221",
        "buttonBackground": "#1C2B3A"
      },
      colors: {
        "primary": "#607B96",
        "secondary": "#4D5BCE",
        "accent": "#43D9AD",
        "secondaryAccent": "#E99287",
        "secondaryText": "#5565E8"
      },
      borderColor: {
        "borderColor": "#1E2D3D",
        "borderPrimary": "#FEA55F"
      },
      screens: {
        "ssm": "360px",
        "sssm": "384px",
        "ssssm": "480px",
        "3xl": "1792px"
      }
    },
  },
  plugins: [],
};
