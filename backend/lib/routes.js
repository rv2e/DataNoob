var express = require('express');
var router = express.Router();

var routes = (router) => {

  router.get('/:id', function(req, res) {
    var id = req.params.id
    res.json({
      id: id,
      assignment: `this is the assignment number ${id}`,
      code: `there is the code to start on the editor`,
    })
  });

  router.get('/result/:id', function(req, res) {
    var id = req.params.id
    res.json({
      id: id,
      output: 'there is the output of your code',
      succeed: true,
    }).end()
  });

  return router;
};

module.exports = routes(router);
