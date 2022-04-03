const mix = require('laravel-mix');
const path = require('path');

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .postCss(
        'resources/css/app.css', 'public/css', [
            require('postcss-import'),
            require('tailwindcss'),
            require('autoprefixer'),
        ]
    )
    .alias({
        '@': path.join(__dirname, 'resources/js'),
    });
