import React, { useState, useEffect } from 'react'

import '../styles/CalendarContainer.css';
import CalendarEvent from "./CalendarEvent";
import DateHighlightContainer from "./DateHighlightContainer";

function CalendarContainer() {
    const [calendarList, setCalendarList] = useState("calendar/calendar_list/");
    const [calendarIds, setCalendarIds] = useState<string[]>([]);
    const params = new URLSearchParams();
    useEffect(() => {
        if (calendarIds.length === 0) {
            fetch("calendar/calendar_list/", { credentials: "include" })
                .then(response => {
                    if (!response.ok) throw new Error(`HTTP ${response.status}`);
                    return response.json();
                })
                .then(json => {
                    const calendars = json['calendars']
                    const calendarIds : string[] = calendars.map((calendar: { [x: string]: any; }) => calendar.id)
                    setCalendarIds(calendarIds);
                })
                .catch(error => console.error(error));
        } else {
            calendarIds.forEach(id => params.append("calendar_ids", id));
            fetch(`/calendar/event_list/?${params.toString()}`, { credentials: "include" })
                .then(response => {
                    if (!response.ok) throw new Error(`HTTP ${response.status}`);
                    return response.json();
                })
                .then(json => console.log(json))
                .catch(error => console.error(error));

        }

    }, [calendarList, calendarIds, params, setCalendarList]);

    return (
        <div className="calendar-container">
           <h2>Agenda</h2>
           <hr/>
            <DateHighlightContainer/>
            <hr/>
            <a href="/calendar/login">Connect Google Calendar</a>
            <ul className="calendar-events-container">
                <CalendarEvent timeColor={"#01A0E4"} eventColor={"#CDAB53"}/>
                <CalendarEvent timeColor={"#01A0E4"} eventColor={"#CDAB53"}/>
                <CalendarEvent timeColor={"#01A252"} eventColor={"#01A252"}/>
                <CalendarEvent timeColor={"#01A0E4"} eventColor={"#CDAB53"}/>
                <CalendarEvent timeColor={"#01A0E4"} eventColor={"#CDAB53"}/>
                <CalendarEvent timeColor={"#01A0E4"} eventColor={"#CDAB53"}/>
                <CalendarEvent timeColor={"#01A0E4"} eventColor={"#CDAB53"}/>
                <CalendarEvent timeColor={"#01A0E4"} eventColor={"#CDAB53"}/>

            </ul>
        </div>
    )
}

export default CalendarContainer;