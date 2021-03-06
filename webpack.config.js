var webpack = require('webpack');

module.exports = {
  //页面入口文件配置
  entry: {
    index: './src/js/page/index.js'
  },
  //入口文件输出配置
  output: {
    path: 'dist/js/page',
    filename: '[name].js'
  },
  module: {
    //加载器配置
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.js$/,
        loader: 'jsx-loader?harmony'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader?sourceMap'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  }
};