import React from 'react';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { GET_Todos } from '../gql/query';
import { DELETE_TODO } from '../gql/mutation';
import { ListGroup, Button } from 'react-bootstrap';

function TodoList() {
  const { loading, error, data } = useQuery(GET_Todos);
console.log(data)
  const [deleteTodo] = useMutation(DELETE_TODO, {
    refetchQueries: [{ query: GET_Todos }],
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const todos = data.getTodos;

  const handleDeleteTodo = (id) => {
    deleteTodo({ variables: { id } })
      .then((response) => {
        console.log('Todo deleted:', response);
      })
      .catch((error) => {
        console.error('Error deleting Todo:', error);
      });
  };



  


  return (
    <ListGroup style={{width:'60%',margin:'auto', boxShadow:'2px 2px' }} as="ol">
      {todos.map((todo) => (
        <ListGroup.Item as="li" key={todo.id}>
          {todo.title}
              <Button
              variant="danger"
               onClick={() => handleDeleteTodo(todo.id)}
               className="ml-2"
              style={{float:'right'}}
              >
            Delete
             </Button >
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TodoList;
