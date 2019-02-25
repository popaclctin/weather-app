import React from 'react';
import WeatherCard from './WeatherCard';

const WeatherCardList = props => {
  const { list, selected, onClick } = props;
  return list.map(day => (
    <WeatherCard
      key={day.date.getTime()}
      day={day}
      onClick={onClick}
      selected={selected}
    />
  ));
};

export default WeatherCardList;
