import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login/login';
import Signup from './pages/signup/sign-up.js';
import Evaluation from './pages/Evaluation/Evaluation';
import Patient from './pages/Patient/Patient';
import PatientDetails from './pages/PatientDetails/PatientDetails';
import DoctorLandingPage from './pages/DoctorLandingPage/DoctorLandingPage';
import DoctorSignUpPage from './pages/DoctorSignUp/DoctorSignUp';
import DoctorHome from './pages/DoctorHome/Doctor-home';
import AddPrescription from './pages/AddPrescription/add-prescription';

import './App.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Login} />
				<Route path='/signup' exact component={Signup} />
				<Route path='/Eval' exact component={Evaluation} />
				<Route path='/Patient' exact component={Patient} />
				<Route path='/Patient-details' exact component={PatientDetails} />
				<Route path='/doctor/login' exact component={DoctorLandingPage} />
				<Route path='/doctor/signup' exact component={DoctorSignUpPage} />
				<Route path='/doctor/home' exact component={DoctorHome} />
				<Route path='/add-prescription' exact component={AddPrescription} />
			</Switch>
		</Router>
	);
}

export default App;
