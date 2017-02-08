/**
 * Created by lenovo on 2017/2/6.
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore , applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import Route from './src/config/Route'
import rootReducer from './src/reducer/index'

const middleware=[createLogger()]
const store=createStore(
	rootReducer,
	applyMiddleware(...middleware)
)
ReactDOM.render(
	<Provider store={store}>
		{Route}
	</Provider>,
	document.getElementById('root')
)

