/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Col, Row} from 'antd';
import './Header.css'
import Util from '../../utils/utils';

// import axios from '../../axios';

class Header extends React.Component {
  constructor(props) {
    let type = "用户";
    console.log(window.localStorage.usertype)
    console.log(window.localStorage.username)
    if (window.localStorage.usertype == 1) {
      type = "经销商用户"
    }
    if (window.localStorage.usertype == 2) {
      type = "生产者用户"
    }
    super(props);
    this.state = {
      usertype: type
      // userName:Util.getStorage("userInfo").username || ''
    };
    // this.render()
  }
  
  // 获取时间
  componentDidMount() {
    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime());
      this.setState({
        sysTime
      })
    }, 1000);
    
    // this.getWeatherApiData();
    
  }
  
  // 获取天气
  // getWeatherApiData(){
  //   let city = "天津";
  //   axios.jsonp({
  //     url:"http://api.map.baidu.com/telematics/v3/weather?location="+encodeURIComponent(city)+"&output=json&ak=3p49MVra6urFRGOT9s8UBWr2"
  //   }).then((res)=>{
  //     // eslint-disable-next-line eqeqeq
  //     if(res.status=='success'){
  //       let data = res.results[0].weather_data[0];
  //       this.setState({
  //         dayPictureUrl:data.dayPictureUrl,
  //         weather:data.weather
  //       })
  //     }
  //   })
  // }
  // 退出登录
  onLogout = () => {
    Util.removeStorage("userInfo");
    window.location.href = ('/');
  }
  
  render() {
    return (
        <div className="header">
          <Row className="header-top">
            <Col span="24">
              <span>欢迎，亲爱的 {this.state.usertype} {window.localStorage.username} </span>
              <a className={"a1"} onClick={this.onLogout}>退出</a>
            </Col>
          </Row>
          
          <Row className="breadcrumb">
            {/*<Col span="4" className="breadcrumb-title">*/}
            {/*  首页*/}
            {/*</Col>*/}
            <Col span="20" className="breadcrumb-detail">
              <span className="date">{this.state.sysTime}</span>
              {/*<span className="weather-img">*/}
              {/*              <img src={this.state.dayPictureUrl} alt=""/>*/}
              {/*          </span>*/}
              {/*<span className="weather-detail">{this.state.weather}</span>*/}
            </Col>
          </Row>
        </div>
    );
  }
}

export default Header;
