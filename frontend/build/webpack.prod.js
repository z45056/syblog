const webpackConfig = require('./webpack.config');
const { merge } = require('webpack-merge')
module.exports = merge(webpackConfig, {
    mode: 'production'
})