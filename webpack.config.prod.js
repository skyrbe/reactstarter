import path from 'path';
import webpack from 'webpack';

export default {
  devtool:'source-map',
  entry: [
    path.join(__dirname, 'client/main.js')
  ],
  output: {
    path: '/',
    filename:'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test:/\.js$/,
        include: path.join(__dirname, 'client'),
        exclude:/node_modules/,
        loaders: ['babel']
      }
    ]
  },
  resolve: {
    extensions: [ '' , '.js' ]
  },
  node: {
    net: 'empty',
    dns: 'empty'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: false
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
}
