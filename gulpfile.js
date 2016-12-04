const elixir = require('laravel-elixir');


/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

let node = 'node_modules/',
    assets = 'public/assets/',
    js = `${assets}js/`,
    css = `${assets}css/`,
    fonts = `public/fonts/`;

elixir(function (mix) {

    // bulma.css
    mix.copy(`${node}bulma/css/bulma.css`, `${css}bulma/css`);
    mix.copy(`${node}bulma/css/bulma.css.map`, `${css}bulma/css`);

});