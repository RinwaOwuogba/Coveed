import React from 'react';
import format from 'date-fns/format';
import isBefore from 'date-fns/isBefore';
import add from 'date-fns/add';

import ScheduleItem from './../scheduleItem/ScheduleItem';
import './ActivitySchedule.css';

class ActivitySchedule extends React.Component {
	constructor() {
		super();
		this.interval = null;
		this.state = {
			guides: null,
		};
	}

	checkActivities = () => {
		this.props.guides.map((item, index) => {
			// update status of items on activity schedule
			let currentTime = new Date();
			let nextTime = item.nextTime
				? new Date(Date.parse(item.nextTime))
				: undefined;

			if (!isBefore(currentTime, nextTime)) {
				// avoid updating guides unnecessarily
				if (item.done === true) {
					item.done = false;
				}
			}

			return item;
		});
	};

	handleClick = (index) => {
		let newGuides = [...this.state.guides];
		let timeLapse = newGuides[index].time_lapse.split('=');
		let nextTime = null;

		// set next time for medication
		if (timeLapse[0] === 'days') {
			nextTime = add(new Date(), { days: timeLapse[1] });
		} else if (timeLapse[0] === 'hours') {
			nextTime = add(new Date(), { hours: timeLapse[1] });
		} else if (timeLapse[0] === 'minutes') {
			nextTime = add(new Date(), { minutes: timeLapse[1] });
		}

		// update current clicked activity schedule item
		newGuides[index] = {
			...newGuides[index],
			done: !newGuides[index].done,
			previousTime: format(new Date(), 'hh:mm'),
			nextTime: nextTime,
		};
		this.setState({ guides: newGuides });
	};

	componentDidMount() {
		this.setState({ guides: this.props.guides });
		this.interval = setTimeout(this.checkActivities, 1000 * 5);
		// this.interval = setInterval(this.checkActivities, 1000);
	}

	render() {
		return (
			<section className='patient-home-activity'>
				<em>Activity Schedule</em>
				<div className='patient-home-activity-schedule-container'>
					<em>WAT</em>
					{this.state.guides ? (
						this.state.guides.map((item, index) => (
							<ScheduleItem
								{...item}
								key={index}
								index={index}
								handleClick={this.handleClick}
								time={item.previousTime}
							/>
						))
					) : (
						<></>
					)}
				</div>
			</section>
		);
	}
}

export default ActivitySchedule;
