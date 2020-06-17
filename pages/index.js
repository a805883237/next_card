import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, Icon, Row, Col, BackTop } from 'antd'


import Header from '../components/layouts/header'
import LeftSider from '../components/layouts/left_sider'

// 样式重置
import '../style/reset.less'
import '../style/index.less'
import './index.less'

const { Content, Footer, Sider } = Layout

class WebLayout extends Component {
  static propTypes = {
    children: PropTypes.node
  }
  
  render() {
    const siderLayout = { xxl: 4, xl: 5, lg: 5, sm: 0, xs: 0 }
    const contentLayout = { xxl: 20, xl: 19, lg: 19, sm: 24, xs: 24 }
    
    return (
      <Layout className="app-container">
        <Header />
        <Row className="main-wrapper">
          <Col {...siderLayout}>
            <LeftSider />
          </Col>
          <Col {...contentLayout}>
            <div className="content-wrapper">
              {/* <div className="content-inner-wrapper">{this.props.children}</div> */}
              {this.props.children}
              {/* <Footer className="footer">
               © 2019 <Icon type="user" /> Guodada
               </Footer> */}
            </div>
          </Col>
        </Row>
        <BackTop target={() => document.querySelector('.content-wrapper')} />
      </Layout>
    )
  }
}

export default WebLayout;