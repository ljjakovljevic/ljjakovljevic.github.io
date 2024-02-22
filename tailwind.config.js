module.exports = {
  content: ['*.html'],
  corePlugins: {
    preflight: false
  },
  prefix: 'tw-',
  important: true,
  theme: {
    screens: {
      'xs': {'max': '480px'},
      // => @media (min-width: 0px and max-width: 480px) { ... }

      'sm': {'min': '481px', 'max': '736px'},
      // => @media (min-width: 481px and max-width: 736px) { ... }

      'md': {'min': '737px', 'max': '980px'},
      // => @media (min-width: 737px and max-width: 980px) { ... }

      'lg': {'min': '981px', 'max': '1280px'},
      // => @media (min-width: 981px and max-width: 1280px) { ... }

      'xl': {'min': '1281px'},
      // => @media (min-width: 1281px and max-width: 1800px) { ... }
    },
    extend: {
      backgroundImage: {
        'hero': "url('/assets/image/code.jpg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
