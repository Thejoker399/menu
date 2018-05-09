import React, { Component } from 'react';
import {Icon} from 'antd';


export default class Header extends Component {

    render() {
        return (
            <div className="header-top">
                <span >
                        <a className="span-cilck"> <Icon type="tool" /> RECEPTIONIST</a>
                </span>
            </div>
        )
    }
}

