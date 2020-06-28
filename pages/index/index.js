import React, {Component} from 'react';
import {Timeline, Icon, Form, Select, Row, Col} from 'antd';
import CardItem from '../../components/card_item/index.tsx';

import {loginUser} from '../../redux/todos/index';
import { connect } from 'react-redux';

import './index.less';

const {Option} = Select;
const TimelineItem = Timeline.Item;
const FormItem = Form.Item;

const SearchLayout = {
  xs: {
    span: 12
  },
  md: {
    span:8
  }
};


class HomePage extends Component {
  
  render() {
    
    return (
      <div>
        <div className="ant-advanced-search-form">
          <Row type="flex" justify='end'>
            <Col {...SearchLayout}>
              <FormItem
                label="时间线："
                className='time_line_selector'
              >
                <Select defaultValue="1">
                  <Option value="1">Option 1</Option>
                  <Option value="2">Option 2</Option>
                  <Option value="3">Option 3</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
        </div>
        
        <Timeline mode="alternate" style={{'marginTop':'20px'}}>
          <TimelineItem>
            <CardItem/>
          </TimelineItem>
          <TimelineItem color="green">Solve initial network problems 2015-09-01</TimelineItem>
          <TimelineItem dot={<Icon type="clock-circle-o" style={{fontSize: '16px'}}/>}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </TimelineItem>
          <TimelineItem color="red">Network problems being solved 2015-09-01</TimelineItem>
          <TimelineItem>Create a services site 2015-09-01</TimelineItem>
          <TimelineItem dot={<Icon type="clock-circle-o" style={{fontSize: '16px'}}/>}>
            Technical testing 2015-09-01
          </TimelineItem>
        </Timeline>
      </div>
    );
  }
}

//redux
function mapStateToProps(state) {
  console.log("ggggggg",state.todos);
  return {data: state.todos};
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers: (params) => dispatch(loginUser(params)),
    deleteUser: (params) => {
      return dispatch(loginUser(params)).then(()=> {
        dispatch(loginUser());
      });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);