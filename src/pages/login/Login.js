import React from "react";
import LoginBox from "./LoginBox";
import {withRouter} from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
        <div>
          <h1>你好，请登录！</h1>
          <LoginBox/>
        </div>
    );
  }
}

export default withRouter(Login);
