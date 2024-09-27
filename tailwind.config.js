/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.tsx"
    ],
    theme: {
        extend: {
            colors: {
                primary: "rgba(23,119,229,1)",
                secondary: "rgba(225,230,221,1)"
            },
            padding: {
                container: "2rem"
            },
            fontFamily: {
              "iran-yekan--regular": "iran-yekan--regular",
              "dana-fa-number--regular": "dana-fa-number--regular",
              "dana-fa-number--bold": "dana-fa-number--bold",
            }
        },
    },
    plugins: [],
}