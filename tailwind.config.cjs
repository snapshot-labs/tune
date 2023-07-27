/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/*.vue'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    },
    spacing: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '40px',
      7: '48px',
      8: '64px',
      9: '80px',
      10: '96px'
    },
    fontSize: {
      '2xl': ['34px', '36px'],
      xl: ['28px', '32px'],
      lg: ['22px', '24px'],
      md: ['20px', '20px'],
      base: ['18px', '18px'],
      sm: ['16px', '16px'],
      xs: ['14px', '14px']
    },
    fontFamily: {
      sans: [
        'Calibre, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji'
      ],
      mono: ['monospace'],
      space: ['SpaceMono']
    },
    boxShadow: {
      lg: '2px 4px 9px rgba(0, 0, 0, 0.067)'
    },
    colors: {
      transparent: 'transparent',
      blue: '#384AFF',
      red: '#EB4C5B',
      green: '#57B375',
      orange: '#F2994A',
      violet: '#BB6BD9',
      'gray-900': '#111111',
      'gray-850': '#1C1B20',
      'gray-800': '#232227',
      'gray-700': '#29282E',
      'gray-600': '#333237',
      'gray-500': '#57606A',
      'gray-400': '#A09FA4',
      'gray-350': '#E5E5E6',
      'gray-300': '#EDEDED',
      'gray-200': '#F7F7F7',
      'gray-100': '#FBFBFB',
      white: '#FFFFFF'
    }
  },
  plugins: [
    require('@tailwindcss/forms')({ strategy: 'class' }),
    require('prettier-plugin-tailwindcss')
    // ...
  ]
};
