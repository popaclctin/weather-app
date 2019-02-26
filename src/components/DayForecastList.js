import React, { Component } from 'react';
import DayForecast from './DayForecast';
import HourForecastList from './HourForecastList';

const DayForecastList = ({ list, selected, onClick }) => {
  const groupList = groupByDate(list);
  console.log(groupList);
  const result = [];
  for (let key in groupList) {
    if (groupList.hasOwnProperty(key)) {
      const forecasts = groupList[key];
      const minTemp = forecasts.reduce((acc, forecast) => {
        const temp = forecast.main.temp;
        return acc < temp ? acc : temp;
      }, 100);
      const maxTemp = forecasts.reduce((acc, forecast) => {
        const temp = forecast.main.temp;
        return acc > temp ? acc : temp;
      }, -100);
      result.push(
        <DayForecast
          day={key}
          maxTemp={maxTemp}
          minTemp={minTemp}
          onClick={onClick}
          selected
        />,
      );
    }
  }
  return (
    <div className="weather">
      <div className="weather-list">{result}</div>
    </div>
  );
};

const groupByDate = list => {
  return list.reduce((result, forecast) => {
    const date = new Date(forecast.dt * 1000);
    const dateString = date.toDateString();
    if (!result[dateString]) result[dateString] = [];
    result[dateString].push(forecast);
    return result;
  }, {});
};

export default DayForecastList;
