import React, { Component } from 'react'
import './index.less'
// import { connect } from 'react-redux'
import avatar from '../../../static/author_avatar.png'
import Link from 'next/link'
import { Divider, Tag, Icon } from 'antd'

function random(colorList) {
  const len = colorList.length
  return Math.floor(Math.random() * len)
}

const mapStateToProps = state => ({
  tagList: state.article.tagList,
  colorList: state.common.colorList
})

// @connect(mapStateToProps)
class LeftSider extends Component {
  state = { showList: [] }

  async componentDidMount() {
    let showList = []
    // const list = await this.fetchList(2)
    // showList = list.length > 0 ? list : await this.fetchList(1)
    this.setState({ showList })
  }

  /**
   * mode 1 获取最近的列表
   * mode 2 获取置顶文章列表
   * @memberof LeftSider
   */
  fetchList = async mode => {
    const queryParams =
      mode === 1 ? { params: { page: 1, pageSize: 6 } } : { params: { page: 1, pageSize: 100, fetchTop: true } }
    const result = await this.axios.get('/article/getList', queryParams)
    return result.rows
  }

  render() {
    const { tagList, colorList } = this.props
    const { showList } = this.state
    let title = showList[0] && showList[0].showOrder ? '热门文章' : '最近文章'

    return (
      <div className="sider-wrapper">
        <img src={avatar} className="sider-avatar" alt="" />
        <h2 className="name">andd</h2>
        <div className="title">前端老实人，轻微代码洁癖</div>
        <ul className="link-list">
          <li>
            <Icon type="github" />
            <a target="_blank" rel="noreferrer noopener" href="https://github.com/a805883237">
              github
            </a>
          </li>
          <li>
            <i className="iconfont icon-juejin" />
            <a target="_blank" rel="noreferrer noopener" href="https://www.jianshu.com/u/ce09c5b0b9b0">
              简书
            </a>
          </li>
        </ul>

        {/*<Divider orientation="left">{title}</Divider>*/}
        {/*<ul className="show-list">*/}
          {/*{showList.map(d => (*/}
            {/*<li key={d.id}>*/}
              {/*<Link to={`/article/${d.id}`}>{d.title}</Link>*/}
            {/*</li>*/}
          {/*))}*/}
        {/*</ul>*/}
        {/*<Divider orientation="left">标签</Divider>*/}
        {/*<div className="tags-content">*/}
          {/*{tagList.map((tag, i) => (*/}
            {/*<Tag key={i} color={colorList[i] ? colorList[i] : colorList[random(colorList)]}>*/}
              {/*<Link to={`/tags/${tag.name}`}>{tag.name}</Link>*/}
            {/*</Tag>*/}
          {/*))}*/}
        {/*</div>*/}
      </div>
    )
  }
}

export default LeftSider
