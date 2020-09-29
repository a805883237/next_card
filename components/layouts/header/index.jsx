import React, { Component } from 'react'
import './index.less'

import { Layout, Row, Col } from 'antd'
import HeaderLeft from './headerLeft'
import Search from './search'
import Nav from './nav'

const Header = Layout.Header

const navList = [
  {
    icon: 'home',
    title: '首页',
    link: '/home'
  },
  {
    icon: 'file-add',
    title: '新建',
    link: '/create'
  },
  {
    icon: 'desktop',
    title: '博客',
    link: 'https://andd.top'
  },
  {
    icon: 'user',
    title: '关于',
    link: 'https://andd.top/about'
  }
]

const BlogHeader = () => {
  const responsiveLeft = { xxl: 4, xl: 5, lg: 5, sm: 4, xs: 24 }
  const responsiveRight = { xxl: 20, xl: 19, lg: 19, sm: 20, xs: 0 }

  return (
    <Header className="header-contaienr">
      <Row>
        <Col {...responsiveLeft}>
          <HeaderLeft navList={navList} />
        </Col>
        <Col {...responsiveRight}>
          <Search />
          <Nav navList={navList} />
        </Col>
      </Row>
    </Header>
  )
}

export default BlogHeader
