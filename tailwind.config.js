import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: '"Poppins", sans-serif',
            },
            fontSize: {
                xxs: ["10px", "16px"],
            },
            colors: {
                red: {
                    50: "#fff0f1",
                    100: "#ffdee0",
                    200: "#ffc3c6",
                    300: "#ff999e",
                    400: "#ff5e66",
                    500: "#ff2c37",
                    600: "#e50914",
                    700: "#cf0610",
                    800: "#ab0911",
                    900: "#8d0f15",
                    950: "#4d0206",
                    default: "#e50914",
                },
                danger: "#e50914",
            },
            backgroundImage: {
                "black-gradient-t-b":
                    "linear-gradient(to bottom, rgba(23,23,23,1) 0%,rgba(23,23,23,0) 100%)",
                "black-gradient-l-r":
                    "linear-gradient(to right, rgba(0,0,0,0.85) 0%,rgba(0,0,0,0.1) 100%)",
                "black-gradient-r-l":
                    "linear-gradient(to right, rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.85) 100%)",
                "black-gradient-hero":
                    "linear-gradient(to bottom, rgba(0,0,0,0) 70%,rgba(0,0,0,0.85) 100%)",
            },
            screens: {
                slg: "992px",
                sxl: "1200px",
                "w-1500": "1500px",
                "w-1200": "1201px",
                "w-1024": "1025px",
                "w-500": "501px",
                "w-375": "375px",
            },
            container: {
                center: true,
            },
            zIndex: {
                1: "1",
            },
            boxShadow: {
                "3xl": "0px 0px 25px 0px rgba(0,0,0,0.8)",
                tooltip: "0px 20px 25px 0px rgba(0,0,0,0.7)",
            },
        },
    },
    // darkMode: "class",
    plugins: [nextui()],
};
