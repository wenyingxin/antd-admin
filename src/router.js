import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link,IndexRedirect} from 'dva/router';
import App from './routes/App';
import Users from './routes/Users';
import Dashboard from './routes/Dashboard';

export default function({ history }) {
  return (
    <Router history={history}>
    	<Route path="/" component={App} >
    		<IndexRedirect to="/dashboard" />
    		<Route path="/dashboard" component={Dashboard} />
    		<Route path="/users" component={Users} />
    	</Route>
    	

    </Router>
  );
};