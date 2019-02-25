import React from 'react';
import HourCard from './HourCard';

const HourCardList = props => {
  const hoursCardList = [];
  for (let key in props.hours) {
    if (hours.hasOwnProperty(key)) {
      hoursCardList.push(
        <HourCard key={key} hour={key} temperature={hours[key]} />,
      );
    }
  }
  return <div className="hours-list">{hoursCardList}</div>;
};

export default HourCardList;
