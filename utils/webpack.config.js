const webpack  = require('webpack');
const path = require('path');
module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.html/,
                use: [{
                    loader: 'html-loader'
                }, {
                    loader: 'html-minify-loader',
                    options: {
                        test: true
                    }
                }]
            }
        ]
    },
    //指定loader加载目录，优先加载本地，如果本地没有 则加载node_modules下面的
    resolveLoader: {
        modules: [__dirname, 'node_modules']
    }
};