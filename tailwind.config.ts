import type {Config} from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  theme: {
    screens: {
      xl: {max: '1780px'},
      sm: {max: '500px'},
    },
    fontFamily: {
      sans: ['var(--font-plus-jakarta-sans)', ...defaultTheme.fontFamily.sans],
    },
    colors: ({colors}) => ({
      background: '#100739',
      foreground: '#D3D3F4',

      white: '#FFFFFF',

      purple: {
        highlight: '#BEA0FF',
      },

      transparent: colors.transparent,
    }),
    extend: {},
  },
  plugins: [],
} satisfies Config
