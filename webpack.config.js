const path = require('path');

module.exports = {
  entry: ['./src/index'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.json$/,
        loaders: ['json-loader'],
        include: path.join(__dirname, 'src')
      }]
  }
};
