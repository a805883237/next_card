import App from 'next/app';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Layout, Icon, Row, Col, BackTop} from 'antd';

import { Provider } from 'react-redux';
import store from '../redux/store/index'

import 'antd/dist/antd.less';

import Header from '../components/layouts/header';
import LeftSider from '../components/layouts/left_sider';

// 样式重置
import '../style/reset.less';
import '../style/index.less';
import './index.less';

const {Footer} = Layout;

export default class MyApp extends App {
  // App组件的getInitialProps比较特殊
  // 能拿到一些额外的参数
  // Component: 被包裹的组件
  static async getInitialProps(ctx) {
    const {Component} = ctx;
    let pageProps = {};
    
    // 拿到Component上定义的getInitialProps
    if (Component.getInitialProps) {
      // 执行拿到返回结果
      pageProps = await Component.getInitialProps(ctx);
    }
    
    // 返回给组件
    return {
      pageProps,
    };
  }
  
  render() {
    const {Component, pageProps} = this.props;
    
    const siderLayout = {xxl: 4, xl: 5, lg: 5, sm: 0, xs: 0};
    const contentLayout = {xxl: 20, xl: 19, lg: 19, sm: 24, xs: 24};
    /* 把pageProps解构后传递给组件 */
    return (
    <Provider store={store}>
      <Layout className="app-container">
        <Header />
        <Row className="main-wrapper">
          <Col {...siderLayout}>
            <LeftSider />
          </Col>
          <Col {...contentLayout}>
            <div className="content-wrapper">
              <div className="content-inner-wrapper">
                <Component {...pageProps} />
              </div>
              <Footer className="footer">
                © 2020 <Icon type="user"/> andd
              </Footer>
            </div>
          </Col>
        </Row>
        <BackTop target={() => document.querySelector('.content-wrapper')}/>
      </Layout>
    </Provider>);
  }
}