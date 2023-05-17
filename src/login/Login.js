import React from "react";
import LoginBox from "./LoginBox";
import {withRouter} from 'react-router-dom';
import logo from "../logo.svg";
import "./Login.css"

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
        <div className="login-main">
          <div className={"react-box"}>
            <img src={logo} className="App-logo-a" alt="logo"/>
            {/*<h3>made with REACT</h3>*/}
          </div>
          <h1 className={"login-title"}>欢迎来到药品管理系统<br/>请登录：</h1>
          <LoginBox/>
        </div>
    );
  }
}

export default withRouter(Login);
