var getResultOfId = require('../support/assignments').getResultOfId;
var _ = require('lodash');
var executeCommand = require('../support/commandExecutor');

// compare the result of the code of the user and the correct answered
var isUserCodeRight = (userAnswered, result) => {
  if (_.isEmpty(userAnswered)) return false;
  userAnswered = userAnswered.map(function(line) { return line.trim()})
  return _.filter(result, function(code) {
    var codeMatched = userAnswered.indexOf(code.trim()) > -1
    return !codeMatched
  }).length === 0;
};

var interpretCode = function(userCode, language) {
  return executeCommand(userCode, language);
}

module.exports = (request, response) => {
  var id = request.params.id;
  return getResultOfId(id)
  .then(function(dbResult) {
    var userAnswered = request.body && request.body.code;
    var language = dbResult.language;
    return interpretCode(userAnswered, language)
      .then(function(code) {
        return _.extend({}, dbResult, {
          codeInterpreted: code.split('\n'),
        })
      })
  })
  .then((result) => {
    var isCorrect = isUserCodeRight(result.codeInterpreted, result && result.result)
    var emptyCode = 'Impossible to interpret the code...';
    codeInterpreted = _.isEmpty(result.codeInterpreted) ? [emptyCode] : result.codeInterpreted;
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
