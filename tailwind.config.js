module.exports = {
  mode: 'jit',
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      green: '#8BAC3E',
      receipt: '#40A2B1',
      'cupcake-color': '#F0FEEB',
      'doughnut-color': '#F3F7D9',
      'kebab-color': '#EAEEFA',
      'pizza-color': '#E6F3F5',
      'salmon-color': '#F9EEF3',
      'footer-pattern': '#F9FFF7',
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'category-pattern':
          "url('@/static/assets/background/category-pattern.png')",
      },
      backgroundSize: {
        'category-pattern': '100% 100%',
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    },
  },
}
