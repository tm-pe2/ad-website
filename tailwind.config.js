module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {

      colors: {
        primary: '#5c6ac4',
        secondary: '#ecc94b',
        neutral: '#a3a3a3',

        white: '#FFFFFF',
        purple: '#3F3CBB',
        midnight: '#121063',
        metal: '#565584',
        'tahiti-blue': '#3AB7BF',
        silver: '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda-green': '#78dcca'
      },

      spacing: {
        'tiny-s' : '0.25rem',
        'tiny-m' : '0.5rem',
        'tiny-l' : '0.75rem',
        'small-s': '1rem',
        'small-m': '1.5rem',
        'small-l': '2rem',
        'medium-s': '3rem',
        'medium-m': '4rem',
        'medium-l': '5rem',
        'large-s': '6rem',
        'large-m': '7rem',
        'large-l': '8rem',
        'huge-s': '10rem',
        'huge-m': '12.5rem',
        'huge-l': '15rem',
        'huge-xl': '20rem',
        'huge-xxl': '24rem'

      },

      boxShadow: {
        small: '0px 2px 4px 0px rgba(11, 10, 55, 0.15)',
        medium: '0px 8px 20px 0px rgba(18, 16, 99, 0.06)'
      },

      fontSize: {
        small: ['14px', '20px'],
        standard: ['16px', '24px'],
        big: ['20px', '28px'],
      }

    },
  },
  plugins: [],
}
