/**
 * Created by lenovo on 2017/2/7.
 */
import React, { Component } from 'react'

export default class TodoTextInput extends Component{
	constructor(props){
		super(props)
		this.state={
			text:this.props.todo
		}
		this.handleSubmit=this.handleSubmit.bind(this)
		this.handleChange=this.handleChange.bind(this)
	}
	handleSubmit(e){
		if(e.which==13){
			let text=e.target.value
			this.props.actions.addTodo(text)
		}
		this.state.text=''
	}
	handleChange(e){
		this.setState({text:e.target.value})
	}
	render(){
		return(
			<input type="text"
				   className="new-todo"
				   placeholder={this.props.placeholder}
				   onKeyDown={this.handleSubmit}
				   value={this.state.text}
				   onChange={this.handleChange}
			/>
		)
	}
}
