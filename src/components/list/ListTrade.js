import React from 'react';
import {Button, Modal, Space, Table} from 'antd';
import "./List.css"
import DialogB from "../dialog/DialogB";
import axios from "axios";

// var medData=['处方药','保健品','注射类药物','管制药品'];
class ListTrade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
    this.getData()
  }
  
  columns = [
    {
      title: "序列号",
      width: 20,
      dataIndex: 'id',
      fixed: 'left',
      render: (text, record, index) => index + 1,
    },
    {
      title: "交易序号",
      width: 50,
      dataIndex: 'tradeId',
      fixed: 'left',
    },
    {
      title: "交易数量",
      width: 50,
      dataIndex: 'tradeNum',
      fixed: 'left',
    },
    {
      title: '发货地',
      width: 100,
      dataIndex: 'sendAddress',
      fixed: 'left',
    },
    {
      title: '发货时间',
      width: 100,
      dataIndex: 'deliveryTime',
      fixed: 'left',
    },
    {
      title: '收货地',
      width: 100,
      dataIndex: 'receiveAddress',
      fixed: 'left',
    },
    {
      title: '收货时间',
      width: 100,
      dataIndex: 'receiveTime',
      fixed: 'left',
    },
    {
      title: '销售人员id',
      dataIndex: 'sellerId',
      width: 50,
    },
    {
      title: '药品id',
      dataIndex: 'medId',
      width: 50,
    },
    {
      title: '生产商id',
      dataIndex: 'producerId',
      width: 50,
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 100,
      dataIndex: "no",
      // id:"hi",
      render: (text, record, index) => <button
          onClick={e => this.confirm(e, index)}
          className={'add-button'}>上链
      </button>
    },
  
  ];
  
  confirm(e, index) {
    alert(index)
    let curr = this.state.data[index];
    console.log(curr)
    axios.post('http://127.0.0.1:80/trade/confirm', {
      tradeHash: curr.tradeId,
      medHash: curr.medId,
      buyNum: curr.tradeNum,
      sendAddress: curr.sendAddress,
      sendTime: curr.deliveryTime,
      receiveAddress: curr.receiveAddress,
      receiveTime: curr.receiveTime
    }).then(response => {
      alert('上链成功!')
    }).catch(error => {
      alert('上链失败！')
    })
  }
  
  getData() {
    axios.get('http://127.0.0.1:80/trade/search')
        .then(response => {
          this.setState({data: response.data.data})
          console.log(this.state.data)
          // this.render()
        }).catch(error => {
      alert('获取数据失败，请稍后重试！')
    })
  }
  
  render() {
    if (window.localStorage.usertype == 2 || window.localStorage.usertype
        == 0) {
      return <h1 className={"h12"}>
        您没有权限！
      </h1>
    }
    return <div className={"list-main"}>
      <div>
        <h1 className={'h13'}>药品交易</h1>
        <button className={'add-button'}>新增交易</button>
      </div>
      <Table
          columns={this.columns}
          dataSource={this.state.data}
          scroll={{
            x: 1000,
            y: 400,
          }}
      />
    </div>
  }
}

export default ListTrade;
