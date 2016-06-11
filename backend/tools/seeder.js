var mongoose = require('../lib/support/database');
var Assignments = require('../lib/support/assignments').Assignments;

Assignments.create([
  {
    id: 1,
    description: 'desc',
    editor: 'editor',
    result: ['test', 'test2'],
  },
  {
    id: 2,
    description: 'desc',
    editor: 'editor',
    result: ['test', 'test2'],
  },
])
.finally(() => mongoose.connection.close())
.then(() => console.log('db seeded!'))
.catch(console.error)
