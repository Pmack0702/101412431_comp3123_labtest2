import React, { useState } from "react";
import axios from "axios";

export const Search = ({ setWeatherData, setForecast, setError }) => {
  const [city, setCity] = useState("");

  const fetchWeather = async (city) => {
    
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const weatherResponse = await axios.get(weatherUrl);
      setWeatherData(weatherResponse.data);

      const forecastResponse = await axios.get(forecastUrl);
      const formattedForecast = forecastResponse.data.list.slice(0, 5).map((item) => ({
        day: new Date(item.dt_txt).toLocaleDateString("en-US", { weekday: "short" }),
        icon: item.weather[0].icon,
        temp: item.main.temp,
        description: item.weather[0].description,
      }));
      setForecast(formattedForecast);

      setError(null); // Clear previous errors
    } catch (err) {
      setError("City not found. Please try again.");
      setWeatherData(null);
      setForecast([]);
    }
  };

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeather(city);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
