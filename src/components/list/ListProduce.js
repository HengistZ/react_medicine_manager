import React from 'react';
import {Button, Modal, Space, Table} from 'antd';
import {useState} from 'react';
import "./List.css"
import Dialog from "../dialog/DialogProduce";
import axios from "axios";
// import {responseInterceptor} from "http-proxy-middleware";

// var medData = ['处方药', '保健品', '注射类药物', '管制药品'];

class ListProduce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
    this.getData();
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
    // {
    //   title: '药品名称',
    //   dataIndex: 'med_name',
    //   width: 50,
    // },
    //
    // {
    //   title: "销售人员id",
    //   dataIndex: 'seller_id',
    //   width: 50,
    // },
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
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 100,
      dataIndex: "no",
      // id:"hi",
      render: (text, record, index) =>
          <div>
            <button onClick={e => this.confirm(e, index)}
                    className={'add-button'}>上链
            </button>
            {/*<button className={"delete-button"}>删除</button>*/}
          </div>
      
    },
  
  ];
  
  confirm(e, index) {
    alert('正在上链……')
    let curr = this.state.data[index];
    console.log(curr)
    axios.post('http://127.0.0.1:80/seller/confirm', {
      medHash: curr.medId,
      medSellerName: curr.producerId,
      medLicense: 'default',
      medSellerCrop: 'default',
      medType: curr.medType,
      medBatch: curr.medBatch,
      medPrice: curr.medPrice,
      producerName: curr.respName,
      producerMail: curr.respMail,
      producerPhone: curr.respPhone
    }).then(response => {
      alert('上链成功!')
    }).catch(error => {
      alert('上链失败！')
    })
  }
  
  getData() {
    axios.get('http://127.0.0.1:80/seller/search')
        .then(response => {
          this.setState({data: response.data.data})
          console.log(this.state.data)
          // this.render()
        }).catch(error => {
      alert('获取数据失败，请稍后重试！')
    })
  }
  
  // test(){
  //   axios.post('http://127.0.0.1:80/producer/produce', {
  //     "medType": 'mm',
  //     "medBatch": 123,
  //     "medPrice": 345,
  //     "respName": 'fas',
  //     "respMail": 'this.formValue.respMail',
  //     "respPhone": 'this.formValue.respPhone'
  //   })
  //       .then(response => {
  //         alert('生产完成！')
  //       }).catch(error => {
  //         alert('生产失败，请稍后重试')
  //       }
  //   )
  // }
  
  
  render() {
    if (window.localStorage.usertype == 1 || window.localStorage.usertype
        == 0) {
      return <h1 className={"h11"}>
        您没有权限！
      </h1>
    }
    
    return <div className={"list-main"}>
      <div>
        <h1 className={'h13'}>药品生产</h1>
        {/*<button onClick={this.test}>test</button>*/}
        <Dialog data={this.state.data}/>
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

export default ListProduce;
