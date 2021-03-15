import React, { Component } from 'react';
import Input from './components/Input'
import SchoolRoster from './components/SchoolRoster'
import { Container, Row, Col } from 'react-bootstrap';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      setupComplete: false,
      maxChildrenPerHouse: 0,
    };   
  }

  handleNoChildrenEntered = (event) => {
    event.preventDefault();
    const totalAllowedInHouse = Math.ceil(event.target.elements.noChildren.value / 4);

    this.setState({ 
      maxChildrenPerHouse: totalAllowedInHouse,
      setupComplete: true,
    });
  };

  render() { 
    return <Container>
      <Row>
        <Col>
          <h1>Harry Potter Sorting Hat</h1>
        </Col>
      </Row>
      <Row className={this.state.setupComplete ? 'hidden' : ''}>
        <Col>
          <Input onClick={this.handleNoChildrenEntered} placeHolder={"Enter number of children."} inputName={"noChildren"} />
        </Col>
      </Row>
      <SchoolRoster hidden={!this.state.setupComplete} maxChildrenPerHouse={this.state.maxChildrenPerHouse}/>
    </Container>
  }
}

export default App;
