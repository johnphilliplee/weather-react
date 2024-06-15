import React from 'react';

function WeatherDisplay({ data }) {
    if (!data) return <p>No data to display</p>

    return (
        <div>
            <h2>{data.location.name}, {data.location.region}, {data.location.country}</h2>
            <p>Condition: {data.current.text} <img src={data.current.condition.icon} alt="Weather Icon" style={{verticalAlign: 'middle'}}/> </p>
            <p>{data.current.temp_c} °C</p>
        </div>
    )
}

export default WeatherDisplay;