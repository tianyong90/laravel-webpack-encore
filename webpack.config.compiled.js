module.exports = {"context":"D:\\code\\laravel-webpack-encore","entry":{"app":"./resources/js/app.js"},"mode":"development","output":{"path":"D:\\code\\laravel-webpack-encore\\public\\js","filename":"[name].js","publicPath":"http://localhost:9000/js/","pathinfo":true},"module":{"rules":[{"test":{},"exclude":{},"use":[{"loader":"babel-loader","options":{"cacheDirectory":true,"sourceType":"unambiguous","presets":[["@babel/preset-env",{"modules":false,"targets":{},"forceAllTransforms":false,"useBuiltIns":false,"corejs":null}]],"plugins":["@babel/plugin-syntax-dynamic-import"]}}]},{"resolve":{"mainFields":["style","main"],"extensions":[".css"]},"test":{},"oneOf":[{"resourceQuery":{},"use":[{"loader":"style-loader","options":{"sourceMap":true}},{"loader":"css-loader","options":{"sourceMap":true,"importLoaders":1,"modules":true,"localIdentName":"[local]_[hash:base64:5]"}},{"loader":"postcss-loader","options":{"sourceMap":true}}]},{"use":[{"loader":"style-loader","options":{"sourceMap":true}},{"loader":"css-loader","options":{"sourceMap":true,"importLoaders":1,"modules":false,"localIdentName":"[local]_[hash:base64:5]"}},{"loader":"postcss-loader","options":{"sourceMap":true}}]}]},{"test":{},"loader":"file-loader","options":{"name":"images/[name].[hash:8].[ext]","publicPath":"http://localhost:9000/js/"}},{"test":{},"loader":"file-loader","options":{"name":"fonts/[name].[hash:8].[ext]","publicPath":"http://localhost:9000/js/"}},{"resolve":{"mainFields":["sass","style","main"],"extensions":[".scss",".sass",".css"]},"test":{},"oneOf":[{"resourceQuery":{},"use":[{"loader":"style-loader","options":{"sourceMap":true}},{"loader":"css-loader","options":{"sourceMap":true,"importLoaders":1,"modules":true,"localIdentName":"[local]_[hash:base64:5]"}},{"loader":"postcss-loader","options":{"sourceMap":true}},{"loader":"resolve-url-loader","options":{"sourceMap":true}},{"loader":"sass-loader","options":{"sourceMap":true,"implementation":{"info":"dart-sass\t1.22.3\t(Sass Compiler)\t[Dart]\ndart2js\t2.4.0\t(Dart Compiler)\t[Dart]","types":{}}}}]},{"use":[{"loader":"style-loader","options":{"sourceMap":true}},{"loader":"css-loader","options":{"sourceMap":true,"importLoaders":1,"modules":false,"localIdentName":"[local]_[hash:base64:5]"}},{"loader":"postcss-loader","options":{"sourceMap":true}},{"loader":"resolve-url-loader","options":{"sourceMap":true}},{"loader":"sass-loader","options":{"sourceMap":true,"implementation":{"info":"dart-sass\t1.22.3\t(Sass Compiler)\t[Dart]\ndart2js\t2.4.0\t(Dart Compiler)\t[Dart]","types":{}}}}]}]},{"test":{},"use":[{"loader":"vue-loader","options":{}}]}]},"plugins":[{"entriesToDelete":[]},{"opts":{"publicPath":null,"basePath":"js/","fileName":"manifest.json","transformExtensions":{},"writeToFileEmit":true,"seed":{},"map":null,"generate":null,"sort":null}},{"paths":["**/*"],"options":{"root":"D:\\code\\laravel-webpack-encore\\public\\js","verbose":false,"allowExternal":false,"dry":false}},{"definitions":{"process.env":{"NODE_ENV":"\"development\""}}},{},{"compilationSuccessInfo":{"messages":[]},"shouldClearConsole":false,"formatters":[null,null,null,null,null,null],"transformers":[null,null,null,null,null,null]},{"profile":false,"modulesCount":500,"showEntries":false,"showModules":true,"showActiveModules":true,"options":{"name":"webpack","color":"green","reporters":["fancy"],"reporter":null},"reporters":[{}]},{"options":{"filename":"entrypoints.json","prettyPrint":false,"update":false,"fullPath":true,"manifestFirst":true,"useCompilerPath":false,"fileTypes":["js","css"],"includeAllFileTypes":true,"keepInMemory":false,"integrity":false,"path":"D:\\code\\laravel-webpack-encore\\public\\js","entrypoints":true}}],"optimization":{"namedModules":true,"chunkIds":"named","runtimeChunk":"single","splitChunks":{"chunks":"async"}},"watchOptions":{"ignored":{}},"devtool":"inline-source-map","devServer":{"contentBase":"D:\\code\\laravel-webpack-encore\\public","publicPath":"http://localhost:9000/js/","headers":{"Access-Control-Allow-Origin":"*"},"hot":true,"quiet":true,"compress":true,"historyApiFallback":true,"watchOptions":{"ignored":{}}},"performance":{"hints":false},"stats":{"hash":false,"version":false,"timings":false,"assets":false,"chunks":false,"maxModules":0,"modules":false,"reasons":false,"children":false,"source":false,"errors":false,"errorDetails":false,"warnings":false,"publicPath":false,"builtAt":false},"resolve":{"extensions":[".wasm",".mjs",".js",".json",".jsx",".vue",".ts",".tsx"],"alias":{"~":"D:\\code\\laravel-webpack-encore\\resources\\js","vue$":"vue/dist/vue.esm.js"}},"externals":[]}