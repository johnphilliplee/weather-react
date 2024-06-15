import React, {useState} from 'react';
import Search from './Search';
import WeatherDisplay from './WeatherDisplay';
import axios from 'axios';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {    
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Search onSearch={fetchWeather} />
      <WeatherDisplay data={weatherData} />
    </div>
  );
}

export default App;
