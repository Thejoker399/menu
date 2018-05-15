import React, { Component } from 'react';
import { Button} from 'antd';

class Buttons extends Component {
    render() {

        return (
                <Button type="primary"  onClick={() => this.props.evt(this.props.index,this.props.value)}> {this.props.valueButton} </Button>
        );
    }
}

export default Buttons;  