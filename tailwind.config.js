module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      grayBlue: 'hsl(237, 18%, 59%)',
      softRed: 'hsl(345, 95%, 68%)',
      white: 'hsl(0, 0%, 100%)',
      darkBlue: 'hsl(236, 21%, 26%)',
      deepDarkBlue: 'hsl(235, 16%, 14%)',
      black: 'hsl(234, 17%, 12%)',
      icon: '#8385A9',
    },
    extend: {
      animation: {
        flip: 'flip 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        flip: {
          from: { transform: 'rotateX(0deg)', transformOrigin: '50% bottom ' },
          to: { transform: 'rotateX(180deg)', transformOrigin: '50% bottom ' },
        },
      },
    },
    fontFamily: {
      redhat: ['Red Hat Text', 'sans-serif'],
    },
  },
  plugins: [],
};
