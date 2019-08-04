import CleanWebpackPlugin from 'clean-webpack-plugin';

import paths from './paths';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

module.exports = {
    mode: 'production',
    output: {
        filename: `${paths.jsFolder}/[name].[hash].js`,
        path: paths.outputPath,
        chunkFilename: '[name].[chunkhash].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
          filename: '[name].[hash].css',
          chunkFilename: '[id].[hash].css',
        })
    ],
    devtool: 'source-map'
};
