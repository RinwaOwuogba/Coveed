import React from 'react';

import './PatientConsultation.css';
import back from './../../assets/svg/cancel.svg';

class PatientConsultation extends React.Component {
	constructor() {
		super();
		this.state = {
			agreed: false,
			isExtraRemarksHidden: true,
		};
	}

	formatDate = (date) => {
		let seconds = Math.floor((new Date() - new Date(date)) / 1000);
		let span = Math.floor(seconds / 31536000);

		if (span >= 1) {
			return span + ' year';
		}
		span = Math.floor(seconds / 2592000);
		if (span >= 1) {
			return span + ' month';
		}
		span = Math.floor(seconds / 86400);
		if (span >= 1) {
			return span + ' day';
		}
		span = Math.floor(seconds / 3600);
		if (span >= 1) {
			return span + ' hour';
		}
		span = Math.floor(seconds / 60);
		if (span >= 1) {
			return span + ' minute';
		}
		return Math.floor(seconds) + ' second';
	};

	handleRemarkClick = () => {
		this.setState((prevState) => ({
			isExtraRemarksHidden: !prevState.isExtraRemarksHidden,
		}));
	};

	handleClick = async (e) => {
		e.preventDefault();
		document.querySelector('.agreement').classList.remove('display');
		document
			.querySelector('.patient-consultation-container')
			.classList.remove('over');
		const { userId } = this.props;
		console.log(userId);
	};

	displayAgreement = (e) => {
		e.preventDefault();
		document.querySelector('.agreement').classList.add('display');
		document
			.querySelector('.patient-consultation-container')
			.classList.add('over');
	};

	hideAgreement = (e) => {
		e.preventDefault();
		document.querySelector('.agreement').classList.remove('display');
		document
			.querySelector('.patient-consultation-container')
			.classList.remove('over');
	};

	onCheckboxChange = (e) => {
		const { name, checked } = e.target;
		this.setState({ [name]: checked });
	};

	render() {
		const { remarks } = this.props;
		return (
			<div className='patient-consultation-container'>
				<h1>Consultations</h1>
				<em>Recent Doctor's Notes</em>
				{!remarks.length && (
					<div className='consult-box'>
						<p>No Remarks yet</p>
					</div>
				)}
				{this.state.isExtraRemarksHidden
					? remarks
							.filter((remark, index) => index < 5)
							.map((remark) => {
								let formattedDate = this.formatDate(remark.date_created);
								console.log(formattedDate);
								formattedDate =
									+formattedDate.split(' ')[0] === 1
										? formattedDate
										: formattedDate + 's';
								return (
									<div key={remark.id} className='consult-box'>
										<div className='header'>
											<em> {remark.first_name + ' ' + remark.last_name} </em>
											<em> {formattedDate} ago</em>
										</div>
										<p>{remark.content}</p>
									</div>
								);
							})
					: remarks.map((remark) => {
							let formattedDate = this.formatDate(remark.date_created);
							console.log(formattedDate);
							formattedDate =
								+formattedDate.split(' ')[0] === 1
									? formattedDate
									: formattedDate + 's';
							return (
								<div key={remark.id} className='consult-box'>
									<div className='header'>
										<em> {remark.first_name + ' ' + remark.last_name} </em>
										<em> {formattedDate} ago</em>
									</div>
									<p>{remark.content}</p>
								</div>
							);
					  })}

				<button onClick={this.handleRemarkClick}>
					{this.state.isExtraRemarksHidden
						? 'View All Comments'
						: 'View Latest Comments'}
				</button>

				<section className='emergency'>
					<em> In the event of unexpected symptoms</em>
					<button onClick={this.displayAgreement}>CONTACT EMERGENCY</button>
				</section>

				<section className='agreement'>
					<img onClick={this.hideAgreement} src={back} alt='previous page' />
					<div className='main'>
						<p>
							{' '}
							On ticking the checkbox below, All your info provided to us will
							be relayed to the appropriate authorities and you will most likely
							be picked up from your home to be taken to an isolation center.{' '}
						</p>
						<input
							name='agreed'
							value={this.state.agreed}
							onChange={this.onCheckboxChange}
							type='checkbox'
							id='agree'
						/>
						<label htmlFor='agree'> I agree</label>
						{this.state.agreed ? (
							<button onClick={this.handleClick}> Submit </button>
						) : null}
					</div>
				</section>
			</div>
		);
	}
}

export default PatientConsultation;
