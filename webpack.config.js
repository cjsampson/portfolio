const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const combineLoaders = require('webpack-combine-loaders');
var autoprefixer = require('autoprefixer');


module.exports = {
   devtool: 'source-map',
   entry: './resources/assets/js/src/index.js',
   output: {
       filename: './public/js/app.js',
   },
   plugins: [
       new ExtractTextPlugin('styles-[hash].css'),
   ],
   resolve: {
       extensions: ['.js', '.jsx', '.json'],
   },
   module: {
       loaders: [
           // js loader
           {
               test: /\.jsx?$/,
               exclude: /node_modules/,
               loader: 'babel-loader',
               query: {
                   presets: ['es2015', 'react', 'stage-0'],
                    plugins: ['transform-class-properties', 'transform-decorators-legacy'],
               },
           },
           {
              test: /(\.css|\.scss|\.sass)$/,
              loaders: [
                 'style-loader',
                 'css-loader?sourceMap',
                 'postcss-loader',
                 'sass-loader?sourceMap',
             ],
           },
           {
              test: /\.(jpe?g|png|gif)$/i,
              loader: 'file?name=[name].[ext]'
            },
        ],
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};