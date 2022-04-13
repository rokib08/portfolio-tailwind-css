module.exports = {
  content: ['index.html', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#3b82f6',
      },
      screens:{
        '2xl': '1120px',
      },
    },
  },
  plugins: [
    require('./node_modules/tw-elements/dist/plugin')
  ],
}
