import daisyui from "daisyui"
export default {
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
    themes: ["light", "dark", "cupcake"], // Customize DaisyUI themes (optional)
    darkTheme: "dark", // Default dark theme
  },
}