/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        // Blue accent for both themes
        primary: {
          DEFAULT: '#2563EB', // blue-600 for light mode
          hover: '#1D4ED8',   // blue-700 for light mode
          light: '#60A5FA',   // blue-400
        },
        // Dark mode (uses lighter blue)
        'primary-dark': {
          DEFAULT: '#3B82F6', // blue-500 for dark mode
          hover: '#60A5FA',   // blue-400 for dark mode
        },
        // Dark mode
        dark: {
          bg: '#0B0F19',
          surface: '#111827',
          border: '#1F2937',
          text: '#E5E7EB',
          muted: '#9CA3AF',
        },
        // Light mode
        light: {
          bg: '#F9FAFB',
          surface: '#FFFFFF',
          border: '#E5E7EB',
          text: '#111827',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      maxWidth: {
        content: '1100px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        '150': '150ms',
        '250': '250ms',
      },
    },
  },
  plugins: [],
}
