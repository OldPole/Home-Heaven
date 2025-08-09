import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[name][ext]',
    clean: true
  },
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000
  },
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist')
    },
    port: 9000,
    compress: true,
    hot: true,
    liveReload: true,
    open: true
  },
  module: {
    rules: [
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource'
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        favicon: './public/favicon.png',
        hash: true,
        cache: false
    })
  ]
};