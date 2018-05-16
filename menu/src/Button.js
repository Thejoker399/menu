import React, { Component } from 'react';
import { Button} from 'antd';

class Buttons extends Component {
    render() {

        return (
            <div>
                <Button type={this.props.type} onClick={() => 
                    this.props.evt(this.props.index,this.props.value)}>
                     {this.props.valueButton} 
                     </Button>
            <style global jsx> {`
                .ant-btn-danger {
                    background-color: #fff;
                }
            `}
            </style>
            </div>
        );
    }
}

export default Buttons;  