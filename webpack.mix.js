const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').version();

mix.styles([
    'public/css/bootstrap.min.css',
    'public/css/owl.carousel.min.css',
    'public/css/owl.theme.default.min.css',
    'public/css/style.css',
    'public/css/custom.css',
], 'public/css/all.css')
