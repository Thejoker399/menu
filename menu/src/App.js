import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';
import Add from './Add'
import Show from './Show'
import Random from './Random'
import ButtonCustom from './Button'
import Index from '../src/layout/index'

class App extends Component {
  constructor() {
    super()
    this.state = {
      lists: [
        { name: "ผัดไทย", price: 50 },
        { name: "บะหมี่", price: 40 },
        { name: "ผัดผักคะน้า", price: 42 },
        { name: "ผัดกระเพรา", price: 35 },
        { name: "สุกี้น้ำ", price: 60 },
        { name: "สุกี้แห้ง", price: 55 },
        { name: "ข้าวมันไก่", price: 40 }
      ],
      showList: [],
      name: "",
      price: "",
      total: 0,
      numberRandom: 0,
      randomlist: [],
      totalRandom: [],
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
      total: this.state.total + parseInt(price)
    })
    // console.log(this.state.showList)
    //total
    console.log(this.state.total)
  }

  deleteList = (index, value) => {
    let price = value.price
    let arr = [...this.state.showList]
    // console.log(arr)
    arr.splice(index, 1);
    // console.log(arr)
    this.setState({
      showList: arr,
      total: this.state.total - price
    });
  }

  deleteMenu = (index, value) => {
    // console.log('index', index)
    const arr = [...this.state.lists]
    // console.log(arr)
    arr.splice(index, 1);
    console.log(arr)
    this.setState({
      lists: arr
    });
  }

  setStateNumberRandom = (evt) => {
    this.setState({
      numberRandom: evt.target.value
    })
  }

  randommenu = (event) => {
    const newlist = this.state.lists
    for (let i = 0; i < this.state.numberRandom; i++) {
      let randomlist = Math.floor(Math.random() * newlist.length);
      let arr = this.state.randomlist
      let totalRandom = this.state.totalRandom
      this.setState({
        randomlist: arr.push(newlist[randomlist]),
        totalRandom: totalRandom.push(newlist[randomlist].price)
      })
    }
    this.setState({
      showList: this.state.showList.concat(this.state.randomlist),
      total: this.state.total + this.state.totalRandom.reduce((sum, value) => sum + value),
      randomlist: [],
      totalRandom: []
    })
  }

  onChangeName = (event) => {
    console.log(event.target.value)
    this.setState({ name: event.target.value })
  }

  onChangePrice = (event) => {
    console.log(event.target.value)
    this.setState({ price: event.target.value })
  }

  addlist = (event) => {
    event.preventDefault()
    if (this.state.name !== '' && this.state.price !== '') {
      const name = this.state.name
      const price = this.state.price
      const menu = { name, price }
      let list = []
      list.push(menu)
      this.setState({
        lists: this.state.lists.concat(list),
      })
    }
  }

  clearAll = () => {
    let clearlist = this.state.showList
    clearlist.splice(0, clearlist.length)
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
            <Index>
              <Add
                addlist={this.addlist}
                list={this.state.lists}
                deleteMenu={this.deleteMenu}
                addListShow={this.addListShow}
                setStateNumberRandom={this.setStateNumberRandom}
                // randommenu={this.randommenu}
                onChangeName={this.onChangeName}
                onChangePrice={this.onChangePrice}
              />
              <Random
                randommenu={this.randommenu}
                setStateNumberRandom={this.setStateNumberRandom}
              />
              </Index>
          </div>
         
            <div className="box-two">
              <Show
                showList={this.state.showList}
                total={this.state.total}
                deleteList={this.deleteList}
              >
                <ButtonCustom
                  valueButton={'Clear'} evt={this.clearAll}
                />
              </Show>
            </div>

          </div>
        </div>
        );
      }
    }
    
    export default App;
