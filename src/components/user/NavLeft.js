import React from 'react';
import { Button } from "antd";
import {NavLink} from 'react-router-dom';
import logo from "../../logo.svg";
import "./NavLeft.css"

class NavLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  list = [
    {
      title: "首页",
      key: '/user/home'
    },
    {
      title:"药品编辑",
      key: "/user/one"
    },
    {
      title:"人员管理",
      key:"/user/two"
    },
    {
      title:"功能三",
      key:"/user/three"
    },
  ];
  
  render() {
    return (
        <div className={"nav-left-main"}>
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className='text'>管理系统</h1>
          <div className="nav">
            {this.list.map(({title,key})=>(
                < Button className="buttons"><NavLink to={key}>{title}</NavLink></Button>
            ))  }
          </div>
        </div>
    );
  }
}

export default NavLeft;
