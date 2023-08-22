const db = require('../config/connection');
const Todo = require('../models/Todos')
const TodoData = require('./TodoData.json')

db.once('open', async () => {
  await Todo.deleteMany({});
  await Todo.create(TodoData);

  console.log('all done!');
  process.exit(0);
});
