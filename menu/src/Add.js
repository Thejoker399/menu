import React, { Component } from 'react';
import { Modal, Button, Icon } from 'antd';
import { Input } from 'antd';

class Add extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.addlist}>
                    <input type='text' onChange={this.props.onChangeName} />
                    <input type='number' min="1" onChange={this.props.onChangePrice} />
                    <button type='submit'>addlist</button>
                </form>
                <ul>

                    {
                        this.props.list.map((value, index) => {
                            return <li key={`menu-${index}`}>
                            <button onClick={() => this.props.addListShow(index,value)}> + 
                            </button>  {value.name}{value.price} บาท
                             {/* <button onClick={() => this.props.deleteMenu(index)}> ลบ </button>
                              */}
                             
                             </li>
                        })
                    }
                </ul>
               
                {/* <p>{}</p> */}
            </div>
        );
    }
}

export default Add;