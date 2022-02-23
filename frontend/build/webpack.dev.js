const path = require('path')
const webpackConfig = require('./webpack.config');
const { merge } = require('webpack-merge')
module.exports = merge(webpackConfig, {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, '../public'),
        },
        port: '3001', // 默认是 8080
        hot: true,
        // stats: 'errors-only', // 终端仅打印 error
        compress: true, // 是否启用 gzip 压缩
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true
            }
        }
    },
    devtool: 'eval-cheap-module-source-map',
})