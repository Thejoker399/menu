import React, { Component } from 'react';
import { Modal, Button } from 'antd';
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
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
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
                <Button type="primary" onClick={this.showModal}>Open</Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
             
                <form onSubmit={this.addlist}>
                    <input type='text' onChange={this.onChangeName} />
                    <input type='number' min="1" onChange={this.onChangePrice} />
                    <button type='submit'>addlist</button>

                </form>
                <ul>
                    {
                        // this.props.list.map((value, index) => <li key={`menu-${index}`}> {value.name}{value.price} <button onClick={() =>this.props.deleteMenu(index)}> ลบ </button></li>)

                    }
                </ul>
                </Modal>
                <div className="block">
                <button onClick={this.clearAll}>clear</button>
                </div>
            </div>
        );
    }
}

export default Add;