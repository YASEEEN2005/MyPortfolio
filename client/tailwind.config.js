/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Grayscale Palette (Mandatory)
        'bright-snow': '#f8f9fa',
        'platinum': '#e9ecef',
        'alabaster': '#dee2e6',
        'pale-slate': '#ced4da',
        'slate-grey': '#6c757d',
        'iron-grey': '#495057',
        'gunmetal': '#343a40',
        'carbon-black': '#212529',

        primary: {
          DEFAULT: '#4F46E5', // Primary Brand Check
          hover: '#4338CA',
        },
        accent: {
          DEFAULT: '#22C55E', // Soft Accent
          soft: '#BBF7D0',
          hover: '#16A34A',
          highlight: '#06B6D4',
        },
        
        // Semantic Mappings
        background: {
          DEFAULT: '#f8f9fa', // bright-snow
          surface: '#ffffff',
          dark: '#343a40', // gunmetal
        },
        text: {
          primary: '#212529', // carbon-black
          secondary: '#6c757d', // slate-grey
          muted: '#adb5bd', // pale-slate-2
          light: '#f8f9fa',
        },
        border: {
           DEFAULT: '#dee2e6', // alabaster-grey
        }
      },
    },
  },
  plugins: [],
}
