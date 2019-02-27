import React from 'react';

const HourForecastList = ({ list }) => {
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
  return <div className="hours-list">{hoursCardList}</div>;
};

const HourForecast = ({ hour, weather, temperature }) => (
  <div className="hour-card">
    <p>{`${hour}:00`}</p>
    <p>{weather}</p>
    <p>{temperature}&deg;</p>
  </div>
);

export default HourForecastList;
