const Encore = require('@symfony/webpack-encore')
const path = require('path')
const fs = require('fs')
const WebpackBar = require('webpackbar')

Encore
  // directory where compiled assets will be stored
  .setOutputPath('public/js/')
  // public path used by the web server to access the output path
  .setPublicPath('/js')

  // 入口
  .addEntry('app', './resources/js/app.js')

// will require an extra script tag for runtime.js
// but, you probably want this, unless you're building a single-page app
  .enableSingleRuntimeChunk()

  .cleanupOutputBeforeBuild().enableSourceMaps(!Encore.isProduction())
// enables hashed filenames (e.g. app.abc123.css)
  .enableVersioning(Encore.isProduction())

  .enableVueLoader()
.enableSassLoader(options => {
    options.implementation = require('sass')
})
.enablePostCssLoader()
.configureFriendlyErrorsPlugin()
.addPlugin(new WebpackBar())

// 增加 resolve.alias
  .addAliases({
      '~': path.join(__dirname, './resources/js'),
  })

// fetch the config, then modify it!
const config = Encore.getWebpackConfig()

if (Encore.isDevServer()) {
    config.devServer.disableHostCheck = true

    // https://github.com/symfony/webpack-encore/pull/564#issuecomment-501577281
    // 解决 CSS 的 HMR 问题 TODO: (经测试仍无效)
    Encore.disableCssExtraction()
}

config.module.rules.push({
    test: /\.js$/,
    use: [
        {
            loader: 'cache-loader',
            options: {
                cacheDirectory: path.resolve('./node_modules/.cache/babel-loader'),
            },
        },
        'thread-loader',
        'babel-loader',
    ],
    include: path.resolve(__dirname, 'resources/js'),
})

// 下面这段生成一个静态的 webpack.config.compiled.js
// 可用于配置 PHPStorm中 webpack 功能
// preference -> language & frameworks -> javascript -> webpack
const compiledConfig = Encore.getWebpackConfig()
if (!Encore.isProduction()) {
    fs.writeFile('webpack.config.compiled.js', 'module.exports = ' + JSON.stringify(compiledConfig),
      function (err) {
          if (err) {
              return console.log(err)
          }
          console.log('webpack.config.compiled.js written')
      })
}

// export the final config
module.exports = config
