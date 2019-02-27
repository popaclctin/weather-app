import React from 'react';
import { forecastIcons } from './constants.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

const DayForecast = ({
  minTemp,
  maxTemp,
  day,
  onClick,
  selected,
}) => {
  const dayForecastClass = classNames('weather-card', {
    selected: selected,
  });
  return (
    <div className={dayForecastClass} onClick={() => onClick(day)}>
      <div className="weekDay">{day}</div>
      <div className="forecastIcon" />
      <div className="temperature">
        <span>{maxTemp}&deg;</span>
        <span>{minTemp}&deg;</span>
      </div>
    </div>
  );
};

const ForecastIcon = ({ value }) => (
  <FontAwesomeIcon icon={forecastIcons[value]} />
);

export default DayForecast;
