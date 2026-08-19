import React from 'react'
import '../styles/CalendarEvent.css';
function CalendarEvent({ timeColor, eventColor }: {timeColor: string, eventColor: string}) {
    return (
        <div>
            <div className="event-card">
                <div className="time-container">
                    <p className="time" style={{ color: timeColor }}>11:00 - 13:00</p>
                </div>
                <div className="title-and-location-container">
                    <p className="title-and-location" style={{ color: eventColor }}>DND</p>
                    <p className="title-and-location" style={{ color: eventColor }}>123 Voorstraat, 1234AB Amsterdam</p>
                </div>
            </div>
            <hr className="event-divider"/>
        </div>

)
}

export default CalendarEvent