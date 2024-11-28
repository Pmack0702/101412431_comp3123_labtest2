import React from 'react'
import { Search } from '../Navbar/Search';
import { WeatherDisplay } from './WeatherDisplay';



export const WeatherApp = () => {

    const [weatherData, setWeatherData] = useState(null); // state to store weather Data
    const [error, setError] = useState(null);
 

  return (
    <div>
        <h1>Weather App</h1>
        <Search />
        <WeatherDisplay/>
    </div>
  )
}
