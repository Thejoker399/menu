import React, { Component } from 'react';
class Add extends Component {
    state={

        name:"",
        price:"",
    }
        setStateNumberRandom=(evt)=>{
            this.setState({
                numberRandom: evt.target.value
            })
        }
       randommenu=()=>{
           
        const newlist = this.state.list
        for(let i=0 ; i<this.state.numberRandom ; i++){
            let randomlist = Math.floor(Math.random() * newlist.length);
            console.log(newlist[randomlist])
        }
        
        }  
    
 
    addlist = (event) => {
        event.preventDefault()
        if (this.state.name !== '' && this.state.price !== '') {

            const name = this.state.name
            const price = `${this.state.price} บาท`

            this.props.addMenu(name, price)
        }
    }


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
                {/* <ul>
                    {
                    this.props.list.map((value, index) => <li key={`menu-${index}`}> {value.name}{value.price} <button onClick={() =>this.props.deleteMenu(index)}> ลบ </button></li>)

                    }
                </ul> */}
                
                <button onClick={this.clearAll}>clear</button>   
               
            </div>
        );
    }
}

export default Add;