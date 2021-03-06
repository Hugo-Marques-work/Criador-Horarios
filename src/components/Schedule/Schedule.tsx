import React from 'react'
import Lesson from '../../domain/Lesson'
import styles from './Schedule.module.scss'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'

class Schedule extends React.PureComponent <{
	onSelectedEvent: (id: string) => void
	onMouseEnterEvent: (id: string) => void
	setClassName: (id: string) => string
	onMouseLeaveEvent: (id: string) => void
	events: Lesson[]
}, unknown>{
	render(): React.ReactNode {
		return (
			<div className={styles.Schedule}>
				<FullCalendar
					plugins={[ timeGridPlugin ]}
					initialView="timeGridWeek"
					allDaySlot={false}
					weekends={false}
					headerToolbar={false}
					nowIndicator={false}
					dayHeaderFormat={{
						month: undefined,
						year: undefined,
						day: undefined,
						weekday: 'long'
					}}
					slotMinTime={'08:00:00'}
					slotMaxTime={'20:00:00'}
					slotLabelFormat={{
						hour: '2-digit',
						minute: '2-digit',
						omitZeroMinute: false,
						meridiem: undefined,
						hour12: false
					}}
					slotEventOverlap={false}
					eventTimeFormat={{
						hour: '2-digit',
						minute: '2-digit',
						omitZeroMinute: false,
						meridiem: undefined,
						hour12: false
					}}
					expandRows={false}
					height={'auto'}
					contentHeight={'auto'}
					events={this.props.events}
					eventClick={(info) => this.props.onSelectedEvent(info.event.id)}
					eventMouseEnter={(info) => this.props.onMouseEnterEvent(info.event.id)}
					eventMouseLeave={(info) => this.props.onMouseLeaveEvent(info.event.id)}
					locale="pt"
					eventClassNames={(info) => { return [ this.props.setClassName(info.event.id) ]} }
				/>
			</div>
		)
	}
}

export default Schedule
