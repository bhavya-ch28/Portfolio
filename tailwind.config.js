// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        gradientShift: "gradientShift 15s ease infinite",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
    },
  },
  plugins: [],
}
