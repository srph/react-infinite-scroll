module.exports = {
  entry: "./docs/script.js",
  output: { filename: "./docs/bundle.js" },

  module: {
    loaders: [{
      loader: 'babel',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }
};