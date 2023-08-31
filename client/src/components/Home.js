import React from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import TodoList from './TodoList'; // Import the TodoList component
import { useMutation } from '@apollo/client';
// import { useQuery } from '@apollo/client';
import { GET_Todos } from '../gql/query';
import { ADD_TODO } from '../gql/mutation';
function Home() {

    const [addTodo] = useMutation(ADD_TODO, {
        refetchQueries: [{ query: GET_Todos }], // Refetch the list of todos after adding a new one
      });
  
      

      
  const handleSubmit = async (e) => {
    e.preventDefault();
    const todoText = e.target.elements.todo.value; // Get the input value from the form

    // Call the addTodo mutation with the input text
    try {
      await addTodo({ variables: { title: todoText } });
      // Optionally, clear the input field or handle success as needed
    } catch (error) {
      // Handle error if needed
      console.error('Error adding Todo:', error);
    }
  };




  return (
    
    <div className='main'>

      <Form style={{ marginBottom:'25px'}} onSubmit={handleSubmit}>
       <div style={{display:'flex', position:'relative', top:'15px'}} >
        <Col>
         <Form.Control style={{boxShadow:'2px 2px' }} size="lg" type="text" placeholder="" name="todo" />
          </Col>
          <Button style={{width:'20%', backgroundColor:'green', border:'2.5px black solid' }} type="submit">Add Todo</Button>
          </div>
         </Form>
        <TodoList  />
    </div>
  );
}

export default Home;
