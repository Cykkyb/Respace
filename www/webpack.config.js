const path = require('path');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
        }),
        new WebpackManifestPlugin({
            publicPath: '/dist',
            fileName: 'manifest.json',
        }),
        // new CleanWebpackPlugin(),
    ],
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    entry: {
        index: path.join(__dirname, '/src/index.js'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: "html-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [MiniCssExtractPlugin.loader,
                    'css-loader',
                    "postcss-loader",
                    "sass-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {targets: "defaults"}]
                        ],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    }
                }
            },

        ],
    },
    devServer: {
        port: 3000,
        open: true,
        hot: true,
        client: {
            overlay: false,
        },
    },
}
