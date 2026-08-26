/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Void & Surface tokens from Stitch DESIGN.md
        void: '#000000',
        background: '#0a0a0c',
        surface: '#131315',
        'surface-dim': '#131315',
        'surface-bright': '#39393b',
        'surface-container-lowest': '#0d0d0f',
        'surface-container-low': '#151517',
        'surface-container': '#1a1a1c',
        'surface-container-high': '#242426',
        'surface-container-highest': '#2f2f32',
        'surface-variant': '#353437',

        // Content / Contrast tokens
        primary: '#ffffff',
        'on-primary': '#2f3131',
        'primary-container': '#e2e2e2',
        'on-primary-container': '#636565',

        secondary: '#a1a1a4',
        'on-secondary': '#2f3031',

        'on-surface': '#e4e2e4',
        'on-surface-variant': '#9e9ea2',
        'on-background': '#e4e2e4',

        outline: '#6e7172',
        'outline-variant': '#333336',

        // International Orange accent
        accent: '#F15025',
        'accent-orange': '#F15025',
        'on-tertiary-container': '#be2d00',
      },
      borderRadius: {
        DEFAULT: '0.75rem',
        sm: '0.375rem',
        md: '1rem',
        lg: '1.25rem',
        xl: '1.75rem',
        full: '9999px',
        cinematic: '4px',
      },
      spacing: {
        unit: '8px',
        gutter: '24px',
        'margin-mobile': '20px',
        'margin-desktop': '48px',
        'section-gap': '120px',
        'container-max': '1200px',
      },
      fontFamily: {
        'display-lg': ['"Space Grotesk"', 'sans-serif'],
        'headline-md': ['"Space Grotesk"', 'sans-serif'],
        'body-lg': ['"Inter"', 'sans-serif'],
        'body-md': ['"Inter"', 'sans-serif'],
        'ui-label': ['"Inter"', 'sans-serif'],
        'technical-label': ['"Geist"', 'monospace'],
        'dot-matrix': ['"DotGothic16"', '"Space Grotesk"', 'sans-serif'],
        pixel: ['"Press Start 2P"', 'monospace'],
      },
      boxShadow: {
        pill: '0 4px 20px rgba(0, 0, 0, 0.60)',
        glow: '0 0 20px rgba(241, 80, 37, 0.2)',
        'glow-white': '0 0 20px rgba(255, 255, 255, 0.15)',
        modal: '0 25px 50px -12px rgba(0, 0, 0, 0.9), inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
      },
    },
  },
  plugins: [],
};
