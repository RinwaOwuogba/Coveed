import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login/login';
import Signup from './pages/signup/sign-up.js';

import './App.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Login} />
				<Route path='/signup' exact component={Signup} />
			</Switch>
		</Router>
	);
}

export default App;
