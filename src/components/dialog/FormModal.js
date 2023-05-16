import React, {Component, PropTypes} from 'react'
import {Form, Input, InputNumber} from 'antd'

class SharedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
  }
  
  handleSubmit = (value) => {
    // console.log("fck")
    console.log("formId", value);
  }
  
  render() {
    // const children = this.props.children || [];
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 14},
    };
    const formId = this.props.formId;
    console.log("id", formId);
    const layout = {
      labelCol: {span: 8},
      wrapperCol: {span: 16},
    };
    
    const form = {}
    
    return (
        <Form id={formId} layout="horizontal" onFinish={this.handleSubmit}>
          <Form.Item  name='name' label="Name" rules={[{isRequired: true}]}>
            <Input placeholder={this.props.data["name"]} />
          </Form.Item>
          <Form.Item name={['user', 'email']} label="Email"
                     rules={[{type: 'email'}]}>
            <Input/>
          </Form.Item>
          <Form.Item name={['user', 'age']} label="Age"
                     rules={[{type: 'number', min: 0, max: 99}]}>
            <InputNumber/>
          </Form.Item>
          <Form.Item name={['user', 'website']} label="Website">
            <Input/>
          </Form.Item>
          <Form.Item name={['user', 'introduction']} label="Introduction">
            <Input.TextArea/>
          </Form.Item>
        </Form>
    )
  }
}

export default SharedForm;
