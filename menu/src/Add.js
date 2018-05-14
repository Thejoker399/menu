import React, { Component } from 'react';
<<<<<<< HEAD
import { Modal, Button, Icon } from 'antd';
import { Input } from 'antd';
import ButtonCustom from './Button';
=======
import { Modal, Button, Input, Icon } from 'antd';
>>>>>>> c8ccccd5f20a7d5d021807e58b3b63c0f939363e

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
            <div>

                {/* <form onSubmit={this.props.addlist}>
                    <input type='text' onChange={this.props.onChangeName} />
                    <input type='number' min="1" onChange={this.props.onChangePrice} />
                    <button type='submit'>addlist</button>
                </form> */}
                <ul className="list">

                    {
                        this.props.list.map((value, index) => {
<<<<<<< HEAD
<<<<<<< HEAD
                            return <li key={`menu-${index}`}>
                                <ButtonCustom valueButton={'+'} evt={this.props.addListShow} index={index} value={value}/>
                                {value.name}{value.price} บาท
                                <ButtonCustom valueButton={'ลบ'} evt={this.props.deleteMenu} index={index} value={value} />
                            </li>
=======
                            return <li key={`menu-${index}`}><button onClick={() => this.props.addListShow(index, value)}> + </button>  {value.name}{value.price} บาท <button onClick={() => this.props.deleteMenueiei(index)}> ลบ </button></li>
>>>>>>> c8ccccd5f20a7d5d021807e58b3b63c0f939363e
=======
                            return <li key={`menu-${index}`}><button onClick={() => this.props.addListShow(index, value)}> + </button>  {value.name}{value.price} บาท <button onClick={() => this.props.deleteMenu(index)}> ลบ </button></li>
>>>>>>> feature/antd
                        })
                    }
                </ul>
                <Button  className="button-width" type="primary" onClick={this.showModal}>เพิ่มเมนู</Button>
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
                        <Input prefix={<Icon type="credit-card" />}  type='number' min="1" onChange={this.props.onChangePrice} />
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Add;