import React, { Component } from 'react';
class Add extends Component {
    state={
        list:[''],
        menu:''
    }
    addlist=(event)=>{
        event.preventDefault()
        const menu = this.state.menu
        const lists = this.state.list
        lists.push(menu)
        this.setState({
            list: lists ,
            menu: ''
        })
        
    }
    onChangeMenu=(event)=>{
       this.setState({menu: event.target.value})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addlist}>
                <input type='text' value={this.state.menu} onChange={this.onChangeMenu}></input>
                <button type='submit'>addlist</button>
                </form>
                <ul>
                    {
                        this.state.list.map((value,index)=><li>{value}</li>)
                    }
                    </ul>
            </div>
        );
    }
}

export default Add;