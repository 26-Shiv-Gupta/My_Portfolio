/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0A0E17',
          900: '#0B0F1A',
          800: '#121729',
          700: '#1A2036',
          600: '#242B47',
        },
        paper: {
          50: '#F7F8FC',
          100: '#F0F2F9',
          200: '#E4E7F2',
        },
        violet: {
          400: '#9B87FF',
          500: '#7C5CFF',
          600: '#6544E8',
        },
        cyan: {
          300: '#7EEBF5',
          400: '#22D3EE',
          500: '#0FB8D4',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, #E4E7F2 1px, transparent 1px), linear-gradient(to bottom, #E4E7F2 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(to right, #1A2036 1px, transparent 1px), linear-gradient(to bottom, #1A2036 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      animation: {
        'blob-slow': 'blob 22s infinite ease-in-out',
        'blob-slower': 'blob 30s infinite ease-in-out',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
        marquee: 'marquee 28s linear infinite',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '25%': { transform: 'translate(40px, -30px) scale(1.08)' },
          '50%': { transform: 'translate(-20px, 30px) scale(0.94)' },
          '75%': { transform: 'translate(-40px, -20px) scale(1.04)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
