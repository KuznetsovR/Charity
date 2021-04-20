const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./js/index.js",
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[ext]'
            },    
          },
        ],    
      },
      // { test: /\.svg$/, use: "svg-inline-loader" },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      }
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  mode: "production",
};
