import React, { useState } from 'react'
import axios from "axios";

export const Search = () => {

    const [city, setCity] = useState("");

    const fetchWeather = async (city) => {
        
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
        try {
          const response = await axios.get(url);
          setWeatherData(response.data);
          setError(null); // Clear previous error
        } catch (err) {
          setError("City not found. Please try again.");
          setWeatherData(null); // Clear previous data
        }
    
    
    };

    const handleSearch = () => {

        if (city.trim()) {
          fetchWeather(city);
        }

    };

    


  return (
    <div>
        <input
            type='text'
            placeholder='Enter city name'
            value={city}
            onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>
    </div>
  )
}
