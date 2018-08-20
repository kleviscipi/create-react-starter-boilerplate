import React from 'react'
import ReactDOM from 'react-dom'
import Root             from './app/core/route/index.js';
import createStore      from './app/core/store/configureStore.js'
import environment      from './environment/environment.js'

/***INCLUDE BOOTSTRAP***/

import 'bootstrap';
import './assets/css/style.css'

window.environment = environment

const initialState = {}
const store = createStore(initialState)

let init = () => {
	ReactDOM.render(<Root store={store} />,
		document.getElementById('root')
	);
}

init();