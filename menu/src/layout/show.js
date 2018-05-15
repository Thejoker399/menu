import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';

class Showlist extends Component {
    render() {
        return (
            <div>
                <div style={{ background: '#fff', padding: '60px' }}>
                    <Row gutter={20}>
                        <Col span={25}>
                            <Card title="รายการอาหาร" bordered={true} style={{ width: 518, boxShadow: '1px 1px 10px #ccc' }}>
                                {this.props.children}
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Showlist;