/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/*.vue'],
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
      '2xl': ['36px', '50px'],
      xl: ['28px', '44px'],
      lg: ['24px', '32px'],
      md: ['20px', '28px'],
      base: ['18px', '24px'],
      sm: ['16px'],
      xs: ['14px']
    },
    boxShadow: {
      lg: '2px 4px 9px var(--shadow-color)'
    },
    colors: {
      transparent: 'transparent',
      snapshot: '#f3b04e',
      green: '#21b66f',
      red: '#ff3856',
      white: '#ffffff',
      'skin-primary': 'var(--primary-color)',
      'skin-border': 'var(--border-color)',
      'skin-text': 'var(--text-color)',
      'skin-link': 'var(--link-color)',
      'skin-bg': 'var(--bg-color)',
      'skin-block-bg': 'var(--block-bg)',
      'skin-header-bg': 'var(--header-bg)',
      'skin-heading': 'var(--heading-color)'
    }
  },
  plugins: [
    require('@tailwindcss/forms')({ strategy: 'class' }),
    require('prettier-plugin-tailwindcss')
    // ...
  ]
};
