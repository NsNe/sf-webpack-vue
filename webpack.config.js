var webpack = require('webpack');
var path = require('path');
console.log(path.resolve(__dirname, 'index.js'))

module.exports = {
    devtool: 'eval-source-map',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    devServer: {
        port: 8050,
        host: 'localhost',
        inline: true,
        hot: true,
        open: true,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname),
        publicPath: '/',
        proxy: {
        }
    }
};

