var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('../webpack.config');
var config = require('../config')

new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(config.port, config.hostname, function(err, result) {
  if (err) {
    return console.log(err)
  }

  console.log('Listening at http://%s:%s/', config.hostname, config.port);
})
