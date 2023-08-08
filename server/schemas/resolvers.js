const toDoItem = require("../models/toDoItem");


const resolvers = {
  Query: {
    todo: async () => {
      return await toDoItem.find({});
    }
  },


Mutation:{
  addtodo: async (parent, { name}) => {
    // Create and return the new School object
    return await toDoItem.create({ name });
  },
   
}



}
module.exports = resolvers;
