import defaultTheme from 'tailwindcss/defaultTheme'
import { CustomThemeConfig } from 'tailwindcss/types/config'

const theme: Partial<
  CustomThemeConfig & {
    extend: Partial<CustomThemeConfig>
  }
> = {
  colors: {
    inherit: 'inherit',
    transparent: 'transparent',
    currentColor: 'currentColor',
    white: {
      DEFAULT: '#ffffff',
      500: '#ffffff'
    },
    black: {
      DEFAULT: '#0e1116',
      950: '#000000',
      900: '#0e1116',
      800: '#42464d',
      700: '#565c69',
      600: '#7f858d',
      550: '#b6bbc2',
      500: '#dee0e4',
      400: '#f2f3f4',
      300: '#fafafb'
    },
    primary: {
      DEFAULT: '#0060b1',
      700: '#003a6a',
      600: '#004d8e',
      500: '#0060b1',
      400: '#1a70b9',
      300: '#4d90c8',
      200: '#80b0d8',
      100: '#e6eff7'
    },
    secondary: {
      DEFAULT: '#ff6500',
      700: '#803100',
      600: '#e35214',
      500: '#ff6500',
      400: '#ff8b1f',
      300: '#ffa973',
      200: '#ffccac',
      100: '#ffefe6'
    },
    error: {
      DEFAULT: '#d5041a',
      700: '#4e0101',
      600: '#820505',
      500: '#d5041a',
      400: '#e9878b',
      100: '#ffe5e6'
    },
    success: {
      DEFAULT: '#008531',
      700: '#003915',
      600: '#005921',
      500: '#008531',
      400: '#48be74',
      100: '#d0ffe4'
    }
  },
  spacing: {
    '0': '0rem',
    '2': '0.125rem',
    '4': '0.25rem',
    '6': '0.375rem',
    '8': '0.50rem',
    '12': '0.75rem',
    '16': '1rem',
    '20': '1.25rem',
    '24': '1.5rem',
    '32': '2rem',
    '40': '2.5rem',
    '48': '3rem',
    '56': '3.5rem',
    '64': '4rem',
    '72': '4.5rem',
    '80': '5rem'
  },
  borderWidth: {
    DEFAULT: '1px',
    0: '0px',
    1: '1px',
    2: '2px',
    4: '4px'
  },
  boxShadow: {
    'bottom-20': '0px 0.5px 2px 0px #60617029, 0px 0px 1px 0px #28293d14',
    'bottom-40': '0px 2px 4px 0px #60617029, 0px 0px 1px 0px #28293d0a',
    'bottom-60': '0px 2px 4px 0px #60617029, 0px 0px 1px 0px #28293d0a',
    'bottom-80': '0px 8px 16px 0px #60617029, 0px 2px 4px 0px #28293d0a',
    'bottom-100': '0px 16px 24px 0px #60617029, 0px 2px 8px 0px #28293d0a',
    'top-20': '0px -0.5px 2px 0px #60617029, 0px 0px 1px 0px #28293d14',
    'top-40': '0px -2px 4px 0px #60617029, 0px 0px 1px 0px #28293d0a',
    'top-60': '0px -4px 8px 0px #60617029, 0px 0px 2px 0px #28293d0a',
    'top-80': '0px -8px 16px 0px #60617029, 0px -2px 4px 0px #28293d0a',
    'top-100': '0px -16px 24px 0px #60617029, 0px -2px 8px 0px #28293d0a'
  },
  borderRadius: {
    DEFAULT: '4px',
    0: '0px',
    2: '2px',
    4: '4px',
    8: '8px',
    16: '16px',
    24: '24px',
    full: '9999px'
  },
  screens: {
    tablet: '600px',
    desktop: '1024px',
    desktopLarge: '1440px'
  },
  fontSize: {
    ...defaultTheme.fontSize,
    xxs: ['10px', '16px'] as [fontSize: string, lineHeight: string]
  },
  keyframes: {
    ...defaultTheme.keyframes,
    slideRight: {
      '0%': {
        transform: 'translate(0px, var(--tw-translate-y))',
        opacity: '1'
      },
      '33%': {
        transform: 'translate(10%, var(--tw-translate-y))',
        opacity: '0'
      },
      '66%': {
        transform: 'translate(-10%, var(--tw-translate-y))',
        opacity: '0'
      },
      '100%': {
        transform: 'translate(0px, var(--tw-translate-y))',
        opacity: '1'
      }
    }
  }
}

export { theme }
