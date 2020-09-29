import React, {Component} from 'react';
import EFetch from "../utils/EFetch";
import { Alert } from 'antd';

import './txgy.less';

class ServerError extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      selectIndex: 0,
      selectItem: null
    };
  }
  
  static async getInitialProps() {
    const gy_data = await EFetch('/gy_data');
    return {
      lost_children: gy_data || []
    };
  }
  
  componentDidMount() {
    if (this.props.lost_children && this.props.lost_children.length) {
      this.setState({
        selectIndex: 0,
        selectItem: this.props.lost_children[0]
      });
    }
  }
  
  render() {
    const {lost_children = []} = this.props;
    const {selectIndex, selectItem} = this.state;
    
    return (
      <div className="mod_404">
        <Alert
          message={`很抱歉，页面加载异常`}
          description="不妨看一下走失孩童，也许您不经意间就可以挽救一个家庭哦~"
          type="error"
          showIcon
        />
        
        {selectItem ? <div className="mod_bd">
          <div className="child_box">
            <div className="mod_404_child child_in">
              <div className="child_main cf">
                <div className="child_avatar">
                  <img
                    src={selectItem.child_pic}
                    style={{opacity: 1, marginLeft: 0, marginTop: "19px", width: '160px', height: "178px"}}/></div>
                <div className="child_info">
                  <div className="info_name">
                    <h2><span className="name_inner">{selectItem.name}</span><span
                      className="info_sex">({selectItem.sex})</span></h2>
                  </div>
                  <div className="info_item info_birth"><span className="info_lbl">出生日期：</span><span
                    className="item_inner">{selectItem.birth_time}</span>
                  </div>
                  <div className="info_item info_time"><span className="info_lbl">失踪时间：</span><span
                    className="item_inner">{selectItem.lost_time}</span>
                  </div>
                  <div className="info_item info_address"><span className="info_lbl">失踪地点：</span><span
                    className="item_inner">{selectItem.lost_place}</span>
                  </div>
                  <div className="info_item info_desc"><span className="info_lbl">失踪人特征描述：</span><span
                    className="item_inner">{selectItem.child_feature}</span>
                  </div>
                  <a href={selectItem.url} className="link_view"
                     title="查看详情"><span className="link_inner">查看详情</span></a></div>
              </div>
              <div className="child_bottom cf">
                <div className="bottom_logo">
                  <ul className="logo_list">
                    <li><a href="http://e.t.qq.com/Tencent-Volunteers" title="腾讯志愿者"><img
                      src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/style/image/logo_tencentvolunteers.png"/></a></li>
                    <li><a href="http://bbs.baobeihuijia.com/forum.php" title="宝贝回家"><img
                      src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/style/image/logo_baobeihuijia.png"/></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
          : null}
        <div className="mod_fd">
          <div className="mod_404_children">
            <ul className="children_list">
              {lost_children.map((child, index) => {
                return <li className={index === selectIndex ? 'on_select' : ''}
                  key={`lost_list_${child.id}`}>
                  <a onClick={() => this.handlePressChild(child, index)}
                     title={child.name}>
                    <img
                      src={child.child_pic}
                    />
                  </a>
                </li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  handlePressChild(child, index) {
    if (this.state.selectIndex === index) {
      return;
    }
    this.setState({
      selectIndex: index,
      selectItem: child
    });
  }
}

export default ServerError;