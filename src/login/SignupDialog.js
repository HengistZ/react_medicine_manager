import React, {Component} from 'react'
import {Modal, Form, Input, Button, Select} from 'antd'
import {LockOutlined, UserOutlined} from "@ant-design/icons";

// import FormModal from "../components/dialog/FormModal"

class SignupDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
  }
  
  onInputChange(e, type) {
    if (type === "username") {
      this.setState({
        username: e.target.value
      })
    }
    if (type === "passwordB") {
      this.setState({
        passwordB: e.target.value
      })
    }
    if (type === "password") {
      this.setState({
        password: e.target.value
      })
    }
  }
  
  // data = this.props.data[this.props.id - 1];
  
  // state = {,}
  showModelHandler = (e) => {
    // alert(this.data["name"])
    
    if (e) {
      e.stopPropagation()
    }
    this.setState({visible: true,})
  }
  hideModelHandler = () => {
    this.setState({visible: false,})
  }
  handleSubmit = (values) => {
    
    // console.log("values", values);
    console.log((this.state.username))
    console.log((this.state.password))
    console.log((this.state.passwordB))
    if(this.state.password!=this.state.passwordB){
      alert("两次密码不一致！")
      return
    }
    alert("注册成功")
    this.setState({visible: false,})
  };
  onFinishForm = (values) => {
    console.log("onFinishForm", values);
  }
  
  render() {
    const {children, trigger, param} = this.props
    
    return (
        <span>
          {/*<p></p>*/}
          <Button type="primary" htmlType="submit"
                  className="login-form-button"
                  onClick={this.showModelHandler}>
              注册{trigger}
            </Button>
                <Modal title={this.props.name || ''}
                       visible={this.state.visible}
                       onOk={this.handleSubmit}
                       onCancel={this.hideModelHandler}
                       okButtonProps={{htmlType: 'submit', form: 'editForm'}}
                >
                    <Form className={"LoginForm"}>
                      <Form.Item name="username"
                                 rules={[{
                                   required: true,
                                   message: '账号不能为空!!!'
                                 }]}>
                        <Input name="username"
                               prefix={<UserOutlined
                                   className="site-form-item-icon"/>}
                               placeholder="请输入账号"
                               onChange={e => this.onInputChange(e,
                                   "username")}/>
                      </Form.Item>
            
                      <Form.Item name="password"
                                 rules={[{
                                   required: true,
                                   message: '密码不能为空!!!'
                                 }]}>
                        <Input name="password"
                               prefix={<LockOutlined
                                   className="site-form-item-icon"/>}
                               type="password" placeholder="请输入密码"
                               onChange={e => this.onInputChange(e,
                                   "password")}/>
                      </Form.Item>
                      
                      <Form.Item name="passwordB"
                                 rules={[{
                                   required: true,
                                   message: '密码不能为空!!!'
                                 }]}>
                        <Input name="passwordB"
                               prefix={<LockOutlined
                                   className="site-form-item-icon"/>}
                               type="password" placeholder="请二次输入密码"
                               onChange={e => this.onInputChange(e,
                                   "passwordB")}/>
                      </Form.Item>
                    </Form>
                </Modal>
            </span>
    )
  }
}

export default SignupDialog
