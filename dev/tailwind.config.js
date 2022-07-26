module.exports = {
  mode : 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark : "#2D2E35",
        white : "#FFFFFF"
      },
    },
    colors: {
      dark : "#2D2E35",
      white : "#FFFFFF",
      gray : "#808080",
    },
  },
  plugins: [],
}
