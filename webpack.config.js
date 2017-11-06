const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js.*/,
      use: 'eslint-loader',
      exclude: /node_modules/,
    },{
      test: /\.js.*/,
      use: 'babel-loader',
      exclude: /node_modules/,
    },{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"',
        ],
      }),
    },],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
    }),
  ],
}
