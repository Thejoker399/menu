import React, { Component } from 'react';

class ButtonDelete extends Component {
    render() {
        return (
            <button onClick={() => this.props.deleteMenu(index)}> ลบ </button>
        );
    }
}

export default ButtonDelete;