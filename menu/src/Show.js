import React, { Component } from 'react';
import ButtonCustom from './Button';

class Show extends Component {
    render() {
        return (
            <div>
                
                {/* <button onClick={this.props.clearAll}>clear</button> */}
                 <ul>
                     {this.props.showList.map((value,index)=>{
                         return (
                         <li key={`menu-${index}`}>
                         {value.name}{value.price} บาท 
                         <ButtonCustom valueButton={'ลบ'} evt={this.props.deleteList} index={index} value={value} /></li>)
                     })}
                 </ul>
                 <p> {this.props.total} </p>
            </div>
        );
    }
}

export default Show;