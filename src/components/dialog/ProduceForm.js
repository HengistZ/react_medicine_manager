import React, {Component, PropTypes} from 'react'
import {Form, Input, InputNumber} from 'antd'
import {UserOutlined} from "@ant-design/icons";
import axios from "axios";

class SharedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      newMed: {}
    };
  }
  
  handleSubmit = (value) => {
    // console.log("fck")
    console.log("formValue:");
    console.log(this.formValue)
    
    // console.log('newMed:')
    // console.log(this.state.newMed)
    // for (let key in this.formValue) {
    //   if (!this.formValue[key]) {
    //     alert('属性不能为空！');
    //     return;
    //   }
    // }
    axios.post('http://127.0.0.1:80/producer/subProducerLogin', {}, {
      params: {
        username: 'admin',
        password: 'admin'
      }
    }).then((response) => {
          alert('ok')
          console.log(response.data)
          axios.post('http://127.0.0.1:80/producer/produce', {
            "medType": this.formValue.medType,
            "medBatch": this.formValue.medBatch,
            "medPrice": this.formValue.medPrice,
            "respName": this.formValue.respName,
            "respMail": this.formValue.respMail,
            "respPhone": this.formValue.respPhone
          })
              .then(response => {
                alert('生产完成！')
              }).catch(error => {
                alert('生产失败，请稍后重试')
              }
          )
        }
    )
    
  }
  
  formValue = {}
  
  onInputChange(e, prop) {
    this.formValue[prop] = e.target.value;
    // this.setState({
    //   newMed: this.formValue
    // })
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
    
    // const form = {}
    
    return (
        <Form id={formId} layout="horizontal" onFinish={this.handleSubmit}>
          {/*<Form.Item name="med_id" label="药品id">*/}
          {/*  <Input name="med_id"*/}
          {/*         placeholder="med_id"*/}
          {/*         onChange={e => this.onInputChange(e, "med_id")}/>*/}
          {/*</Form.Item>*/}
          
          {/*<Form.Item name="producer_id" label="生产商id">*/}
          {/*  <Input name="producer_id"*/}
          {/*         placeholder="producer_id"*/}
          {/*         onChange={e => this.onInputChange(e, "producer_id")}/>*/}
          {/*</Form.Item>*/}
          
          <Form.Item name="med_type" label="药品种类">
            <Input name="med_type"
                   placeholder="med_type"
                   onChange={e => this.onInputChange(e, "medType")}/>
          </Form.Item>
          
          <Form.Item name="med_batch" label="药品批次">
            <Input name="med_batch"
                   placeholder="med_batch"
                   onChange={e => this.onInputChange(e, "medBatch")}/>
          </Form.Item>
          
          <Form.Item name="med_price" label="药品价格">
            <Input name="med_price"
                   placeholder="med_price"
                   onChange={e => this.onInputChange(e, "medPrice")}/>
          </Form.Item>
          
          {/*<Form.Item name="med_name" label="药品名称">*/}
          {/*  <Input name="med_name"*/}
          {/*         placeholder="med_name"*/}
          {/*         onChange={e => this.onInputChange(e, "med_name")}/>*/}
          {/*</Form.Item>*/}
          
          {/*<Form.Item name="seller_id" label="销售人员id">*/}
          {/*  <Input name="seller_id"*/}
          {/*         placeholder="seller_id"*/}
          {/*         onChange={e => this.onInputChange(e, "seller_id")}/>*/}
          {/*</Form.Item>*/}
          
          <Form.Item name="resp_name" label="责任人名字">
            <Input name="resp_name"
                   placeholder="resp_name"
                   onChange={e => this.onInputChange(e, "respName")}/>
          </Form.Item>
          
          <Form.Item name="resp_mail" label="责任人邮箱">
            <Input name="resp_mail"
                   placeholder="resp_mail"
                   onChange={e => this.onInputChange(e, "respMail")}/>
          </Form.Item>
          
          <Form.Item name="resp_phone" label="责任人电话">
            <Input name="resp_phone"
                   placeholder="resp_phone"
                   onChange={e => this.onInputChange(e, "respPhone")}/>
          </Form.Item>
        </Form>
    )
  }
}

export default SharedForm;
