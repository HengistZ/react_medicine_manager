import React from 'react';
import {Button, Modal, Space, Table} from 'antd';
import {useState} from 'react';
import "./List.css"
import Dialog from "../dialog/DialogProduce";
import axios from "axios";

var medData = ['处方药', '保健品', '注射类药物', '管制药品'];

class List extends React.Component {
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
      title: "药品id",
      width: 50,
      dataIndex: 'medId',
      fixed: 'left',
    },
    {
      title: '生产商id',
      width: 100,
      dataIndex: 'producerId',
      fixed: 'left',
    },
    {
      title: '药品种类',
      width: 100,
      dataIndex: 'medType',
      fixed: 'left',
    },
    {
      title: '药品批次',
      dataIndex: 'medBatch',
      key: '1',
      width: 100,
    },
    {
      title: '药品价格',
      dataIndex: 'medPrice',
      width: 50,
    },
    {
      title: "责任人名字",
      dataIndex: 'respName',
      width: 50,
    },
    {
      title: "责任人邮箱",
      dataIndex: 'respMail',
      width: 100,
    },
    {
      title: "责任人电话",
      dataIndex: 'respPhone',
      width: 100,
    },
    
    {
      title: '上链序列号',
      dataIndex: 'txId',
      width: 100,
    },
  ];
  
  getData() {
    axios.get('http://127.0.0.1:80/seller/check')
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
        <h1 className={'h13'}>药品溯源</h1>
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
  
  fabData() {
    for (let i = 0; i < 100; i++) {
      let a = parseInt(Math.random() * 10000 + 1, 10);
      let b = parseInt(Math.random() * 1000000 + 32);
      let c = Math.round(Math.random() * 3);
      let d = Math.round(Math.random() * 5000);
      this.data.push({
        // id: i,
        medId: a,
        producer_id: b,
        med_type: medData[c],
        med_batch: d,
        med_price: Math.round(Math.random() * 500),
        resp_name: i,
        resp_mail: i,
        resp_phone: i,
        seller_id: i
      });
    }
  }
}

export default List;
