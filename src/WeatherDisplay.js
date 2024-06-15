import React from 'react';

function WeatherDisplay({ data }) {
    if (!data) return <p>No data to display</p>

    return (
        <div>
            <h2>{data.name}</h2>
            <p>{data.weather[0].description}</p>
            <p>{Math.round(data.main.temp - 273.15)}°C</p>
        </div>
    )
}

export default WeatherDisplay;