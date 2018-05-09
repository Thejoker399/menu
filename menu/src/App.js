import React, { Component } from 'react';
import Header from './Header.js';
import Total from './Total';
import './App.css';
import Add from './Add'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Add />
        <Total/>
      </div>
    );
  }
}

export default App;
