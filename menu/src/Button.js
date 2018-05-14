import React, { Component } from 'react';

class Button extends Component {
    render() {

        return (
                <button onClick={() => this.props.evt(this.props.index,this.props.value)}> {this.props.valueButton} </button>
        );
    }
}

export default Button;  