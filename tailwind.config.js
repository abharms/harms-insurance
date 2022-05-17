module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#2563eb",

          "secondary": "#baf780",

          "accent": "#3eefa2",

          "neutral": "#212028",

          "base-100": "#F9FAFA",

          "info": "#2449F0",

          "success": "#19D7C4",

          "warning": "#BA9203",

          "error": "#EC7979",
        },
      },
    ],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
