import React, { Component } from 'react';
<<<<<<< HEAD
import { Modal, Button, Input, Icon } from 'antd';
=======
import { Modal, Button, Icon } from 'antd';
import { Input } from 'antd';
import ButtonCustom  from './Button';
>>>>>>> 87ac9b290545dda740da85e69dbf7d395554a3d8

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
<<<<<<< HEAD
                </form> */}
                <ul className="list">

                    {
                        this.props.list.map((value, index) => {
                            return <li key={`menu-${index}`}><button onClick={() => this.props.addListShow(index, value)}> + </button>  {value.name}{value.price} บาท <button onClick={() => this.props.deleteMenueiei(index)}> ลบ </button></li>
                        })
                    }
                </ul>
                <input onChange={this.props.setStateNumberRandom} />
                <button onClick={this.props.randommenu}> random </button>
=======
                </form>
                <ul>
                    {
                        this.props.list.map((value, index) => {
                            return <li key={`menu-${index}`}>
                                <button onClick={() => this.props.addListShow(index, value)}> + </button> 
                                {value.name}{value.price} บาท
                                <ButtonCustom valueButton={'ลบ'} evt={this.props.deleteMenu(value, index)} />
                            
                            </li>
                        })
                    }
                </ul>

>>>>>>> 87ac9b290545dda740da85e69dbf7d395554a3d8
                {/* <p>{}</p> */}

                <Button type="primary" onClick={this.showModal}>เพิ่มเมนู</Button>
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