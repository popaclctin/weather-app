import React from 'react';
import WeatherCard from './WeatherCard';
import HourCardList from './HourCardList';

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
  const selectedDay = list.find(
    item => item.date.getTime() === selected,
  );
  const hours = selectedDay ? selectedDay.hours : null;
  return (
    <div className="weather">
      <div className="weather-list">{weatherCardList}</div>
      <HourCardList hours={hours} />
    </div>
  );
};

export default WeatherCardList;
