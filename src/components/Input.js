import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Col, Container } from 'react-bootstrap';

function Input (props) {
  function handleSubmit(event){
    event.preventDefault();
    props.onClick(event);
  }

  return (<div className={props.hidden ? 'hidden' : ''}>
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Col>
            <Form.Control placeholder={props.placeHolder} name={props.inputName}/>
          </Col>
          <Col>
            <Button type="submit">Submit</Button>
          </Col>
        </Form.Row>
      </Form>
    </Container>
  </div>);
}

export default Input;
