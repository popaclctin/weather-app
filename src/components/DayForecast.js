import React from 'react';
import { weekDays, forecastIcons } from './constants.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WeatherCard = props => {
  const { day, onClick, selected } = props;
  return (
    <div
      className="weather-card"
      onClick={() => onClick(day.date.getTime())} // functie arrow => scade performanta?
      style={
        day.date.getTime() === selected
          ? { border: '0.1rem solid #a39f9d' }
          : null
      }
    >
      <div className="weekDay">{weekDays[day.date.getDay()]}</div>
      <div className="forecastIcon">
        <ForecastIcon value={day.forecast} />
      </div>
      <div className="temperature">
        <span>{day.high}&deg;</span>
        <span>{day.low}&deg;</span>
      </div>
    </div>
  );
};

const ForecastIcon = props => {
  return <FontAwesomeIcon icon={forecastIcons[props.value]} />;
};

export default WeatherCard;
