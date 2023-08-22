import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

});

const Todo = model('Todo', TodoSchema);

export default Todo;
