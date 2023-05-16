import React from 'react';
import {Button, Modal, Space, Table} from 'antd';
import {useState} from 'react';
import LocalizedModal from '../dialog/Dialog';
import "./List.css"
import DialogB from "../dialog/DialogB";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  columns = [
    {
      title: "药品id",
      width: 100,
      dataIndex: 'id',
      key: 'id',
      fixed: 'left',
      render: (text, record, index) => index + 1,
    },
    {
      title: '药品名称',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: '生产日期',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
    },
    {
      title: '保质期',
      dataIndex: 'address',
      key: '1',
      width: 150,
    },
    {
      title: '生产厂家',
      dataIndex: 'address',
      key: '2',
      width: 150,
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 100,
      dataIndex: "no",
      // id:"hi",
      render: (text, record, index) => <DialogB data={this.data}
                                                id={index + 1}/>,
    },
  
  ];
  
  data = [];
  
  render() {
    for (let i = 0; i < 100; i++) {
      this.data.push({
        key: i,
        name: `Edward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
        // id: ["hi"]
      });
    }
    
    return <div className={"list-main"}>
      <Table
          columns={this.columns}
          dataSource={this.data}
          scroll={{
            x: 1000,
            y: 550,
          }}
      />
    </div>
  }
}

export default List;
