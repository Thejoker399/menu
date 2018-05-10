import React, { Component } from 'react';

class Show extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.clearAll}>clear</button>
                 <ul>
                     {this.props.showList.map((value,index)=>{
                         return <li key={`menu-${index}`}>{value.name}{value.price} บาท <button onClick={() => this.props.deleteList(index,value)}> ลบ </button></li>
                     })}
                 </ul>
                 <p> {this.props.total} </p>
            </div>
        );
    }
}

export default Show;