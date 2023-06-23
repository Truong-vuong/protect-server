module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    // './nuxt.config.{js,ts}',
  ],
  corePlugins: {
    aspectRatio: false,
  },
  theme: {
    screens: {
      xxs: '320px',
      xsm: '360px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      xmd: '880px',
      lg: '1024px',
      xlg: '1151px',
      main: '1170px', // 1170px is area main size
      sxl: '1200px',
      xl: '1280px',
      mxl: '1400px',
      '2xl': '1536px', // can i change to 1440px follow design system?
      '3xl': '1600px',
    },
    extend: {
      colors: {
        //main
        'main': '#E1372D',
        'main-button': '#FF6E31',
        'background': '#D0D4E3',
        'background-10': '#BCC5D2',
        // primary CTA
        'primary-cta-5': '#FFFAF5',
        'primary-cta-10': '#FEF4EA',
        'primary-cta-20': '#FDEBD7',
        'primary-cta-40': '#FCD8B0',
        'primary-cta-60': '#FBC58A',
        'primary-cta-80': '#FAB263',
        'primary-cta-100': '#F99F3D',
        // neutrals
        'gray-lighter': '#F4F4F4',
        'gray-light': '#D3D6D7',
        'gray-base': '#A9AEB1',
        'gray-dark': '#7E868A',
        'gray-darker': '#545E64',
        'gray-darkest': '#2A363E',
        // secondary nav
        'secondary-nav-5': '#F2F9FB',
        'secondary-nav-10': '#E5F4F6',
        'secondary-nav-20': '#CCE9EE',
        'secondary-nav-40': '#99D3DC',
        'secondary-nav-60': '#66BDCB',
        'secondary-nav-80': '#33A7B9',
        'secondary-nav-100': '#0091A8',
        // secondary accents
        'secondary-a-5': '#FFF7F4',
        'secondary-a-10': '#FFEFE9',
        'secondary-a-20': '#FFE0D5',
        'secondary-a-40': '#FEC1AB',
        'secondary-a-60': '#FDA281',
        'secondary-a-80': '#FC8357',
        'secondary-a-100': '#FC642D',
        // Alerts
        'success-5': '#F4FDF9',
        'success-10': '#EAFBF3',
        'success-20': '#D6F6E7',
        'success-40': '#ADEDCF',
        'success-60': '#84E3B7',
        'success-80': '#5BDA9F',
        'success-100': '#33D188',
        // warning
        'warning-5': '#F9F7F2',
        'warning-10': '#F3EEE6',
        'warning-20': '#E8DECF',
        'warning-40': '#D2BE9F',
        'warning-60': '#BB9D6F',
        'warning-80': '#A47D3F',
        'warning-100': '#8E5D0F',
        // error
        'error-5': '#FDF5F5',
        'error-10': '#F9EAEA',
        'error-20': '#F4D6D6',
        'error-40': '#EAAEAE',
        'error-60': '#DF8787',
        'error-80': '#D55F5F',
        'error-100': '#CB3838',
        // black & white
        black: '#000000',
        white: '#FFFFFF',
        transparent: 'transparent',
      },
      fontFamily: {
        roboto: ['Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        'roboto-bold': ['Roboto-Bold'],
        'roboto-single': ['Roboto'],
      },
      boxShadow: {
        base: '0px 2px 3px rgba(0, 0, 0, 0.16)',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        "pulse-bg": {
          '0%': { background: '#ddd' },
          '50%': { background: '#d0d0d0' },
          '100%': { background: '#ddd' },
        }
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
        "pulse-bg": 'pulse-bg 1s infinite',
      },
    },
  },
  corePlugins: {
    backdropOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    ringOpacity: false,
    textOpacity: false
  },
  //plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/line-clamp'), require('@tailwindcss/forms')],
};
