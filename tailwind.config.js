/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
       'custom-heroTextGradient': 'linear-gradient(89.61deg, #4B3B73 -7.29%, #8567C3 32.92%, #E6D8FB 64.28%, #B89DEA 91.57%)',
      },
    },
  },
  plugins: [],
};
