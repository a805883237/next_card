import React, { Component, useState } from 'react'
import { Input, Icon, Row, Col } from 'antd'

import { withRouter } from 'next/router'

function SearchButton(props) {
  const [keyword, setKeyword] = useState('')

  const handleSubmit = () => {
    if (keyword) props.history.push(`/?page=1&keyword=${keyword}`)
  }

  const handleChange = e => {
    setKeyword(e.target.value)
  }

  const handlePressEnter = e => {
    e.target.blur()
  }

  return (
    <Row id="search-box">
      <Col>
        <Icon type="search" className="anticon" />
        <Input
          type="text"
          value={keyword}
          onChange={handleChange}
          onBlur={handleSubmit}
          onPressEnter={handlePressEnter}
          className="header-search"
          placeholder="搜索卡片"
          style={{ width: 200 }}
        />
      </Col>
    </Row>
  )
}

export default withRouter(SearchButton)
