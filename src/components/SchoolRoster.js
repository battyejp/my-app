import React, { Component } from 'react';
import Input from './Input'
import House from './House'
import SelectedHouse from './SelectedHouse'
import { Row, Col } from 'react-bootstrap';

class SchoolRoster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStudent: "",
      selectedHouse: null,
      selectedHouseClass: "hidden",
      canEnterChild: true,
      houses: [
        { name: "Gryffindor", students: [] },
        { name: "Ravenclaw", students: [] },
        { name: "Hufflepuff", students: [] },
        { name: "Slytherin", students: [] },
      ]
    };
  }

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
    } while (house.students.length - 1 > this.props.maxChildrenPerHouse) //i.e house not full

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
    return <div className={ this.props.hidden ? 'hidden' : '' }>
      <Row>
        <Col>
          <Input onClick={this.handleNameEntered} hidden={false} placeHolder={"Enter child name."} inputName={"childName"} disabled={!this.state.canEnterChild} />
        </Col>
      </Row>
      <Row>
        <Col>
          <SelectedHouse className={this.state.selectedHouseClass} text={this.state.selectedStudent + " you have been placed in " + this.state.selectedHouse?.name} />
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <House house={this.state.houses[0]} />
        </Col>
        <Col md={3}>
          <House house={this.state.houses[1]} />
        </Col>
        <Col md={3}>
          <House house={this.state.houses[2]} />
        </Col>
        <Col md={3}>
          <House house={this.state.houses[3]} />
        </Col>
      </Row>
    </div>
  }
}

export default SchoolRoster;