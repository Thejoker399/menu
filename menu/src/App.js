import React, { Component } from 'react';
import Header from './Header.js';
import Total from './Total';
import './App.css';
import Add from './Add'

class App extends Component {
  state = {
    list: [
      { name: "ผัดไทย", price: "50 บาท" },
      { name: "บะหมี่", price: "40 บาท" },
      { name: "บะหมี่", price: "42 บาท" },
      { name: "บะหมี่", price: "35 บาท" },
      { name: "บะหมี่", price: "60 บาท" },
      { name: "บะหมี่", price: "55 บาท" },
      { name: "บะหมี่", price: "40 บาท" }
    ],
  }
  addMenu = (name, price) => {
    // console.log(name)
    if (name !== '' && price !== '') {
      const menu = { name, price }
      const list = this.state.list
      list.push(menu)
      this.setState({
        list,
      })
    }

  }

  deleteMenu=(index) =>{
    this.state.list.splice(index, 1);

  }

  render() {
    return (
      <div>
        {/* <Header />
        <Add addMenu={this.addMenu} list={this.state.list} />
        <Total /> */}
      </div>
    );
  }
}

export default App;
