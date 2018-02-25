import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'
import StackableMenu from './components/StackableMenu'
//import logo from './logo.svg';
//import './App.css';

const App = () => (
	<div>
		<StackableMenu />
		<div className="ui container">
			<Route path="/" exact component={HomePage} />
			<Route path="/login" exact component={LoginPage} />
		</div>
	</div>
)

export default App
