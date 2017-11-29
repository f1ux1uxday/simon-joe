const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CriticalPlugin = require('webpack-plugin-critical').CriticalPlugin

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
          'css-loader?modules,localIdentName="[local]"',
        ],
      }),
    },{
      test: /\.(ogg|jpg)$/,
      use: 'file-loader',
    },],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
    }),
    new CriticalPlugin({
      src: './dist/index.html',
      base: path.resolve(__dirname),
      inline: true,
      minify: true,
      dest: './dist/index.html',
    }),
  ],
}
