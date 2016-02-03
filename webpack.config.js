module.exports = {
  context: __dirname + "/app",
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
  entry: {
    javascript: "./app.js",
    html: "./index.html",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel"],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ],
  },
}
