var getDetailOfId = require('../support/assignments').getDetailOfId;

module.exports = (request, response) => {
  var id = request.params.id;

  return getDetailOfId(id)
  .then((detail) => response.json(detail))
  .catch((error) => response.json({
    status: error.status,
    message: 'cannot access to the mongodb',
  }));
}
