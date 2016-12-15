import React, { Component, PropTypes } from 'react';
import {Icon} from 'antd'
import styles from './error.less'

function Error(){

	return (

		<div className='content-inner'>
			<div className={styles.error}>
				<Icon type="frown-o" />
				<h1> 404 Not Found </h1>
			</div>
		</div>
	);

}

Error.PropTypes = {
	
}

export default Error;