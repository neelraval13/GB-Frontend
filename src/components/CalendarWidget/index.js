import React, { useEffect, useState } from 'react'
import './calendar.scss'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const CalendarWidget = () => {
    const [value, onChange] = useState(new Date());
        const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    return (
        <div className='calendar-card'>
            <div className='month-name'>
                    {monthNames[value.getMonth()]}
            </div>
                <div className='calendar-content'> 
                <Calendar
                    className="calendar"   
                    value={value}
                    showNeighboringMonth={false}
                    showNavigation={false}
                />
                </div>
        </div>
    )
}

export default CalendarWidget
