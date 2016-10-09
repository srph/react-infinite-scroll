module.exports = {
  entry: "./example/script.js",
  output: { filename: "example/bundle.js" },

  module: {
    loaders: [{
      loader: 'babel',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }
};