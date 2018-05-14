import React, { Component } from 'react';
import { Button,Input } from 'antd';

class Random extends Component {
    render() {
        return (
            <div>
                <Input  className="input-width"   type='number' onChange={this.props.setStateNumberRandom}/>
                <Button type="primary" onClick={this.props.randommenu}> random </Button>
            </div>
        );
    }
}

export default Random;