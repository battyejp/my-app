import React, { Component } from 'react';
import Input from './components/Input'
import House from './components/House'
import SelectedHouse from './components/SelectedHouse'
import { Container, Row, Col } from 'react-bootstrap';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      hideNumberOfChildren: false,
      selectedStudent: "",
      selectedHouse: null,
      selectedHouseClass: "hidden",
      canEnterChild: true,
      maxChildrenPerHouse: 0,
      houses: [
        { name: "Gryffindor", students: [] },
        { name: "Ravenclaw", students: [] },
        { name: "Hufflepuff", students: [] },
        { name: "Slytherin", students: [] },
      ]
    };   

  }

  handleNoChildrenEntered = (event) => {
    event.preventDefault();
    const totalAllowedInHouse = Math.ceil(event.target.elements.noChildren.value / this.state.houses.length);

    this.setState({ 
      maxChildrenPerHouse: totalAllowedInHouse,
      hideNumberOfChildren: true,
    });
  };

  handleNameEntered = (event) => {
    let houses = {
      ...this.state.houses
    };

    let houseNumber = 0;
    let house = null;
    const student = event.target.elements.childName.value;

    do {
      houseNumber = Math.floor(Math.random() * 4);
      house = houses[houseNumber];
    } while (house.students.length - 1 > this.state.maxChildrenPerHouse) //i.e house not full
    
    house.students.push(student);
    houses[houseNumber].students = house.students;

    setTimeout(() => {
      //Call after Name has appeared
      this.setState({
        selectedHouseClass: "hidden",
        canEnterChild: true
      });
    }, 5000);

    this.setState({
      houses: houses,
      selectedStudent: student,
      selectedHouseClass: "fade-in",
      canEnterChild: false,
      selectedHouse: house
    });
  };

  render() { 
    return <Container>
      <Row>
        <Col>
          <h1>Harry Potter Sorting Hat</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* <NameForm onClick={this.handleNoChildrenEntered} /> */}
          <Input onClick={this.handleNoChildrenEntered} hidden={this.state.hideNumberOfChildren} placeHolder={"Enter number of children."} inputName={"noChildren"} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Input onClick={this.handleNameEntered} hidden={false} placeHolder={"Enter child name."} inputName={"childName"} disabled={!this.state.canEnterChild} />
        </Col>
      </Row>
      <Row>
        <Col>
          <SelectedHouse className={this.state.selectedHouseClass} text={this.state.selectedStudent + " you have been placed in " + this.state.selectedHouse?.name}/>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <House students={this.state.houses[0].students} name={"Gryffindor"} /> 
        </Col>
        <Col md={3}>
          <House students={this.state.houses[1].students} name={"Ravenclaw"} /> 
        </Col>
        <Col md={3}>
          <House students={this.state.houses[2].students} name={"Hufflepuff"} /> 
        </Col>
        <Col md={3}>
          <House students={this.state.houses[3].students} name={"Slytherin"} /> 
        </Col>
      </Row>
    </Container>
  }
}

export default App;
