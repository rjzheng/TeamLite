module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components',
      './app/store',
      './app/reducers',
      './app/actions',
      './app/components/Home',
      './app/components/Article',
      './app/components/Bookmark',
      './app/components/Profile'
    ],
    alias: {
    },
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins:['transform-decorators-legacy']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }, {
        test: /\.css$/,
        loaders: ["style", "css"]
      }, {
        test: /\.json$/,
        loader: "json"
      }
    ]
  }
};
