import React, { Component } from 'react';
import { Card } from 'antd';
class Showlist extends Component {
    render() {
        return (
            <div>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Card title="Card title" bordered={false} style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Showlist;