import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useQuery } from '@apollo/client';
import { GET_Todos } from '../gql/query';
import ListGroup from 'react-bootstrap/ListGroup';

function Home() {

    const {loading,error,data} = useQuery(GET_Todos)
    console.log(data)
   if(loading) return <p>loading</p>
   if(error) return <p>{error.message}</p>

   const todos = data.getTodos; 

  return (
 <div>
      <Form>

        <Form.Label column="lg" lg={2}>
          Large Text
        </Form.Label>
        <Col>
          <Form.Control size="lg" type="text" placeholder="Todo" />
        </Col>

      <Button  >
       Submit
       </Button>
  
    </Form>


    <ListGroup as="ol">
        {todos.map((todo) => (
          <ListGroup.Item as="li" key={todo.id}>
            {todo.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
</div>
  );
}

export default Home