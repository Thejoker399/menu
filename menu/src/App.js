import React, { Component } from 'react';
import Header from './Header.js';
import Total from './Total';
import './App.css';
import Add from './Add'
import Show from './Show'

class App extends Component {
  constructor(){
    super()
    this.state = {
      lists: [
        { name: "ผัดไทย", price: "50 บาท" },
        { name: "บะหมี่", price: "40 บาท" },
        { name: "บะหมี่", price: "42 บาท" },
        { name: "บะหมี่", price: "35 บาท" },
        { name: "บะหมี่", price: "60 บาท" },
        { name: "บะหมี่", price: "55 บาท" },
        { name: "บะหมี่", price: "40 บาท" }
      ]
    }
  }
  // componentDidMount =()=>
  addMenu = (name, price) => {
    // console.log(name)
    if (name !== '' && price !== '') {
      const menu = { name, price }
      const list = this.state.lists
      list.push(menu)
      this.setState({
        lists: list
      })
    }

  }
  

  deleteMenu = (index) => {
    console.log('index', index)
    let arr = [...this.state.lists]
    // console.log(arr)
    arr.splice(index, 1);
    // console.log(arr)
    this.setState({lists: arr});
  }

  totalPrice =()=>{

  }

  render() {
    return (
      <div>
        <Header />
        {console.log(...this.state.lists)}
        <Add addMenu={this.addMenu} list={this.state.lists} deleteMenu={this.deleteMenu} />
        <Show addMenu={this.addMenu} list={this.state.lists} deleteMenu={this.deleteMenu} />
        {/* <Header />
        <Add addMenu={this.addMenu} list={this.state.list} />
        <Total /> */}

      </div>
    );
  }
}

export default App;
