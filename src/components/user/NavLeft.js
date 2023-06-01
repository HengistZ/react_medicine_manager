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
      title: "药品溯源",
      key: '/user/checkMed'
    },
    {
      title: "交易溯源",
      key: '/user/checkTrade'
    },
    {
      title:"药品生产",
      key: "/user/produce"
    },
    {
      title:"药品交易",
      key:"/user/buy"
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
