import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';

class Index extends Component {
    render() {
        return (
            <div style={{ background: '#fff', padding: '60px' }}>
            <Row gutter={20}>
              <Col span={25}>
                <Card title="Menu Food"  style={{ boxShadow: '1px 1px 10px #ccc'}}>
                    {this.props.children}
                </Card>
              </Col>
            </Row>
            
          </div>
        );
    }
}

export default Index;