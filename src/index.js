import React from 'react'
import ReactDOM from 'react-dom'
//import './index.css'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import rootReducer from './rootReducer'

//const store = createStore(rootReducer, applayMiddleware(thunk))

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
)
registerServiceWorker()
