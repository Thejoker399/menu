import React, { Component } from 'react';

class ButtonDelete extends Component {
    render() {

        return (
            <div>
                {
                    this.props.list.map((value, index) => {
                        return <li key={`menu-${index}`}>
                            <button onClick={() => this.props.deleteMenu(this.props.index)}> ลบ </button></li>
                    })
                }
            </div>
        );
    }
}

export default ButtonDelete;