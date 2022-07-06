module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      
      'purple1': '#321473',
      'purple2': "#251659",
      'purple3': "#7569BF",
      'purple4': "#C2BBF2",
      'purple5': "#0FF2F2",

    
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}