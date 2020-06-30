const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
        mode:'none',
        entry:'./src/main.js',
        output:{
            filename:'bundle.js',
            path:path.join(__dirname,'dist')
        },
        module:{
            rules:[
                // 1.vue文件处理:vue-loader,vue-template-compiler,css-loader
                {
                    test: /\.vue$/,
                    use: 'vue-loader'
                },
                {
                    test:/\.css$/,
                    use:[
                        'vue-style-loader',
                        'css-loader',
                    ]
                },
                // 2.less文件处理
                {
                    test:/\.less$/,
                    use:[
                        'vue-style-loader',
                        'css-loader',
                        'less-loader'
                    ]
                },
                // 3.图片文件处理
                // {
                //     test:/\.(png|jpg|gif)$/,
                //     use:[
                //         {
                //             loader:'file-loader',
                //             options:{
                //                 esModules:false
                //             }
                //         }
                //     ]
                // },
                {
                    test:/\.png$/,
                    use:[
                        {
                            loader:'url-loader',
                            options:{
                                limit:10*1024,
                                esModules:false
                            }
                        }
                    ]
                }
            ]
        },
        plugins:[
            new VueLoaderPlugin(),
            //自动生成html
            new HtmlWebpackPlugin({
                title:'AJ',
                template: './public/index.html'
            }),
            // 注入全局参数
            new webpack.DefinePlugin({
                BASE_URL:'"http://localhost:8080/"'
            })
        ]
    }