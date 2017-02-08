/**
 * Created by lenovo on 2017/2/8.
 */
import React , { Component } from 'react'
import classname from 'classnames'


const FILTER_TITLES={
	SHOW_ALL:'All',
	SHOW_ACTIVE:'Active',
	SHOW_COMPLETED:'Completed'
}
export default class FilterLink extends Component{
	constructor(props){
		super(props)
		this.setFilter=this.setFilter.bind(this)
		this.state={
			filterCondition:'SHOW_ALL'
		}
	}
	setFilter(){
		console.log(this.props.filter)
	}
	render(){
		const {filter}=this.props
		return (
			<a className={classname({selected:this.state.filterCondition==filter})}
			   onClick={this.setFilter}
			   filter={filter}
			>{FILTER_TITLES[filter]}</a>
		)
	}
}
