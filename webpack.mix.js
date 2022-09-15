const mix = require('laravel-mix');
const path = require('path');
require('laravel-mix-workbox');

mix.js('resources/js/app.js', 'public/js');
mix.vue();
mix.postCss(
    'resources/css/app.css',
    'public/css',
    [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ]
);
mix.webpackConfig(require('./webpack.config.js'));

if (mix.inProduction()) {
    mix.injectManifest({
        swSrc: './resources/js/service-worker.js',
        exclude: [/\.(?:png|jpg|jpeg|svg|js|css)$/],
    });
    mix.version();
} else {
    mix.sourceMaps();
}

