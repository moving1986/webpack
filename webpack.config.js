 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const MiniCssExtractPlugin = require('mini-css-extract-plugin');

 module.exports = {
    entry: "./src/index.js",
    output: {
         path: path.resolve(__dirname, 'dist'),
         filename: "app.bundle.js", 
    },
    mode: 'prodaction',
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
            },
            {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader']
            }
            
    ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin(),
    ],
    
 }