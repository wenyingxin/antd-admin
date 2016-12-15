
import React, { Component, PropTypes } from 'react';
import {
	Spin,
	message
} from 'antd'
import Error from './Error';
import Login from './login';
import styles from '../components/Layout/main.less'


// 引入 connect 工具函数
import { connect } from 'dva';

function App ({children,dispatch,app}){

	const {
    	login,loading,loginButtonLoading
    } = app;

    const loginProps = {
   		loginButtonLoading,
    	onOK(data) {
    		//console.log(JSON.stringify(data));
    		dispatch({type:'app/login',payload:data});
    	}
    }

	return (
		<div>
			{login 
				? <div>
					<aside>
						侧边栏
					</aside>
					<div>
						<div>{children}</div>
					</div>

				  </div>
				: 
				<div className={styles.spin}>
					<Spin tip="加载用户信息..." size='large' spinning={loading}>
						<Login {...loginProps}/>
					</Spin>
				</div>
				
			}
		
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