import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,tsx,jsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cobalt: {
          DEFAULT: '#002F6C',
          50: '#E8EEF6',
          100: '#C5D3E8',
          200: '#9DB5D6',
          300: '#6E92C2',
          400: '#4270A8',
          500: '#1E4E88',
          600: '#002F6C',
          700: '#002554',
          800: '#001B3D',
          900: '#001226',
        },
        copper: {
          DEFAULT: '#D9531E',
          50: '#FDF0EB',
          100: '#FAD9CC',
          200: '#F4B399',
          300: '#EC8A60',
          400: '#E36B3C',
          500: '#D9531E',
          600: '#B53E12',
          700: '#8E2F0E',
          800: '#68220A',
          900: '#421606',
        },
        bone: '#F9F9F9',
        ink: '#0A0A0A',
      },
      fontFamily: {
        sans: ['var(--font-atkinson)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: ['1.125rem', '1.6'],
      },
      spacing: {
        '18': '4.5rem',
      },
      maxWidth: {
        '120': '120rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: { 'from': { opacity: '0' }, 'to': { opacity: '1' } },
        slideUp: { 'from': { opacity: '0', transform: 'translateY(1rem)' }, 'to': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};

export default config;
