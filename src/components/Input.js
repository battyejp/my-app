import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Col } from 'react-bootstrap';

function Input (props) {
  function handleSubmit(event){
    event.preventDefault();
    props.onClick(event);
  }

  return (<div>
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Col>
          <Form.Control placeholder={props.placeHolder} name={props.inputName}/>
        </Col>
        <Col>
          <Button type="submit" disabled={props.disabled}>Submit</Button>
        </Col>
      </Form.Row>
    </Form>
  </div>);
}

export default Input;
