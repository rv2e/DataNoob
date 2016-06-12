var getDetailOfId = require('../support/assignments').getDetailOfId;
var _ = require('lodash')

module.exports = (request, response) => {
  var id = request.params.id;

  return getDetailOfId(id)
  .then((detail) => response.json(_.extend(detail, { id: id })))
  .catch((error) => response.json({
    status: error.status,
    message: 'cannot access to the mongodb',
  }));
}
