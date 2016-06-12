var getResultOfId = require('../support/assignments').getResultOfId;
var _ = require('lodash');

// compare the result of the code of the user and the correct answered
var isUserCodeRight = (userAnswered, result) => {
  if (_.isEmpty(userAnswered)) return false;
  return _.filter(result, (code) => {
    var codeMatched = userAnswered.indexOf(code) > -1
    return !codeMatched
  }).length === 0;
};

// run python or R interpretor
// STILL HAVE TO IMPLEMENT
var interpretCode = function(userCode) {
  return userCode.split('\n').map(line => line.trim()) || [];
}

module.exports = (request, response) => {
  var id = request.params.id;
  return getResultOfId(id)
  .then((dbResult) => {
    var userAnswered = request.body && request.body.code;
    var codeInterpreted = interpretCode(userAnswered);
    var isCorrect = isUserCodeRight(codeInterpreted, dbResult && dbResult.result)
    codeInterpreted = _.isEmpty(codeInterpreted) ?  ['Impossible to interpret the code...'] : codeInterpreted
    codeInterpreted = _.filter(codeInterpreted, (item) => !_.isEmpty(item)).map((item)=>item.trim()).join('\n')
    return response.json({
      id: id,
      isCorrect: isCorrect,
      codeInterpreted: codeInterpreted,
    });
  })
  .catch((error) => response.json({
    status: error.status,
    message: 'cannot access to the mongodb',
  }));
}
