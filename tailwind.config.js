/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a", // negro de fondo
        charcoal: "#1a1a1a", // header al hacer scroll
        cream: "#f5f2ed", // fondo claro
        brasa: "#d92323", // rojo de botones
        "brasa-dark": "#b81c1c",
        gold: "#c9a45c", // dorado de etiquetas
        wine: "#4a0f0f", // borgoña de títulos sobre crema
        "wine-deep": "#2b0707", // borgoña oscuro (delivery)
        wa: "#25d366", // verde WhatsApp
      },
      fontFamily: {
        display: ['"Anton"', "Impact", '"Arial Narrow"', "sans-serif"],
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "1560px",
      },
    },
  },
  plugins: [],
};
