import React from "react";

export const WeatherData = ({ weatherData, forecast }) => {
  
  if (!weatherData || !forecast) return null;

  const { name, main, weather, wind } = weatherData;
  const currentDay = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="weather-data">
      <div className="main-info">
        <h2>{currentDay}</h2>
        <h3>{name}</h3>
        <h1>{Math.round(main.temp)}°C</h1>
        <p>{weather[0].description}</p>
      </div>

      <div className="detailed-info">
        <p>HUMIDITY: {main.humidity}%</p>
        <p>WIND: {wind.speed} km/h</p>
        <p>PRESSURE: {main.pressure} mb</p>
        <p>MAX TEMP: {Math.round(main.temp_max)}°C</p>
        <p>MIN TEMP: {Math.round(main.temp_min)}°C</p>
      </div>

      <div className="forecast">
        {forecast.map((day, index) => (
          <div key={index} className="forecast-item">
            <p>{day.day}</p>
            <img
              src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
              alt={day.description}
            />
            <p>{Math.round(day.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};
