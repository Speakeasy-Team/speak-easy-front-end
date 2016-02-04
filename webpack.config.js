var ExtractTextPlugin = require("extract-text-webpack-plugin");
var isProduction = process.env.NODE_ENV === 'production';
var cssLoader = 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'

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
        loaders: ["react-hot", "babel"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.css$/,
        loader: isProduction ?
          ExtractTextPlugin.extract('style', cssLoader) :
          'style-loader!' + cssLoader
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css", {allChunks: true})
  ]
}
