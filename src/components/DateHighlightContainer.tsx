import React from 'react';
import '../styles/DateHighlightContainer.css'

function DateHighlightContainer() {
    return (
    <div className="date-highlight-container">
        <h3 className="date-highlight-title">Sat, Aug 15th, 2026</h3>
        <ul>
            <li className="highlight-title">Mom's birthday</li>
            <li className="highlight-title">Anniversary</li>
            <li className="highlight-title">IND appointment</li>
        </ul>
    </div>
    )
}

export default DateHighlightContainer;