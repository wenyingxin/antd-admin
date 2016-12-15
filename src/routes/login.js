import React, { Component, PropTypes } from 'react';
import {
	Icon,
	Form,
	message,
	Button,
	Input,
	Row,
} from 'antd'
import styles from './login.less'
import {config} from '../utils'

const FormItem = Form.Item;
const login = ({
	loginButtonLoading,
	onOK,
	form:{
		getFieldDecorator,
		validateFieldsAndScroll,
	}
}) => {

	function handleOk() {
	    validateFieldsAndScroll((err, values) => {

	    	if(err){
	    		return
	    	}
	    	onOK(values)
	    });
	    
	}
  	
    return (
    	<div className={styles.form} >
    		<div className={styles.logo} >
    			<img src={config.logoSrc} />
    			<span>后台管理</span>
    		</div>
    		<form>
    			<FormItem hasFeedback>
		          {getFieldDecorator('username', {
		            rules: [
		            	{ 
		            		required: true, 
		            		message: '请填写用户名' 
		            	}
		            ],
		          })(
		            <Input addonBefore={<Icon type="user" />} placeholder="用户名" size="large" />
		          )}
		        </FormItem>
		        <FormItem hasFeedback>
		          {getFieldDecorator('password', {
		            rules: [{ required: true, message: '请填写密码' }],
		          })(
		            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="密码" />
		          )}
		        </FormItem>
		        <Row>
		        	<Button type="primary" size="large" onClick={handleOk} loading={loginButtonLoading}>
		            	登录
		          	</Button>
		        </Row>
		        <p>
		        	<span>账号:guest</span>
		        	<span>密码:guest</span>
		        </p>
    		</form>
      	</div>
    )
}

login.PropTypes = {
	form:React.PropTypes.object,
	loginButtonLoading:React.PropTypes.bool,
	onOK:React.PropTypes.func
	
}

export default Form.create()(login);