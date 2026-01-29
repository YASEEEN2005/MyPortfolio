/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#14B8A6', // Teal 500 (from image hire me)
          hover: '#0D9488',   // Teal 600
        },
        brand: {
          dark: '#0F172A',    // Slate 900 (navbar/text)
          secondary: '#334155', // Slate 700
        },
        accent: {
          DEFAULT: '#14B8A6', 
          soft: '#CCFBF1',
          hover: '#0F766E',
        },
        background: {
          DEFAULT: '#FFFFFF', // Pure white like image
          surface: '#F8FAFC', // Very light gray
        },
        text: {
          primary: '#0F172A', // Dark Slate (Name)
          secondary: '#64748B', // Muted Blue-Gray (Role)
          light: '#F8FAFC',   // For Navbar
        },
        border: {
           DEFAULT: '#E2E8F0',
        }
      },
    },
  },
  plugins: [],
}
