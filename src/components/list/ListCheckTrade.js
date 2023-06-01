import React from 'react';
import {Button, Modal, Space, Table} from 'antd';
import {useState} from 'react';
import "./List.css"
import DialogB from "../dialog/DialogB";
import axios from "axios";

var medData = ['处方药', '保健品', '注射类药物', '管制药品'];

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
      title: "上链序列号",
      dataIndex: 'txId',
      width: 150,
    },
  ];
  
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
    return <div className={"list-main"}>
      <div>
        <h1 className={'h13'}>交易溯源</h1>
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
