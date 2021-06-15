const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /.s?css$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: 'file-loader'
            },
            {
                test:/\.svg$/,
                use: 'svg-url-loader'
            }
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.scss' ],
    },
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:'/travelBlog/'
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'style.[contenthash].css'
        })
    ],
    devServer: {
        port: 9000,
        historyApiFallback: {
            rewrites:[{
                from:/\.(png|jpe?g|gif|css|js)/,
                to: (context) => {
                    return `/${context.parsedUrl.path.split('/').reverse()[0]}`
                }
            }]
        },
        publicPath:'http://localhost:9000/',
        writeToDisk: true,
        open: true,
        hot: true
    },
};