const { addPlugins, createConfig, customConfig, defineConstants, env, entryPoint, setOutput,
        sourceMaps } = require('@webpack-blocks/webpack2')
const babel = require('@webpack-blocks/babel6')
const devServer = require('@webpack-blocks/dev-server2')
const postcss = require('@webpack-blocks/postcss')
const extractText = require('@webpack-blocks/extract-text2')
const autoprefixer = require('autoprefixer')
const plugins = require('./webpack.plugins')

module.exports = createConfig([
  entryPoint(['react-hot-loader/patch', './src/index.js']),
  customConfig({ target: 'electron-renderer' }),
  babel(),
  postcss([
    autoprefixer({ browsers: ['last 2 versions'] })
  ]),
  addPlugins(plugins.basePlugins),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV || 'development'
  }),
  env('development', [
    setOutput('./dist/[name].bundle.js'),
    devServer({ port: parseInt(process.env.PORT, 10) }),
    sourceMaps(),
    addPlugins(plugins.developmentPlugins)
  ]),
  env('production', [
    setOutput('./dist/[name].[hash].js'),
    extractText('css/[name].[hash].css'),
    addPlugins(plugins.productionPlugins)
  ])
])
