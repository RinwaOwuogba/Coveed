import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login/login';
import Signup from './pages/signup/sign-up.js';
import Evaluation from './pages/Evaluation/Evaluation';
import Patient from './pages/Patient/Patient';

import './App.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Login} />
				<Route path='/signup' exact component={Signup} />
				<Route path='/Eval' exact component={Evaluation} />
				<Route path='/Patient' exact component={Patient} />
			</Switch>
		</Router>
	);
}

export default App;
