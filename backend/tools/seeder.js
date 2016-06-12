var mongoose = require('../lib/support/database');
var Assignments = require('../lib/support/assignments').Assignments;

Assignments.create([
  {
    id: 1,
    description: 'desc 1',
    editor: 'editor 1',
    language: 'Python',
    result: ['test', 'test2'],
  },
  {
    id: 2,
    description: 'desc 2',
    editor: 'editor 2',
    language: 'R',
    result: ['test', 'test2'],
  },
])
.finally(() => mongoose.connection.close())
.then(() => console.log('db seeded!'))
.catch(console.error)
