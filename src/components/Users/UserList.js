// ./src/components/Users/UserList.jsx
import React, { Component, PropTypes } from 'react';

// 采用antd的UI组件
import { Table, message, Popconfirm } from 'antd';
import style from './userList.less';

// 采用 stateless 的写法
const UserList = ({
    total,
    current,
    loading,
    dataSource,
    pagination,
}) => {
  const columns = [{
    title: '头像',
    dataIndex: 'avatar',
    key: 'avatar',
    width:64,
    className:style.avatar,
    render: (text) => <img width={24} src={text} />,
  },{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href="#">{text}</a>,
  }, {
    title: '昵称',
    dataIndex: 'nickName',
    key: 'nickName',
  },{
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    render:(text) => <span>{text}岁</span>
  }, {
    title: '性别',
    dataIndex: 'isMale',
    key: 'isMale',
    render:(text) => <span>{text ? '男' : '女'}</span>
  },{
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '操作',
    key: 'operation',
    render: (text, record) => (
      <p>
        <a onClick={()=>{}}>编辑</a>
        &nbsp;
        <Popconfirm title="确定要删除吗？" onConfirm={()=>{console.log("删除数据项"+record.id)}}>
          <a>删除</a>
        </Popconfirm>
      </p>
    ),
  }];

    // 定义分页对象
  // const pagination = {
  //   total,
  //   current,
  //   pageSize: 10,
  //   onChange: ()=>{console.log("current:"+current);},
  // };

  return (

    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={record => record.id}
        pagination={pagination}
      />
    </div>
  );
}

export default UserList;