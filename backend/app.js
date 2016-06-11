var config = require('./config');
var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser')

app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());

app.use('/assignment', require('./lib/routes'));

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500).json({
      message: err.message,
      error: err,
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message,
    error: { },
  });
});

var server = app.listen(config.port, function() {
  console.log('Server listening on port', server.address().port)
})

module.exports = app;
