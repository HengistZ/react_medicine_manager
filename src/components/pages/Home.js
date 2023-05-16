import React from 'react';
import "./Home.css"
import {Row} from 'antd';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
        <div className="home-wrap" justify="center">
          欢迎来到药品管理系统！！
        </div>
    );
  }
}

export default Home;
