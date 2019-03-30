import webpack from 'webpack';
import Jarvis from 'webpack-jarvis';

import paths from './paths';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

module.exports = {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: paths.outputPath,
        chunkFilename: '[name].js'
    },
    performance: {
        hints: 'warning',
        maxAssetSize: 450000,
        maxEntrypointSize: 8500000,
        assetFilter: assetFilename => {
            return (
                assetFilename.endsWith('.css')
                || assetFilename.endsWith('.js')
                || assetFilename.endsWith('.scss')
            );
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        contentBase: paths.outputPath,
        compress: true,
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new Jarvis({
            port: 1337
        }),
        new MiniCssExtractPlugin({
          filename: 'css/[name].css',
          chunkFilename: '[id].css' ,
        })
    ]
};
