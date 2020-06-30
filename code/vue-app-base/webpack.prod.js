const common = require('./webpack.common')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = merge(common, {
    mode :'production',
    devtool :false,
    plugins: [
        new CleanWebpackPlugin(),
        //复制静态文件
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public' },
            ]
        })
    ]
})