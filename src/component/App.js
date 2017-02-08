/**
 * Created by lenovo on 2017/2/7.
 */
import React, { Component , cloneElement } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import 'todomvc-app-css/index.css'

class App extends Component{
	render(){
		const childrenWidthProps=React.Children.map(this.props.children,
		(child)=>cloneElement(child,{
			actions:this.props.actions,
			todos:this.props.todos
		}))
		return(
			<div>
				{childrenWidthProps}
			</div>
		)
	}
}

const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})
const mapStateToProps=(state)=>{
	console.log('state',state)
	return {
		todos:state
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
