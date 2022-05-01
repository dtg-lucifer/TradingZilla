// const colors = require('tailwindcss/colors')
module.exports = {
    mode: "jit",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                TZ_DARK: "#1F0A14",
                TZ_LIGHT: "#2E0F1E",
                TZ_EXTRA_LIGHT: "#4D1932"
            },
        },
    },
    plugins: [
        require("tailwind-scrollbar-hide"),
        require("@tailwindcss/line-clamp"),
        require("tailwind-scrollbar"),
    ],
};
