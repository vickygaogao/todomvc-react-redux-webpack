/**
 * Created by lenovo on 2017/2/7.
 */
import { assign } from 'lodash'
import { combineReducers } from 'redux'
import {
	ADD_TODO,
	COMPLETE_TODO
} from '../actions/index'

const initialState=[]

const handleActions=(state=initialState,action)=>{
	switch (action.type){
		case ADD_TODO:
			return [{
				id:action.id,
				text:action.text,
				completed:action.completed
			},...state]
		case COMPLETE_TODO:
			return state.map(todo=>
				todo.id==action.id?assign({},todo,{
						completed:!todo.completed
				}):todo
			)
		default:
			return state
	}
}
const rootReducer=combineReducers({
	handleActions
})
export default rootReducer