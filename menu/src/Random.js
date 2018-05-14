import React, { Component } from 'react';

class Random extends Component {
    render() {
        return (
            <div>
                <input onChange={this.props.setStateNumberRandom}/>
                <button onClick={this.props.randommenu}> random </button>
            </div>
        );
    }
}

export default Random;