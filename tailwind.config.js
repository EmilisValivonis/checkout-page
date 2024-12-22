module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./src/assets/styles/**/*.{scss,css}"
    ],
    theme: {
        extend: {
            borderRadius: {
                'lg': '1rem',
                'xl': '1.25rem',
                'custom': '1rem',
            },
            spacing: {
                'input-padding': '1rem',
                'button-padding': '1.25rem',
                'section-gap': '2rem',
            },
            colors: {
                'green-primary': '#2ecc71',
                'green-hover': '#27ae60',
                'gray-border': '#e5e7eb',
            },
            fontSize: {
                'label': '0.875rem',
                'input': '1rem',
                'nav': '0.875rem',
                'heading': '1.25rem',
            },
            ringColor: {
                'green-primary': '#2ecc71',
            },
        },
    },
    plugins: [],
};
