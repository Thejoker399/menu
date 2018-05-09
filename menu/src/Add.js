import React, { Component } from 'react';
class Add extends Component {
    state={
    //     list:[
    //         { name: "ผัดไทย",price: "50 บาท" },
    //         { name: "บะหมี่", price: "40 บาท" },
    //         { name: "บะหมี่", price: "42 บาท" },
    //         { name: "บะหมี่", price: "35 บาท" },
    //         { name: "บะหมี่", price: "60 บาท" },
    //         { name: "บะหมี่", price: "55 บาท" },
    //         { name: "บะหมี่", price: "40 บาท" }
    //     ],
        name:"",
        price:"",
    }
    // ChangeTodo = (event) => {
    //     this.setState({ menu: event.target.value })
    // }
    addlist = (event) => {
        event.preventDefault()
        if (this.state.name !== '' && this.state.price !== '') {

            const name = this.state.name
            const price = `${this.state.price} บาท`

            this.props.addMenu(name, price)
        }
    }

    // addlistMenu =(event)=>{
    //     event.preventDefault()
    //     const menu = this.state.menu
    //     if(menu){
    //         this.props.addlist(menu)
    //         this.setState({menu:''})
    //     }  
    // }
    onChangeName = (event) => {
        this.setState({ name: event.target.value })
    }
    onChangePrice = (event) => {
        this.setState({ price: event.target.value })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addlist}>
                    <input type='text' onChange={this.onChangeName} />
                    <input type='number' min="1" onChange={this.onChangePrice} />
                    <button type='submit'>addlist</button>
                </form>


                <ul>
          
                    {
                    this.props.list.map((value, index) => <li key={`menu-${index}`}>{value.name}{value.price}ลบ</li>)

                    }
              


                </ul>
            </div>
        );
    }
}

export default Add;