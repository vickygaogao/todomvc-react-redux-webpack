/**
 * Created by lenovo on 2017/2/7.
 */
import React, { Component } from 'react'
import TodoTextInput from './TodoTextInput'


export default class Header extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<header className="header">
				<h1>todos</h1>
				<TodoTextInput
					placeholder="What needs to be done?"
					actions={this.props.actions}
					todos={this.props.todos}
					todo=""
				/>
			</header>
		)
	}
}
