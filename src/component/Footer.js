/**
 * Created by lenovo on 2017/2/7.
 */
import React , { Component } from 'react'
import FilterLink from './FilterLink'

export default class Footer extends Component{
	constructor(props){
		super(props)
		this.todoCount=this.todoCount.bind(this)
		this.setFilter=this.setFilter.bind(this)

	}
	todoCount(){
		const todos=this.props.todos.handleActions
		const todoCount=todos.filter(todo=>todo.completed==false).length
		return todoCount
	}
	setFilter(e){
		const {filter}=this.props
		console.log(filter)

	}
	render(){
		let todo_count=this.todoCount()
		let todoCountWord=todo_count==0?'NO':todo_count
		let itemWord=(todo_count==0||todo_count==1)?'item':'items'
		return (
			<footer className="footer">
				<span className="todo-count">
					<strong>{todoCountWord}</strong> {itemWord} left
				</span>
				<ul className="filters">
					{
						['SHOW_ALL','SHOW_ACTIVE','SHOW_COMPLETED'].map(filter=>
							<li key={filter}
								>
								<FilterLink filter={filter}/>

							</li>
						)
					}

				</ul>
			</footer>
		)
	}
}
