import React, { Component } from 'react';

import home from '../../assets/svg/home.svg';
import activeHome from '../../assets/svg/active-home.svg';
import activeInfo from '../../assets/svg/active-info.svg';
import activeMessage from '../../assets/svg/active-message.svg';
import activeProfile from '../../assets/svg/active-profile.svg';
import circle from '../../assets/svg/circle.svg';
import info from '../../assets/svg/info.svg';
import message from '../../assets/svg/message.svg';
import profile from '../../assets/svg/profile.svg';

import PatientHome from '../../components/PatientHome/PatientHome';
import PatientInfo from '../../components/PatientInfo/PatientInfo';
import PatientProfile from '../../components/PatientProfile/PatientProfile';
import PatientConsultation from '../../components/PatientConsultation/PatientConsultation';

import './Patient.css';

class Patient extends Component {
	constructor() {
		super();
		this.state = {
			page: 'home',
			fetchFail: false,
			currentUser: {
				med_state: 'Mild',
				remarks: [
					{
						doctor_id: 1,
						date_created: '2020-11-14T11:48:54.736591',
						id: 5,
						content:
							'Your symptoms indicate an increase in your hoodlum vibes make a change please!',
						user_id: 5,
						first_name: 'Dr.',
						last_name: ' Emmanuel',
					},
					{
						doctor_id: 1,
						date_created: '2020-11-14T11:49:37.788286',
						id: 6,
						content:
							'Be sure to Soro Soke while you complete your activity schedule',
						user_id: 5,
						first_name: 'Dr.',
						last_name: ' Emmanuel',
					},
				],
				country: 'Nigeria',
				age: 20,
				symptoms: [
					{
						date_added: '2020-09-30T01:48:50.867814',
						specifics: {
							cough_degree: '5',
							fever_degree: '38',
							id: 4,
							other_degree: '',
							fatigue_degree: '4',
							symptom_id: 4,
						},
						fever: true,
						id: 4,
						cough: true,
						user_id: 5,
						fatigue: true,
						resp: false,
						other: '',
					},
				],
				state: 'Ogun',
				email: 'paulcurious7@gmail.com',
				user_id: 'OSskqlAQNZQdy6SBnBx15wA7Vdj1',
				address: '#19,Alhaji Alayaki Street,Enilolo b/stop',
				last_name: 'Curious',
				first_name: 'Paul',
				profile_pic:
					'https://lh3.googleusercontent.com/a-/AOh14GiQPvUhJSZARfPVSIoiGE0dgtNolNDgzu2YI_sD',
				guides: [
					{
						name: 'Pain Medication',
						done: false,
						info: 'Acetaminophen (Tylenol)',
						time_lapse: 'hours=4',
						previousTime: '14:00',
					},
					{
						name: 'Zinc Supplement',
						done: false,
						info: 'Cold-Eeze lozenges',
						time_lapse: 'hours=4',
						previousTime: '11:00',
					},
					{
						name: 'Vitamin C',
						done: false,
						info: 'Vitamin-C',
						time_lapse: 'days=1',
						previousTime: '12:30',
					},
				],
				id: 5,
				travel_history: false,
				sign_up_date: '2020-09-30T01:48:15.208964',
				tel: '08135694596',
				days_left: 0,
			},
		};
	}

	onLinkClick = (page) => {
		this.setState({ page });
	};

	setContent() {
		const { history } = this.props;
		const { currentUser } = this.state;

		switch (this.state.page) {
			case 'home':
				return (
					<PatientHome
						firstName={currentUser.first_name}
						symptoms={currentUser.symptoms}
						guides={currentUser.guides}
						med_state={currentUser.med_state}
						imageUrl={currentUser.imageUrl}
						history={history}
						changePage={this.onLinkClick}
					/>
				);
			case 'info':
				return <PatientInfo />;
			case 'profile':
				return (
					<PatientProfile
						firstName={currentUser.first_name}
						lastName={currentUser.last_name}
						guides={currentUser.guides}
						imageUrl={currentUser.imageUrl}
						signUpDate={currentUser.sign_up_date}
					/>
				);
			case 'consultation':
				return <PatientConsultation remarks={currentUser.remarks} />;
			default:
				return <>I have not been set yet</>;
		}
	}

	setDashboard(pageName, activeIcon, inactiveIcon) {
		if (this.state.page === pageName) {
			return (
				<>
					{/* eslint-disable-next-line */}
					<a onClick={() => this.onLinkClick(pageName)} href='#'>
						<img src={activeIcon} alt='home-icon'></img>
					</a>
					<span>
						<img className='circle' src={circle} alt='circle-icon'></img>
					</span>
				</>
			);
		} else {
			return (
				<>
					{/* eslint-disable-next-line */}
					<a onClick={() => this.onLinkClick(pageName)} href='#'>
						<img src={inactiveIcon} alt='home-icon'></img>
					</a>
				</>
			);
		}
	}

	render() {
		return (
			<div className='patient-container'>
				<>
					{this.setContent()}
					<div className='spacing'></div>
					<div className='dashboard'>
						<div className='dashboard-control'>
							{this.setDashboard('home', activeHome, home)}
						</div>
						<div className='dashboard-control'>
							{this.setDashboard('info', activeInfo, info)}
						</div>
						<div className='dashboard-control'>
							{this.setDashboard('consultation', activeMessage, message)}
						</div>
						<div className='dashboard-control'>
							{this.setDashboard('profile', activeProfile, profile)}
						</div>
					</div>
				</>
			</div>
		);
	}
}

export default Patient;
