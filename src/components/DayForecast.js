import React from 'react';
import classNames from 'classnames';

const DayForecast = ({ min, max, weekday, onClick, selected }) => {
  const dayForecastClass = classNames('forecastDay', {
    selected: selected,
  });
  return (
    <div
      className={dayForecastClass}
      onClick={() => onClick(weekday)}
    >
      <div className="weekDay">{weekday}</div>
      <div className="forecastIcon" />
      <div className="temperature">
        <span>{max}&deg;</span>
        <span>{min}&deg;</span>
      </div>
    </div>
  );
};

export default DayForecast;
