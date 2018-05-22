import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Create from './components/Create';

render(
	<Router>
		<div>
			<Route exact path='/' component={App} />
			<Route path='/create' component={Create} />
		</div>
	</Router>,
	document.getElementById('react')
)