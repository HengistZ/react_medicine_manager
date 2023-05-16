import React from "react";
import {Col, Row} from 'antd';
import "./UserIndex.css"
import NavLeft from "./NavLeft";
import Header from "./Header";

export default class UserIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
        <Row className="container">
          
          <Col span={4} className="nav-left">
            <div className="NavLeft">
              <NavLeft/>
            </div>
          </Col>
          <Col span={20} className="main">
            <Header/>
            
            <Row className="content" justify="center">
              {this.props.children}
            </Row>
            
            {/*<Fonter/>*/}
          </Col>
        </Row>
    );
  }
  
}
