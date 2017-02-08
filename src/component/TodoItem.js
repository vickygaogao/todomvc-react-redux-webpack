/**
 * Created by lenovo on 2017/2/7.
 */
import React , { Component } from 'react'
import classname from 'classnames'

export default class TodoItem extends Component{
	constructor(props){
		super(props)
		this.state={
			editing:false
		}
		this.completeTodo=this.completeTodo.bind(this)
	}
	completeTodo(){
		this.props.actions.completeTodo(this.props.todo.id)
	}
	render(){
		let item;
		if(this.state.editing){

		}else{
			item=(
				<div>
					<input type="checkbox" className="toggle" onClick={this.completeTodo}/>
					< label>{this.props.todo.text}< / label >
					<button className="destroy"></button>
				</div>
			)
		}
		return (
			<li className={classname({
				completed:this.props.todo.completed
			})}>
				{item}
			</li>
		)
	}
}