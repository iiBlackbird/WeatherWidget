import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const city = 'Houston';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(res => res.json())
      .then(data => {
        setWeather(data.main.temp); // Store temperature
      })
      .catch(error => {
        console.error("Error fetching weather:", error);
      });
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        {weather ? (
          <p>Current temperature in Houston: {weather}°C</p>
        ) : (
          <p>Loading...</p>
        )}
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
