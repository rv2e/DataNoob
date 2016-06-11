var mongoose = require('mongoose');
var bb = require('bluebird');
var config = require('../../config');

mongoose.Promise = bb;
mongoose.connect(config.db);

module.exports = mongoose;
