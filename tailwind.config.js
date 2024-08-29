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
        "bgColor": "#011627"
      },
      colors: {
        "primary": "#607B96"
      },
      borderColor: {
        "borderColor": "#1E2D3D"
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
