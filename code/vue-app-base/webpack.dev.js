const common = require('./webpack.common')
const merge = require('webpack-merge')
module.exports = merge(common,{
    mode:'development',
    devtool:'cheap-eval-module-source-map',
    devServer:{
        hot:true,
        open:true,
        contentBase:'public'
    }
})