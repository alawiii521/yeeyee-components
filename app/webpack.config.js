const path = require('path');
const webpack = require('webpack');

const mode = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

const appConfig = {
  mode,
  entry: {
    app: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.js')],
  },
  devtool: mode === 'development' ? 'source-map' : 'none',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\less$/,
        use: [
          {
            loader: 'style-loader?sourceMap', // creates style nodes from JS strings
          },
          {
            loader:
              'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          },
        ],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, 'public'),
    overlay: true,
    watchContentBase: true,
    host: '0.0.0.0',
  },
};

module.exports = [appConfig];
