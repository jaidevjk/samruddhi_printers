module.exports = {
  darkMode: 'class', // or 'media'
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // tailwind.config.js
    extend: {
      animation: {
        typing: 'typing 4s steps(55, end) 1',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        },
      },
      animation: {
        typing: 'typing 4s steps(65, end) 1 both, blink 1s step-end infinite',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        },
      },

    }

  },
  plugins: [],
};
