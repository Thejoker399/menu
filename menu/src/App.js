import React, { Component } from 'react';
import Header from './Header.js';
import Total from './Total';
import './App.css';
import Add from './Add'
import Show from './Show'

class App extends Component {
  constructor() {
    super()
    this.state = {
      lists: [
        { name: "ผัดไทย", price: 50 },
        { name: "บะหมี่", price: 40 },
        { name: "บะหมี่", price: 42 },
        { name: "บะหมี่", price: 35 },
        { name: "บะหมี่", price: 60 },
        { name: "บะหมี่", price: 55 },
        { name: "บะหมี่", price: 40 }
      ],
      showList: [],
      name: "",
      price: "",
      total: 0,
      numberRandom: 0
    }
  }
  
  addListShow = (index, value) => {
    let addList = value
    let price = value.price
    // console.log(addList)
    let pushList = []
    pushList.push(addList)
    this.setState({
      showList: this.state.showList.concat(pushList),
      total: this.state.total+price
    })
    // console.log(this.state.showList)
    //total
    console.log(this.state.total)
  }

  deleteList = (index,value) => {
    let price = value.price
    let arr = [...this.state.showList]
    // console.log(arr)
    arr.splice(index, 1);
    // console.log(arr)
    this.setState({ 
      showList: arr ,
      total : this.state.total-price
    });
  }

  deleteMenu = (index) => {
    // console.log('index', index)
    let arr = [...this.state.lists]
    // console.log(arr)
    arr.splice(index, 1);
    // console.log(arr)
    this.setState({ 
      lists: arr 
    });
  }

  setStateNumberRandom = (evt) => {
    this.setState({
      numberRandom: evt.target.value
    })
  }

  randommenu = () => {
    const newlist = this.state.lists
    for (let i = 0; i < this.state.numberRandom; i++) {
      let randomlist = Math.floor(Math.random() * newlist.length);
      // console.log(newlist[randomlist])
    }

  }

  onChangeName = (event) => {
    console.log(event.target.value)
    this.setState({ name: event.target.value })
  }

  onChangePrice = (event) => {
    console.log(event.target.value)
    this.setState({ price: event.target.value })
  }

  addlist = () => {
    if (this.state.name !== '' && this.state.price !== '') {
      const name = this.state.name
      const price = this.state.price
      const menu = { name, price }
      let list = []
      list.push(menu)
      this.setState({
        lists: this.state.lists.concat(list)
      })

    }
  }

  clearAll = () => {
    let clearlist = this.state.showList
    clearlist.splice(0,clearlist.length)
    this.setState({
      showList: clearlist,
      total: 0
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="box">
          <div className="box-one">
            <Add
              addlist={this.addlist}
              list={this.state.lists}
              deleteMenu={this.deleteMenu}
              addListShow={this.addListShow}
              setStateNumberRandom={this.setStateNumberRandom}
              randommenu={this.randommenu}
              onChangeName={this.onChangeName}
              onChangePrice={this.onChangePrice}
            />
          </div>
          <div className="box-two">
            <Show 
              showList={this.state.showList} 
              deleteList={this.deleteList} 
              total={this.state.total}
              clearAll={this.clearAll}
            />
          </div>
        </div>
        {/* <Header />
        <Add addMenu={this.addMenu} list={this.state.list} />
        <Total /> */}

      </div>
    );
  }
}

export default App;
