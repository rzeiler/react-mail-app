module.exports = {
  entry: [
    './src/index.js'
  ],
  devtool: 'eval',
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'stage-2', 'react']
      },
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  },
  resolve: {
    extensions: ['.js']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  }
};
