import React, {Component, PropTypes} from 'react'
import {Form, Input, InputNumber} from 'antd'
import {UserOutlined} from "@ant-design/icons";

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
          <Form.Item name="med_id" label="药品id">
            <Input name="med_id"
                   placeholder="med_id"
                   onChange={e => this.onInputChange(e, "med_id")}/>
          </Form.Item>
          
          <Form.Item name="producer_id" label="生产商id">
            <Input name="producer_id"
                   placeholder="producer_id"
                   onChange={e => this.onInputChange(e, "producer_id")}/>
          </Form.Item>
          
          <Form.Item name="med_type" label="药品种类">
            <Input name="med_type"
                   placeholder="med_type"
                   onChange={e => this.onInputChange(e, "med_type")}/>
          </Form.Item>
          
          <Form.Item name="med_batch" label="药品批次">
            <Input name="med_batch"
                   placeholder="med_batch"
                   onChange={e => this.onInputChange(e, "med_batch")}/>
          </Form.Item>
          
          <Form.Item name="med_price" label="药品价格">
            <Input name="med_price"
                   placeholder="med_price"
                   onChange={e => this.onInputChange(e, "med_price")}/>
          </Form.Item>
          
          <Form.Item name="med_name" label="药品名称">
            <Input name="med_name"
                   placeholder="med_name"
                   onChange={e => this.onInputChange(e, "med_name")}/>
          </Form.Item>
          
          <Form.Item name="seller_id" label="销售人员id">
            <Input name="seller_id"
                   placeholder="seller_id"
                   onChange={e => this.onInputChange(e, "seller_id")}/>
          </Form.Item>
          
          <Form.Item name="resp_name" label="责任人名字">
            <Input name="resp_name"
                   placeholder="resp_name"
                   onChange={e => this.onInputChange(e, "resp_name")}/>
          </Form.Item>
          
          <Form.Item name="resp_mail" label="责任人邮箱">
            <Input name="resp_mail"
                   placeholder="resp_mail"
                   onChange={e => this.onInputChange(e, "resp_mail")}/>
          </Form.Item>
          
          <Form.Item name="resp_phone" label="责任人电话">
            <Input name="resp_phone"
                   placeholder="resp_phone"
                   onChange={e => this.onInputChange(e, "resp_phone")}/>
          </Form.Item>
        </Form>
    )
  }
}

export default SharedForm;
