import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            boxShadow: {
                '3xl': 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',
            }
        },
    },

    plugins: [
        require("@tailwindcss/typography"),
        require("daisyui"),
    ],

    daisyui: {
        themes: [
            "bumblebee",
            {
                "jaigopal": {
                    "primary": "#EFEDE4", //#fcd34d
                    "secondary": "#e3dfd3",
                    "accent": "#debc74", //#543D37
                    "neutral": "#4a4657",
                    "base-100": "#f9f9f9", //#F6F1EE
                    "info": "#85a8d6",
                    "success": "#22c564",
                    "warning": "#f6cb2c",
                    "error": "#e6513d",
                }
            }

        ],

    }
};
