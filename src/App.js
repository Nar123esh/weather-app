import React, { useState } from 'react';
import './App.css';

const api = {
  key: "3a4b70852e37120aa2dc789436378efe",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather app</h1>
        <div >
          <input
            type='text'
            placeholder='Enter city/town'
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        
        <p>{weather.name}</p>
        <p>{weather.main && weather.main.temp}°C</p>
        <div>
          <p>{weather.weather && weather.weather[0].main}</p>
          <p>({weather.weather && weather.weather[0].description})</p>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
