import React from "react";
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Form, Input, Button, Select} from 'antd';
import {withRouter} from 'react-router-dom';
import "./Login.css";
import SignupDialog from "./SignupDialog";
import axios from "axios";

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usertype: 0,
      username: "",
      password: ""
    };
  }
  
  onInputChange(e, type) {
    if (type === "username") {
      this.setState({
        username: e.target.value
      })
    }
    if (type === "password") {
      this.setState({
        password: e.target.value
      })
    }
  }
  
  onUserChange = (value) => {
    this.setState({
      usertype: value
    })
    console.log(this.state.usertype)
  }
  
  submit = (sign) => {
    
    // alert(this.state.username + " " + this.state.password + "已登录")
    if (!this.state.username) {
      alert("请输入账号！")
      return;
    }
    if (!this.state.password) {
      alert("请输入密码！")
      return;
    }
    // if (sign === "sign") {
    //   alert("注册成功！")
    // }
    window.localStorage.usertype = this.state.usertype
    window.localStorage.username = this.state.username
    
    let urls = [
      'http://127.0.0.1:80/user/subUserLogin',
      'http://127.0.0.1:80/seller/subSellerLogin',
      'http://127.0.0.1:80/producer/subProducerLogin'];
    
    // console.log('usertype:' + this.state.usertype)
    Promise.all([
      axios.post(urls[0], {}, {
        params: {
          username: 'admin',
          password: 'admin'
        }
      }),
      axios.post(urls[1], {}, {
        params: {
          username: 'admin',
          password: 'admin'
        }
      }),
      axios.post(urls[2], {}, {
        params: {
          username: 'admin',
          password: 'admin'
        }
      })
    ]).then(response => {
      console.log(response.data)
      alert('登录成功！')
      this.props.history.push("/user/home");
    }).catch(error => {
      console.log(error)
      alert('网络错误，请重试！')
    })
  }
  
  render() {
    return (
        <div className={"login-box"}>
          <Form className={"LoginForm"}>
            <Form.Item name={"usertype"}>
              <Select onChange={this.onUserChange}
                      defaultValue="普通用户"
                      style={{
                        width: 150,
                      }}
                      options={[
                        {
                          value: 0,
                          label: '普通用户',
                        },
                        {
                          value: 2,
                          label: '生产商用户',
                        },
                        {
                          value: 1,
                          label: '经销商用户',
                        },
                      ]}/>
            </Form.Item>
            
            <Form.Item name="username"
                       rules={[{required: true, message: '账号不能为空!!!'}]}>
              <Input name="username"
                     prefix={<UserOutlined className="site-form-item-icon"/>}
                     placeholder="请输入账号"
                     onChange={e => this.onInputChange(e, "username")}/>
            </Form.Item>
            
            <Form.Item name="password"
                       rules={[{required: true, message: '密码不能为空!!!'}]}>
              <Input name="password"
                     prefix={<LockOutlined className="site-form-item-icon"/>}
                     type="password" placeholder="请输入密码"
                     onChange={e => this.onInputChange(e, "password")}/>
            </Form.Item>
          </Form>
          
          <Form.Item className={"login-buttons"}>
            <Button type="primary" htmlType="submit"
                    className="login-form-button" onClick={this.submit}>
              登录
            </Button>
            {/*<Button type="primary" htmlType="submit"*/}
            {/*        className="login-form-button"*/}
            {/*        onClick={e => this.submit("sign")}>*/}
            {/*  注册*/}
            {/*</Button>*/}
            <SignupDialog/>
          </Form.Item>
        </div>
    );
  }
}

export default withRouter(LoginBox);
