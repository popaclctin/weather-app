import React, { Component } from 'react';
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
    date: new Date(2019, 1, 24),
    high: 8,
    low: -3,
    forecast: 'sunny',
    hours: {
      '7': 7,
      '9': 3,
      '11': 2,
      '13': 6,
      '15': 8,
      '17': 7,
      '19': 3,
      '21': 1,
      '23': 0,
      '1': 1,
      '3': 2,
      '5': 2,
    },
  },
  {
    date: new Date(2019, 1, 25),
    high: 8,
    low: 1,
    forecast: 'cloudy',
    hours: {
      '7': -2,
      '9': 1,
      '11': 5,
      '13': 7,
      '15': 7,
      '17': 7,
      '19': 5,
      '21': 4,
      '23': 4,
      '1': 4,
      '3': 3,
      '5': 3,
    },
  },
  {
    date: new Date(2019, 1, 26),
    high: 4,
    low: -2,
    forecast: 'snowy',
    hours: {
      '7': 3,
      '9': 2,
      '11': 2,
      '13': 3,
      '15': 4,
      '17': 4,
      '19': 3,
      '21': 2,
      '23': 1,
      '1': 1,
      '3': -1,
      '5': -1,
    },
  },
  {
    date: new Date(2019, 1, 27),
    high: 12,
    low: 3,
    forecast: 'cloudy',
    hours: {
      '7': 0,
      '9': 3,
      '11': 8,
      '13': 11,
      '15': 11,
      '17': 9,
      '19': 7,
      '21': 6,
      '23': 6,
      '1': 5,
      '3': 4,
      '5': 4,
    },
  },
  {
    date: new Date(2019, 2, 0),
    high: 9,
    low: 1,
    forecast: 'rainy',
    hours: {
      '7': 4,
      '9': 6,
      '11': 8,
      '13': 9,
      '15': 9,
      '17': 8,
      '19': 6,
      '21': 4,
      '23': 4,
      '1': 3,
      '3': 2,
      '5': 2,
    },
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: daysList,
      selected: null,
    };
  }

  onClickCard = id => {
    this.setState({ selected: id });
  };

  render() {
    const { list, selected } = this.state;
    let selectedItem = list.find(a => a.date.getTime() === selected);
    if (!selectedItem) selectedItem = null;
    const weatherCardList = list.map(day => (
      <WeatherCard
        key={day.date.getTime()}
        day={day}
        onClick={this.onClickCard}
        selected={selected}
      />
    ));
    return (
      <div className="weather">
        <div className="weather-list">{weatherCardList}</div>
        <HoursCard day={selectedItem} />
      </div>
    );
  }
}

const ForecastIcon = props => {
  return <FontAwesomeIcon icon={forecastIcon[props.value]} />;
};

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

const HoursCard = props => {
  const hours = props.day ? props.day.hours : {};
  const result = [];
  for (let key in hours) {
    if (hours.hasOwnProperty(key)) {
      result.push(
        <HourCard key={key} hour={key} temperature={hours[key]} />,
      );
    }
  }
  return <div className="hours-card">{result}</div>;
};

const HourCard = props => {
  const { hour, temperature } = props;
  return (
    <div className="hour-card">
      <p>{temperature}&deg;</p>
      <p>{`${hour}:00`}</p>
    </div>
  );
};

export default App;
