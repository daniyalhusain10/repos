// tailwind.config.js
module.exports = {
  content: ["./**/*.html"], // This tells Tailwind where to look for class names
  theme: {
    extend: {
      fontFamily: {
        mon: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

module.exports = {
    theme: {
      extend: {
        verticalAlign: {
          'middle': 'middle', // This might be incorrectly applied
        },
      },
    },
  };