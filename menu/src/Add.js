import React, { Component } from 'react';
import { Modal, Button, Icon } from 'antd';
import { Input } from 'antd';

class Add extends Component {
    state = {

        name: "",
        price: "",
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }

    setStateNumberRandom = (evt) => {
        this.setState({
            numberRandom: evt.target.value
        })
    }
    randommenu = () => {

        const newlist = this.state.list
        for (let i = 0; i < this.state.numberRandom; i++) {
            let randomlist = Math.floor(Math.random() * newlist.length);
            console.log(newlist[randomlist])
        }

    }


    addlist = (event) => {
        event.preventDefault()
        if (this.state.name !== '' && this.state.price !== '') {

            const name = this.state.name
            const price = `${this.state.price} บาท`

            this.props.addMenu(name, price)
            this.setState({
                visible: false,
            });

        }
    }


    onChangeName = (event) => {
        this.setState({ name: event.target.value })
    }
    onChangePrice = (event) => {
        this.setState({ price: event.target.value })
    }
    render() {
        return (
            <div>
                {/* <Button type="primary" onClick={this.showModal} className="block">เพิ่มเมนู</Button>
                <Modal
                    title="เพิ่มเมนู"
                    visible={this.state.visible}
                    onOk={this.addlist}
                    onCancel={this.handleCancel}
                >

                    <form onSubmit={this.addlist}>
                        <div className="row">
                        <p >ชื่อเมนู : </p><Input prefix={<Icon type="form" />} type='text' onChange={this.onChangeName} />
                        </div>
                        <div className="row">
                        <p >ราคา : </p><Input prefix={<Icon type="credit-card" />}  type='number' min="1" onChange={this.onChangePrice} /> 
                        </div >

                    </form>
                </Modal> */}
                <div className="block">
                    <button onClick={this.clearAll}>clear</button>
                </div>
            </div>
        );
    }
}

export default Add;