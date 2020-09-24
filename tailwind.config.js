module.exports = {
  purge: [],
  target: 'relaxed',
  prefix: '',
  important: true,
  separator: ':',
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#829dff',
          200: '#6d8cff',
          300: '#587cff',
          400: '#436bff',
          500: '#2e5bff',
          600: '#2952e6',
          700: '#2549cc',
          800: '#2040b3',
          900: '#1c3799',
        },
      },
    },
  },
  variants: {
    opacity: ['disabled'],
    cursor: ['disabled'],
  },
  corePlugins: {},
  plugins: [],
};
