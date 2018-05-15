import React, { Component } from 'react';
import ButtonCustom from './Button';
import { Button } from 'antd';
class Show extends Component {
    render() {
        return (
            <div className="box-li" style={{marginTop: '10%'}}>
            <div>
            <div>
             {this.props.children}
             </div>
             <div className="box-total">
            <p>รวม: {this.props.total} </p>
            </div>
            </div>
                <ul className="list">
                    {this.props.showList.map((value, index) => {
                        return <li key={`menu-${index}`}>
                            <div className="box-menu">
                                <div className="box-list-menu">
                                    {value.name}{value.price} บาท
                         </div>
                                <div className="box-delete">
                                    <ButtonCustom 
                                    type="danger"
                                    valueButton={'ลบ'} 
                                    evt={this.props.deleteList} 
                                    index={index} 
                                    value={value} 
                                    />
                                </div>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Show;