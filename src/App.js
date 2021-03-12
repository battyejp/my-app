import React, { Component } from 'react';
import './App.css';
import Input from './components/Input'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      numberOfChildren: 0,
      hideNumberOfChildren: false
    };   
  }

  handleNoChildrenEntered = (event) => {
    alert('A name was submitted: ' + event.target.elements.noChildren.value);
    this.setState({ numberOfChildren: event.target.elements.noChildren.value, hideNumberOfChildren: true});
  };

  handleNameEntered = (event) => {
    alert('A name was submitted: ' + event.target.elements.childName.value);
  };

  render() { 
    return <div className="App">
      <h1>Harry Potter Sorting Hat</h1>
      <Input onClick={this.handleNoChildrenEntered} hidden={this.state.hideNumberOfChildren} placeHolder={"Enter number of children."} inputName={"noChildren"} />
      <Input onClick={this.handleNameEntered} hidden={false} placeHolder={"Enter child name."} inputName={"childName"}/>
    </div>
  }
}

export default App;
