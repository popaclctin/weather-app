import React from 'react';

const HourCard = props => {
  const { hour, temperature } = props;
  return (
    <div className="hour-card">
      <p>{temperature}&deg;</p>
      <p>{`${hour}:00`}</p>
    </div>
  );
};

export default HourCard;
