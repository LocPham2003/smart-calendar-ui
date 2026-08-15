import React from 'react'
import '../styles/CalendarContainer.css';
import CalendarEvent from "./CalendarEvent";
import DateHighlightContainer from "./DateHighlightContainer";

function CalendarContainer() {
    return (
        <div className="calendar-container">
           <h2>Agenda</h2>
           <hr/>
            <DateHighlightContainer/>
            <hr/>
            <ul className="calendar-events-container">
                <CalendarEvent timeColor={"#01A0E4"} eventColor={"#FDED02"}/>
                <CalendarEvent timeColor={"#01A0E4"} eventColor={"#FDED02"}/>
                <CalendarEvent timeColor={"#01A252"} eventColor={"#01A252"}/>
                <CalendarEvent timeColor={"#01A0E4"} eventColor={"#FDED02"}/>
                <CalendarEvent timeColor={"#01A0E4"} eventColor={"#FDED02"}/>
                <CalendarEvent timeColor={"#01A0E4"} eventColor={"#FDED02"}/>
                <CalendarEvent timeColor={"#01A0E4"} eventColor={"#FDED02"}/>
                <CalendarEvent timeColor={"#01A0E4"} eventColor={"#FDED02"}/>

            </ul>
        </div>
    )
}

export default CalendarContainer;