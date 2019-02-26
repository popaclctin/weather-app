import React from 'react';

const HourForecastList = ({ list }) => {
  const hoursCardList = list.map(item => {
    const dt = new Date(item.dt);
    const weather = item.weather.main;
    const temp = ite.main.temp;
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
    <p>{temperature}&deg;</p>
    <p>{weather}</p>
    <p>{`${hour}:00`}</p>
  </div>
);

export default HourForecastList;
