require('dotenv').load();

var port = process.env.PORT || 3001;
var host = process.env.URLROOT || 'localhost';
var express = require('express');
var app = express();
var logger = require('morgan');
var _ = require('lodash');
var bb = require('bluebird');

app.use(logger('dev'));
app.use(express.static('public'));

var assignmentRoutes = require('./lib/routes');
app.use('/assignment', assignmentRoutes)

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: { },
  });
});

var server = app.listen(port, function() {
  console.log('Server listening on port', server.address().port)
})

module.exports = app;
