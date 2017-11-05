const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js.*/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
    },{
      test: /\.js.*/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    },],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
}
