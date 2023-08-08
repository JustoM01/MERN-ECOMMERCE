const { Schema, model } = require('mongoose');

const toDoItemSchema = new Schema(
  {
  name:{
    type:String,
    required:true
  }


  }
);

const toDoItem = model('toDoItem', toDoItemSchema);

module.exports = toDoItem;
