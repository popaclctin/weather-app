import React, { Component } from 'react';
import DayForecastList from './components/DayForecastList';
import HourForecastList from './components/HourForecastList';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

const groupByDate = list => {
  return list.reduce((result, forecast) => {
    const date = new Date(forecast.dt * 1000);
    const dateString = date.toDateString();
    if (!result[dateString]) result[dateString] = [];
    result[dateString].push(forecast);
    return result;
  }, {});
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: null,
      dayForecast: null,
      selected: null,
      error: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchForecast();
  }

  onClickCard = id => {
    this.setState({ selected: id });
  };

  fetchForecast() {
    this.setState({ isLoading: true });
    axios(
      'http://api.openweathermap.org/data/2.5/forecast?id=685948&APPID=ca44e2651db34cadd7987a1512474a89&units=metric',
    )
      .then(result =>
        this.setState({
          forecast: result.data,
          isLoading: false,
          dayForecast: groupByDate(result.data.list),
        }),
      )
      .catch(error => this.setState({ error }));
  }

  render() {
    const {
      error,
      forecast,
      dayForecast,
      selected,
      isLoading,
    } = this.state;

    return (
      <div className="main">
        <Route
          path="/"
          render={() => {
            let result;
            if (isLoading) result = <p>Loading...</p>;
            else
              result = (
                <DayForecastList
                  list={dayForecast}
                  selected={selected}
                  onClick={this.onClickCard}
                  location={forecast.city.name}
                />
              );
            if (error) result = <p>There is an error!</p>;
            return result;
          }}
          exact
        />
        <Route
          path="/:name_of_day"
          render={props => {
            const nameOfDay = props.match.params.name_of_day;
            let day;
            for (let key in dayForecast) {
              if (dayForecast.hasOwnProperty(key)) {
                if (key.startsWith(nameOfDay)) day = dayForecast[key];
              }
            }
            return day ? (
              <div>
                <h1 style={{ 'text-align': 'center' }}>
                  {nameOfDay}
                </h1>
                <HourForecastList list={day} />
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
        />
      </div>
    );
  }
}

export default App;
