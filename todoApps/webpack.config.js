const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    js: './main.js',
    css: './main.css'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.[name]',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
//          presets: ['react', 'es2015', 'react-hmre']
          presets: ['react', 'es2015']
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: "style-loader",
            use: ["css-loader",
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [
                    require('postcss-easy-import')({ glob: true}),
                  ]
                },
              },
            ]
          }
        )
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './public/',
    port: 8080,
    inline: true,
    historyApiFallback: true,
    clientLogLevel: "info",
    stats: { colors: true }
  }
};
