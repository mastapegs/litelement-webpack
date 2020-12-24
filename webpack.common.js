const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const pages = [
  {
    title: 'LitElement',
    template: './src/index.html',
    filename: 'index.html',
  },
  {
    title: 'About | LitElement',
    template: './src/index.html',
    filename: 'about/index.html',
  },
  {
    title: 'Contact | LitElement',
    template: './src/index.html',
    filename: 'contact/index.html',
  },
]

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...pages.map(page => new HtmlWebpackPlugin({
      ...page
    })),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
}