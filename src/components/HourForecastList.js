import React from 'react';
import WeatherGraph from './WeatherGraph.js';

const HourForecastList = ({ list, nameOfDay }) => {
  const hoursCardList = list.map(item => {
    const dt = new Date(item.dt * 1000);
    const weather = item.weather.main;
    const temp = Math.round(item.main.temp);
    return (
      <HourForecast
        hour={dt.getHours()}
        weather={weather}
        temperature={temp}
      />
    );
  });
  return (
    <div className="hours-graph">
      <h1>{nameOfDay}</h1>
      <div className="hours-list">{hoursCardList}</div>
      <WeatherGraph data={list} width="800" height="500" />
    </div>
  );
};

const HourForecast = ({ hour, weather, temperature }) => (
  <div className="hour-card">
    <p>{`${hour}:00`}</p>
    <p>{weather}</p>
    <p>{temperature}&deg;</p>
  </div>
);

export default HourForecastList;
