import React from 'react'
import { Icon, Menu } from 'antd'
import Link from 'next/link'

const HeaderLeft = ({ navList }) => {
  const aa = (
    <Menu className="header-nav">
      {navList.map(nav => (
        <Menu.Item key={nav.link}>
          <Link href={nav.link}>
            {nav.icon && <Icon type={nav.icon} style={{ marginRight: 15 }} />}
            <span className="nav-text">{nav.title}</span>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <div className="header-left">
      <i className="iconfont icon-airplane" style={{ color: '#055796' }} />
      <span className="blog-name">andd cards</span>
    </div>
  )
}

export default HeaderLeft
