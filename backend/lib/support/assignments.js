var mongoose = require('./database');
var _ = require('lodash');

var Assignments = mongoose.model('Assignments', {
  id: Number,
  description: String,
  editor: String,
  result: [String],
  language: String,
});

var getAssignementsFromDb = (mongoose) => (projection) => (id) => {
  return Assignments.findOne({id: id}, _.extend({ _id:0 }, projection))
}

var getAssignements = getAssignementsFromDb(mongoose);

module.exports = {
  getDetailOfId: getAssignements({ description: 1, editor: 1, language: 1 }),
  getResultOfId: getAssignements({ result: 1, language: 1 }),
  Assignments: Assignments,
}
