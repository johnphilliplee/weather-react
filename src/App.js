import React, {useState} from 'react';
import Search from './Search';
import WeatherDisplay from './WeatherDisplay';
import axios from 'axios';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = 'API';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
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
