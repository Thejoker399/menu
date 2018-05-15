import React, { Component } from 'react';
import ButtonCustom from './Button';
import { Button } from 'antd';
class Show extends Component {
    render() {
        return (
<<<<<<< HEAD
            <div className="box-li">
                <div>
                    <div>
                        {this.props.children}
                    </div>
                    <div className="box-total">
                        <p>รวม: {this.props.total} </p>
                    </div>
                </div>
=======
            <div className="box-li" style={{marginTop: '10%'}}>
            <div>
            <div>
             {this.props.children}
             </div>
             <div className="box-total">
            <p>รวม: {this.props.total} </p>
            </div>
            </div>
>>>>>>> b6fccc3a2e8be2c0200482d98757f48320655ae5
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