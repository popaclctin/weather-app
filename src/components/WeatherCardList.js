import React from 'react';
import WeatherCard from './WeatherCard';

const WeatherCardList = props => {
  const { list, selected, onClick } = props;
  const weatherCardList = list.map(day => (
    <WeatherCard
      key={day.date.getTime()}
      day={day}
      onClick={onClick}
      selected={selected}
    />
  ));
  return <div className="weather-list">{weatherCardList}</div>;
};

export default WeatherCardList;
