import React, { Component } from 'react';
import { Modal, Button, Input, Icon } from 'antd';
import ButtonCustom from './Button';

class Add extends Component {
    state = { visible: false }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    // handleOk = (e) => {
    //     console.log(e);
    //     this.setState({
    //         visible: false,
    //     });
    // }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    render() {
        return (
            <div className="ADD font">
                <div className="box-button">
                    <Button className="button-width" type="primary" onClick={this.showModal}>เพิ่มเมนู</Button>
                    <Modal
                        title="เพิ่มเมนู"
                        visible={this.state.visible}
                        onOk={this.props.addlist}
                        onCancel={this.handleCancel}
                    >
                        <div >
                            <p>ชื่อเมนู * : </p>
                            <Input prefix={<Icon type="profile" />} type='text' onChange={this.props.onChangeName} />
                        </div>
                        <div className="distance">
                            <p>ราคาไม่ต่ำกว่า 0 : </p>
                            <Input prefix={<Icon type="credit-card" />} type='number' min="1" onChange={this.props.onChangePrice} />
                        </div>
                    </Modal>
                </div>

                {/* <form onSubmit={this.props.addlist}>
                    <input type='text' onChange={this.props.onChangeName} />
                    <input type='number' min="1" onChange={this.props.onChangePrice} />
                    <button type='submit'>addlist</button>
                </form> */}
                <div className="box-li">
                    <ul className="list">
                        {
                            this.props.list.map((value, index) => {

                                return <li key={`menu-${index}`}>
                                    <div className="box-menu">
                                        <div className="box-add">
                                            <ButtonCustom
                                                valueButton={'+'}
                                                evt={this.props.addListShow}
                                                index={index}
                                                value={value}
                                            />
                                        </div>
                                        <div className="box-list-menu">
                                            {value.name}{value.price} บาท
                                   </div>
                                        <div className="box-delete">
                                            <ButtonCustom
                                                type="danger"
                                                valueButton={'ลบ'}
                                                evt={this.props.deleteMenu}
                                                index={index} value={value}
                                            />
                                        </div>
                                    </div>
                                </li>

                            })
                        }
                    </ul>
                </div>
                <style jsx> {`
                    @import url('https://fonts.googleapis.com/css?family=Prompt');
                    .font {
                        font-family: 'Prompt', sans-serif;
                    }
                    `}
                </style>
            </div>
        );
    }
}

export default Add;