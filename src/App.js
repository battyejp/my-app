import React, { Component } from 'react';
import './App.css';
import NumberOfChildren from './components/NumberOfChildren'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      numberOfChildren: 0,
      hideNumberOfChildren: false
    };   
  }

  handleClick = (event) => {
    alert('A name was submitted: ' + event.target.elements.noChildren.value);
    this.setState({ numberOfChildren: event.target.elements.noChildren.value, hideNumberOfChildren: true});
  };

  render() { 
    return <div className="App">
      <h1>Harry Potter Sorting Hat</h1>
      <NumberOfChildren onClick={this.handleClick} hidden={this.state.hideNumberOfChildren}/>
    </div>
  }
}

export default App;
