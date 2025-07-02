// tailwind.config.ts
export default {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f2f61',
        accent: '#eb4e3d',
        secondary: '#f1f1f1',
        'blue-primary': '#16254F',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'sans-serif'],
      },
      backgroundImage: {
        'blue-gradient-top': 'linear-gradient(360deg, #42A3FF 72.97%, #90EBFF 198.65%)',
      },
    },
  },
  plugins: [],
}
