import React, { Component, components } from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from "./components/greet"
import Hello from "./components/hello"
import Message from "./components/message"
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Greet name="Test" heroName="Batman"/> */}
        {/* <Greet name="User" heroName="Superman"/> */}
        {/* <Greet name="Name" heroName="Flash"/> */}
        {/* <Hello/> */}
        {/* <Message /> */}
        <HookCounterThree/>
      </div>
    )
  }
}

export default App;
