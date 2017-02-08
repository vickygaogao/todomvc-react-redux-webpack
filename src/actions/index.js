/**
 * Created by lenovo on 2017/2/7.
 */
export const ADD_TODO="ADD_TODO"
export const COMPLETE_TODO="COMPLETE_TODO"

let nextId=0
export const addTodo=(text)=>({
	type:ADD_TODO,
	id:nextId++,
	text:text,
	completed:false,
})
export const completeTodo=(id)=>({
	type:COMPLETE_TODO,
	id:id
})

