import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { GET_Todos } from '../gql/query';
import { DELETE_TODO } from '../gql/mutation';
import { ADD_TODO } from '../gql/mutation';
import ListGroup from 'react-bootstrap/ListGroup';

function Home() {
  const { loading, error, data } = useQuery(GET_Todos);




 
    const [addTodo] = useMutation(ADD_TODO, {
      refetchQueries: [{ query: GET_Todos }], // Refetch the list of todos after adding a new one
    });
  


  const [deleteTodo] = useMutation(DELETE_TODO, {
    // Refetch the query to update the list of todos after deletion
    refetchQueries: [{ query: GET_Todos }],
  });

  console.log(data)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const todos = data.getTodos; // Assuming your query returns an array under "getTodos"




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


  const handleDeleteTodo = (id) => {
    // Call the deleteTodo mutation with the provided ID
    deleteTodo({ variables: { id } })
      .then((response) => {
        // Handle success if needed
        console.log('Todo deleted:', response);
      })
      .catch((error) => {
        // Handle error if needed
        console.error('Error deleting Todo:', error);
      });
  };


  return (
    <div>
     <Form onSubmit={handleSubmit}>
        <Form.Label column="lg" lg={2}>
          Large Text
        </Form.Label>
        <Col>
          <Form.Control size="lg" type="text" placeholder="Todo" name="todo" />
        </Col>
        <Button type="submit">Submit</Button>
      </Form>
      
      <ListGroup as="ol">
        {todos.map((todo) => (
          <ListGroup.Item as="li" key={todo.id}>
            {todo.title}
            <Button
              variant="danger"
              onClick={() => handleDeleteTodo(todo.id)}
              className="ml-2"
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Home;
