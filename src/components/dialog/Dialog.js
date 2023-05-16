import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import { useState } from 'react';
import React, { Component } from "react";
const Dialog = () => {
  const [modal, contextHolder] = Modal.useModal();
  let txt="";
  const confirm = () => {
    modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: <input type = "text" value={txt} />,
      okText: '确认',
      cancelText: '取消',
    });
  };
  return (
      <div>
        <Space>
          <a onClick={confirm}>修改信息</a>
        </Space>
        {contextHolder}
      </div>
  );
};
export default Dialog;
