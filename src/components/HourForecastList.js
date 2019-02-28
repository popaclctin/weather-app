import React from 'react';

const HourForecastList = ({ list }) => {
  const hoursCardList = list.map(item => {
    const dt = new Date(item.dt);
    const icon = item.icon;
    const weather = item.weather;
    const temperature = item.temperature;
    return (
      <HourForecast
        key={item.dt}
        hour={dt.getHours()}
        icon={icon}
        weather={weather}
        temperature={temperature}
      />
    );
  });
  return <div className="hoursList">{hoursCardList}</div>;
};

const HourForecast = ({ hour, weather, icon, temperature }) => (
  <div className="hourCard">
    <p>{`${hour}:00`}</p>
    <img
      src={`http://openweathermap.org/img/w/${icon}.png`}
      alt={weather}
    />
    <p>{temperature}&deg;</p>
  </div>
);

export default HourForecastList;
