export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'system-ui', 'sans-serif'],
                serifbrand: ['"Cormorant Garamond"', 'Georgia', 'serif']
            },
            letterSpacing: {
                tightxs: '-0.02em'
            }
        }
    },
    plugins: []
}