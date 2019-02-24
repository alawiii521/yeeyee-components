const path = require('path');

const entryPoints = require('./entryPoints');

const mode = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const outputPath = path.resolve(__dirname, '..', 'public', 'yeeyee-components');
const port = 4000;
const publicDir = path.resolve(__dirname, '..', 'public');

//TODO HotModuleReplacementPlugin?
module.exports = {
  entry: entryPoints,
  devtool: mode === 'development' ? 'source-map' : 'none',
  mode,
  output: {
    filename: '[name].js',
    publicPath: '/yeeyee-components/',
    path: outputPath,
  },
  devServer: {
    port,
    contentBase: publicDir,
    overlay: true,
    watchContentBase: true,
    host: '0.0.0.0',
  },
};
