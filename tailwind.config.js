/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        electric: "#3f5cff",
        aqua: "#10b8e8",
        bitOrange: "#ff6a2a",
        bitCharcoal: "#050710",
        bitPanel: "#08111f",
        bitPanelSoft: "#101725",
        bitSteel: "#355d68",
      },
      boxShadow: {
        service:
          "0 18px 50px -28px rgba(15, 23, 42, 0.45), 0 1px 0 rgba(255, 255, 255, 0.7) inset",
      },
    },
  },
  plugins: [],
};
