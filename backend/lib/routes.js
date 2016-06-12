var express = require('express');
var router = express.Router();
var assignmentDetail = require('./services/assignmentDetail');
var assignmentResult = require('./services/assignmentResult');

var routes = (router) => {
  router.get('/:id', assignmentDetail);
  router.post('/:id', assignmentResult);
  return router;
};

module.exports = routes(router);
