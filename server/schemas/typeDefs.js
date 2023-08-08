const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type toDoItem {
    
    name: String
 
  }

  type Query {
    todo: [toDoItem]
  }



  type Mutation {
    addtodo(name: String!): toDoItem
    # Define the required parameters for updating a class
 
  }

`;

module.exports = typeDefs;
