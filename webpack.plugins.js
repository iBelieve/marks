const { webpack } = require('@webpack-blocks/webpack2')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function isVendor(module, count) {
  const path = module.context || module.userRequest
  return path && path.indexOf('node_modules') >= 0
}

exports.basePlugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: isVendor,
  })
]

exports.developmentPlugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html',
    inject: true
  })
]

exports.productionPlugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html',
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true
    }
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
//  new webpack.optimize.DedupePlugin(),    // TODO: Does not work w/ webpack 2 yet... :-/
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    output: {
      comments: false
    },
    sourceMap: true
  })
]
