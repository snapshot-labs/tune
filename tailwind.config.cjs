/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/*.vue'],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        // IMPORTANT: Color variables that require opacity modifiers must be defined
        // without space function and opacity value. They can be recognized by the
        // <alpha-value> placeholder. See: https://tailwindcss.com/docs/customizing-colors#using-css-variables

        // backgrounds
        'bg-color': 'rgba(var(--bg), <alpha-value>)',
        'block-bg-color': 'rgba(var(--block-bg), <alpha-value>)',
        'input-bg-color': 'rgba(var(--input-bg), <alpha-value>)',
        'hover-bg-color': 'rgba(var(--hover-bg), <alpha-value>)',
        'active-bg-color': 'rgba(var(--active-bg), <alpha-value>)',
        'border-color': 'rgba(var(--border), <alpha-value>)',

        // main
        'heading-color': 'rgba(var(--heading), <alpha-value>)',
        'link-color': 'rgba(var(--link), <alpha-value>)',
        'text-color': 'rgba(var(--text), <alpha-value>)',

        'content-color': 'var(--content)',

        // accents
        'primary-color': 'rgba(var(--primary), <alpha-value>)',
        'accent-foreground-color': 'rgba(var(--accent-foreground), <alpha-value>)',
        'danger-color': 'rgba(var(--danger), <alpha-value>)',
        'positive-color': 'rgba(var(--positive), <alpha-value>)',

        'accent-hover-color': 'var(--accent-hover)',
        'accent-active-color': 'var(--accent-active)',
        'danger-border-color': 'var(--danger-border)',
        'danger-hover-color': 'var(--danger-hover)',
        'danger-active-color': 'var(--danger-active)',
        'positive-border-color': 'var(--positive-border)',
        'positive-hover-color': 'var(--positive-hover)',
        'positive-active-color': 'var(--positive-active)'
      },
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
    }
  },
  plugins: [
    require('@tailwindcss/forms')({ strategy: 'class' }),
    require('prettier-plugin-tailwindcss')
    // ...
  ]
};
