/**
 * Created by lenovo on 2017/2/7.
 */
import React from 'react'
import { Router,Route,IndexRoute,browserHistory } from 'react-router'
import App from '../component/App'
import Home from '../component/Home'

const RouteConfig=(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}></IndexRoute>
		</Route>
	</Router>
)
export default RouteConfig