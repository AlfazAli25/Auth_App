module.exports = {
  // Use OS preference for dark mode (prefers-color-scheme)
  darkMode: 'media',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366F1',
          600: '#4F46E5'
        },
        accent: '#8B5CF6'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      borderRadius: {
        xl: '1rem',
      }
    }
  },
  plugins: [],
}
