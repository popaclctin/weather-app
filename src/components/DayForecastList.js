import React from 'react';
import DayForecast from './DayForecast';
import HourForecastList from './HourForecastList';

const DayForecastList = ({ list, selected, onClick, location }) => {
  console.log(list);
  const result = [];
  for (let key in list) {
    if (list.hasOwnProperty(key)) {
      const forecasts = list[key];
      let minTemp = forecasts.reduce((acc, forecast) => {
        const temp = forecast.main.temp;
        return acc < temp ? acc : temp;
      }, 100);
      minTemp = Math.round(minTemp);
      let maxTemp = forecasts.reduce((acc, forecast) => {
        const temp = forecast.main.temp;
        return acc > temp ? acc : temp;
      }, -100);
      maxTemp = Math.round(maxTemp);
      result.push(
        <DayForecast
          key={key}
          day={key}
          maxTemp={maxTemp}
          minTemp={minTemp}
          onClick={onClick}
          selected={key === selected}
        />,
      );
    }
  }
  return (
    <div className="weather">
      <h1>{location}</h1>
      <div className="weather-list">{result}</div>
      <HourForecastList list={selected ? list[selected] : []} />
    </div>
  );
};

export default DayForecastList;
