import {  gql } from '@apollo/client';



 export const GET_Todos = gql`
  query getTodos {
    getTodos {
      id
      title
   
    }
  }
`;