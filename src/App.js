import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faCloudRain,
  faSun,
  faSnowflake,
} from '@fortawesome/free-solid-svg-icons';
const weekDay = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const forecastIcon = {
  sunny: faSun,
  rainy: faCloudRain,
  cloudy: faCloud,
  snowy: faSnowflake,
};

const daysList = [
  {
    date: new Date(2019, 1, 23),
    high: 1,
    low: -6,
    forecast: 'sunny',
  },
  {
    date: new Date(2019, 1, 24),
    high: 9,
    low: -2,
    forecast: 'cloudy',
  },
  {
    date: new Date(2019, 1, 25),
    high: 9,
    low: 1,
    forecast: 'cloudy',
  },
  {
    date: new Date(2019, 1, 26),
    high: 4,
    low: -1,
    forecast: 'snowy',
  },
  {
    date: new Date(2019, 1, 27),
    high: 12,
    low: 3,
    forecast: 'rainy',
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: daysList,
    };
  }

  render() {
    const { list } = this.state;
    const result = list.map(day => (
      <Weather key={day.date.toString()} day={day} />
    ));
    return <div className="weather-list">{result}</div>;
  }
}

const ForecastIcon = props => {
  return <FontAwesomeIcon icon={forecastIcon[props.value]} />;
};

const Weather = props => {
  const { day } = props;
  return (
    <div className="weather-card">
      <div className="weekDay">{weekDay[day.date.getDay()]}</div>
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

export default App;
