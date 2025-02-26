import daisyui from "daisyui"
export default {
  darkMode: 'class',
  content: [
    './index.html', 
    './src/**/*.{js,jsx,ts,tsx}', // Include React files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui, // Add DaisyUI as a plugin
  ],
  daisyui: {
    themes: false, // Disable DaisyUI themes
  },
}