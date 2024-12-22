module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./src/assets/styles/**/*.{scss,css}"
    ],
    darkMode: 'class',
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
                'dark-gray-border': '#44475a',
                'dark-input-bg': '#2c2f36',
                'dark-placeholder': '#b0b3b8',
                'dark-text': '#e4e6eb'
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
