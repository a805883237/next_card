import React, {Component} from 'react'
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const renderFormLabel = (label, tip) => {
  
  return <span>
    {label}&nbsp;
    {tip ? <Tooltip title={tip}>
        <Icon type="question-circle-o" />
      </Tooltip>:null}
    </span>
};

class CreateForm extends Component {
  constructor(prop){
    super(prop);
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;
  
    return <div>
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item
          label={renderFormLabel('描述', '一句话概括本次内容')}
        >
          {getFieldDecorator('desc', {
            rules: [{ required: true, message: '此项为必填项', whitespace: true }],
          })(<Input placeholder="一句话概括本卡片内容"/>)}
        </Form.Item>
      </Form>
    </div>
  }
  
  handleSubmit(){
  
  }
}
const CreatePage = Form.create({ name: 'create' })(CreateForm);

export default CreatePage;