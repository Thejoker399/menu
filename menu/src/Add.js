import React, { Component } from 'react';
import { Modal, Button, Icon } from 'antd';
import { Input } from 'antd';
import ButtonCustom from './Button';

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
                                <ButtonCustom valueButton={'+'} evt={this.props.addListShow} index={index} value={value}/>
                                {value.name}{value.price} บาท
                                <ButtonCustom valueButton={'ลบ'} evt={this.props.deleteMenu} index={index} value={value} />
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