/**
 * Created by lenovo on 2017/2/7.
 */
import React ,{ Component, cloneElement } from 'react'
import Header from './Header'
import MainSection from './MainSection'
import Footer from './Footer'

export default class Home extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<Header actions={this.props.actions} todos={this.props.todos}/>
				<MainSection actions={this.props.actions} todos={this.props.todos}/>
				<Footer actions={this.props.actions} todos={this.props.todos}/>
			</div>
		)
	}
}