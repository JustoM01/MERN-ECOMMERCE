import {  gql } from 'apollo-server-express';



const typeDefs = gql`



type Todo {
 id:ID
 title: String

}




  type Query {
    welcome: String
    getTodos:[Todo]
    getTodo(id: ID!): Todo
  }


type Mutation{
addTodo ( title:String!):Todo
deleteTodo(id:ID!):Todo

}

`;



export default typeDefs;