import { gql } from '@apollo/client';

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
      title
    }
  }
`;




export const ADD_TODO = gql`
  mutation AddTodo($title: String!) {
    addTodo(title: $title) {
      id
      title
    }
  }
`;





  export const UPDATE_TODO_MUTATION = gql`
  mutation UpdateTodo($_id: ID!, $title: String!) {
    updateTodo(_id: $_id, title: $title) {
      _id
      title
    }
  }
`;
