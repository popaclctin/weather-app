import React from 'react';
import { weekDays, forecastIcons } from './constants.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DayForecast = ({
  minTemp,
  maxTemp,
  day,
  onClick,
  selected,
}) => {
  return (
    <div className="weather-card" onClick={() => onClick()}>
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
