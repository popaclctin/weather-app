import React, { Component } from 'react';
import DayForecastList from './components/DayForecastList';
import HourForecastList from './components/HourForecastList';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { weekDays } from './components/constants';

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
      forecast: null,
      selected: null,
      error: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.fetchForecast();
  }

  onClickCard = id => {};

  fetchForecast() {
    this.setState({ isLoading: true });
    axios(
      'http://api.openweathermap.org/data/2.5/forecast?id=685948&APPID=ca44e2651db34cadd7987a1512474a89&units=metric',
    )
      .then(result => {
        console.log(result.data);
        return this.setState({
          forecast: result.data,
          isLoading: false,
        });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { error, forecast, selected, isLoading } = this.state;

    if (isLoading) return <p>Loading</p>;

    if (error) return <p>Eroare: {error}</p>;

    return (
      <div className="main">
        <Route
          path="/"
          render={() => (
            // <DayForecastList
            //   list={forecast.list}
            //   selected={selected}
            //   onClick={this.onClickCard}
            // />
            <p />
          )}
          exact
        />
        {/* <Route
          path="/:name_of_day"
          render={props => {
            const nameOfDay = props.match.params.name_of_day;
            const index = weekDays.indexOf(nameOfDay);
            const day = list.find(
              item => item.date.getDay() === index,
            );
            return day ? (
              <div>
                <h1 style={{ 'text-align': 'center' }}>
                  {nameOfDay}
                </h1>
                <HourForecastList hours={day.hours} />
              </div>
            ) : (
              <p
                style={{
                  'font-size': '2rem',
                  'text-align': 'center',
                }}
              >{`There exists no information for ${nameOfDay}.`}</p>
            );
          }}
        /> */}
      </div>
    );
  }
}

export default App;
