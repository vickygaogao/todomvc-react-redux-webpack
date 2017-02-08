/**
 * Created by lenovo on 2017/2/7.
 */
import React ,{ Component } from 'react'
import TodoItem from './TodoItem'

export default class MainSection extends Component{
	constructor(props){
		super(props)
	}
	render(){
		console.log(this.props)
		return(
			<ul className="todo-list">
				{
					this.props.todos.handleActions.map(todo=>
						<TodoItem key={todo.id} todo={todo} actions={this.props.actions}/>
					)
				}

			</ul>


		)
	}
}