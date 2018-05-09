import React, { Component } from 'react';
import { Cascader } from 'antd';


export default class Header extends Component {
    

    onChange = (value, selectedOptions) => {
        this.setState({
          text: selectedOptions.map(o => o.label).join(', '),
        })
    }

    render() {
        return (
            <div className="header-top">
                <span >
                        <Cascader onChange={this.onChange}>
                        <a className="span-cilck"> RECEPTIONIST</a>
                    </Cascader>
                </span>
            </div>
        )
    }
}

