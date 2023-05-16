import React from "react";
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Form, Input, Button} from 'antd';
import {withRouter} from 'react-router-dom';
import "./Login.css"

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  
  submit = () => {
    this.props.history.push("/user/home");
  }
  
  render() {
    return (
        <div className={"login-box"}>
          <Form className={"LoginForm"}>
            <Form.Item name="username"
                       rules={[{required: true, message: '账号不能为空!!!'}]}>
              <Input name="username"
                     prefix={<UserOutlined className="site-form-item-icon"/>}
                     placeholder="请输入账号" onChange={this.onInputChange}/>
            </Form.Item>
            
            <Form.Item name="password"
                       rules={[{required: true, message: '密码不能为空!!!'}]}>
              <Input name="password"
                     prefix={<LockOutlined className="site-form-item-icon"/>}
                     type="password" placeholder="请输入密码"
                     onChange={this.onInputChange}/>
            </Form.Item>
          </Form>
          
          <Form.Item>
            <Button type="primary" htmlType="submit"
                    className="login-form-button" onClick={this.submit}>
              登录
            </Button>
          </Form.Item>
        </div>
    );
  }
}

export default withRouter(LoginBox);
