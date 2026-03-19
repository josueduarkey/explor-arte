/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Lexend", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
      spacing: {
        // Para safe-area-inset-bottom en iOS/Android WebView
        safe: "env(safe-area-inset-bottom)",
      },
      colors: {
        "custom-bg": "rgb(var(--custom-bg-rgb) / <alpha-value>)",
        "custom-text": "rgb(var(--custom-text-rgb) / <alpha-value>)",
        primary: "rgb(var(--primary-rgb) / <alpha-value>)",
        secondary: "rgb(var(--secondary-rgb) / <alpha-value>)",
        accent: "rgb(var(--accent-rgb) / <alpha-value>)",
        "accent-blue": "rgb(var(--accent-blue-rgb) / <alpha-value>)",
        "bright-blue": "rgb(var(--bright-blue-rgb) / <alpha-value>)",
        "accent-yellow": "rgb(var(--accent-yellow-rgb) / <alpha-value>)",
        "background-custom":
          "rgb(var(--background-custom-rgb) / <alpha-value>)",
        "background-light":
          "rgb(var(--background-light-rgb) / <alpha-value>)",
        "background-dark":
          "rgb(var(--background-dark-rgb) / <alpha-value>)",
        "neutral-soft": "rgb(var(--neutral-soft-rgb) / <alpha-value>)",
        "text-main": "rgb(var(--text-main-rgb) / <alpha-value>)",
        "text-custom": "rgb(var(--text-custom-rgb) / <alpha-value>)",
        "student-text": "rgb(var(--student-text-rgb) / <alpha-value>)",
        "modal-bg": "rgb(var(--modal-bg-rgb) / <alpha-value>)",
        "teal-accent": "rgb(var(--teal-accent-rgb) / <alpha-value>)",
        "primary-orange":
          "rgb(var(--primary-orange-rgb) / <alpha-value>)",
        "primary-green": "rgb(var(--primary-green-rgb) / <alpha-value>)",
        "primary-teal": "rgb(var(--primary-teal-rgb) / <alpha-value>)",
        "admin-accent": "rgb(var(--admin-accent-rgb) / <alpha-value>)",
        "primary-dark": "rgb(var(--primary-dark-rgb) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

