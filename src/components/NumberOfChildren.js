import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Col, Container } from 'react-bootstrap';

function NumberOfChildren (props) {
  function handleSubmit(event){
    event.preventDefault();
    props.onClick(event);
  }

  return (<div className={props.hidden ? 'hidden' : ''}>
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Col>
            <Form.Control placeholder="Enter number of children" name="noChildren"/>
          </Col>
          <Col>
            <Button type="submit">Submit</Button>
          </Col>
        </Form.Row>
      </Form>
    </Container>
  </div>);
}

export default NumberOfChildren;
