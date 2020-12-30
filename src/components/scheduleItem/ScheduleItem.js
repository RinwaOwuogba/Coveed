import React, { useState } from 'react';
import checked from '../../assets/svg/checked.svg';
import bell from '../../assets/svg/bell.svg';
import './scheduleItem.css';

const ScheduleItem = ({ name, index, handleClick, time }) => {
	const [done, setDone] = useState(false);
	const icon = done ? checked : bell;

	return (
		<div className='patient-home-activity-schedule'>
			<span>{time}</span>
			<span>Take 200mg of {name}</span>
			<div>
				<img
					onClick={() => {
						handleClick(index);
						setDone(!done);
					}}
					src={icon}
					alt={icon}
				></img>
			</div>
		</div>
	);
};

export default ScheduleItem;
