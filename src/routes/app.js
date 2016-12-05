
import React, { Component, PropTypes } from 'react';


// 引入 connect 工具函数
import { connect } from 'dva';

function App ({children,app}){

	const {
    login,
    } = app;

	return (
		<div>{login?children:"not login"}
		
		</div>
	);

}


App.propTypes = {
	children:PropTypes.element.isRequired,
}


// 指定订阅数据，这里关联了 users
function mapStateToProps({ app }) {
  return {app};
}


// 建立数据关联关系
export default connect(mapStateToProps)(App);