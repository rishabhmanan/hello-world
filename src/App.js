import React, { Component, components } from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from "./components/greet"
import Hello from "./components/hello"
import Message from "./components/message"

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Greet name="Test" heroName="Batman"/> */}
        {/* <Greet name="User" heroName="Superman"/> */}
        {/* <Greet name="Name" heroName="Flash"/> */}
        {/* <Hello/> */}
        <Message />
      </div>
    )
  }
}

export default App;
