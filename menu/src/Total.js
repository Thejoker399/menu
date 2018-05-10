import React, { Component } from 'react';
import { Layout } from 'antd';
const { Footer, Sider, Content } = Layout;


export default class Total extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Layout>
            <Sider>Sider</Sider>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    )
  }
}