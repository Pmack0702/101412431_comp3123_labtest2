import React, { useState } from "react";
import { Search } from "./Search";
import { WeatherData } from "./WeatherData";
import "./App.css";

export const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);

  return (

    <div className="weather-app">
        
      <h1>Weather App</h1>
      
      <Search setWeatherData={setWeatherData} setForecast={setForecast} setError={setError} />

      {error && <p className="error">{error}</p>}

      {weatherData && <WeatherData weatherData={weatherData} forecast={forecast} />}

    </div>
  );
};
