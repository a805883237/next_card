import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'
import { withRouter } from 'next/router'
import { Menu, Icon } from 'antd'


class Nav extends Component {
  static propTypes = {
    navList: PropTypes.array.isRequired,
    mode: PropTypes.string
  }

  static defaultProps = {
    mode: 'horizontal'
  }

  render() {
    const { navList, mode } = this.props
    
    return (
      <Menu mode={mode} selectedKeys={[this.props.router.pathname]} className="header-nav">
        {navList.map(nav => (
          <Menu.Item key={nav.link}>
            {
              nav.link.indexOf('/') === 0 ?
                <Link href={nav.link}>
                  <span>
                    {nav.icon && <Icon type={nav.icon} />}
                    <span className="nav-text">{nav.title}</span>
                  </span>
                </Link>
              : <a href={nav.link}>
                <span>
                  {nav.icon && <Icon type={nav.icon} />}
                  <span className="nav-text">{nav.title}</span>
                </span>
              </a>
            }
          </Menu.Item>
        ))}
      </Menu>
    )
  }
}

export default withRouter(Nav);
