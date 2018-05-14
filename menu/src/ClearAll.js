import React, { Component } from 'react';

class ClearAll extends Component {
    render() {
        return (
            <div>
                   <button onClick={this.props.clearAll}>clear</button>
            </div>
        );
    }
}

export default ClearAll;