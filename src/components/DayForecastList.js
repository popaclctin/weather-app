import React from 'react';
import DayForecast from './DayForecast';
import HourForecastList from './HourForecastList';
import WeatherGraph from './WeatherGraph';

const DayForecastList = ({ list, selected, onClick, city }) => {
  const result = list.map(day => {
    const min = day.forecast.reduce(
      (accumulator, fc) =>
        accumulator < fc.temperature ? accumulator : fc.temperature,
      100,
    );
    const max = day.forecast.reduce(
      (accumulator, fc) =>
        accumulator > fc.temperature ? accumulator : fc.temperature,
      -100,
    );
    return (
      <DayForecast
        key={day.weekday}
        weekday={day.weekday}
        max={max}
        min={min}
        onClick={onClick}
        selected={day.weekday === selected}
      />
    );
  });
  const selectedForecast = selected
    ? list.find(item => item.weekday === selected).forecast
    : null;
  return (
    <div className="forecast">
      <h1>{city}</h1>
      <div className="forecastDays">{result}</div>
      {selected && (
        <div className="hours-graph">
          <HourForecastList list={selectedForecast} />
          <WeatherGraph
            data={selectedForecast}
            width="800"
            height="500"
          />
        </div>
      )}
    </div>
  );
};

export default DayForecastList;
