const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: "[name].js",
      chunkFilename: "[name].js",
   },
   devServer: {
      host: "0.0.0.0",
      historyApiFallback: true,
      disableHostCheck: true,
      compress: true,
      inline: true,
      port: 8080
   },
   module: {
      rules: [
        {
          test: /.jsx?$/,
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
          }]
        }
      ]
    },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}