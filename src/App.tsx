import React from 'react';
import CalendarContainer from './components/CalendarContainer';
import './styles/App.css';

function App() {
  return (
      <div className="App">
          <CalendarContainer />
        <div className="container-2">
            <div className="spotify">
                <h1>Spotify</h1>
            </div>
            <div className="weather">
                <h1>Weather</h1>
            </div>

        </div>
      </div>
  );
}

export default App;
