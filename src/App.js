import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import DayForecastList from './components/DayForecastList';
import HourForecastList from './components/HourForecastList';
import { Route } from 'react-router-dom';
import WeatherGraph from './components/WeatherGraph';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast5days: [],
      city: '',
      country: '',
      selected: null,
      error: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.fetchForecast();
  }

  onClick = weekday => {
    this.setState({ selected: weekday });
  };

  fetchForecast() {
    console.log('Inside fetchForecast');
    this.setState({ isLoading: true });
    axios(
      'http://api.openweathermap.org/data/2.5/forecast?id=685948&APPID=ca44e2651db34cadd7987a1512474a89&units=metric',
    )
      .then(result => {
        const data = result.data;
        const forecast = data.list.map(fc => ({
          dt: fc.dt * 1000,
          temperature: Math.round(fc.main.temp),
          weather: fc.weather[0].main,
          icon: fc.weather[0].icon,
        }));
        const forecast5days = groupByWeekday(forecast);
        return this.setState({
          forecast5days: forecast5days,
          isLoading: false,
          city: data.city.name,
        });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const {
      forecast5days,
      city,
      error,
      selected,
      isLoading,
    } = this.state;

    return (
      <BrowserRouter>
        <main>
          <Route
            path="/"
            render={() => {
              let result;
              if (isLoading) result = <p>Loading...</p>;
              else
                result = (
                  <DayForecastList
                    list={forecast5days}
                    selected={selected}
                    onClick={this.onClick}
                    city={city}
                  />
                );
              if (error) result = <p>There is an error!</p>;
              return result;
            }}
            exact
          />
          <Route
            path="/:weekday"
            render={props => {
              let result;
              const weekday = props.match.params.weekday;

              if (isLoading) result = <p>Loading...</p>;
              else {
                const day = forecast5days.find(
                  item => item.weekday === weekday,
                );
                result = day ? (
                  <div className="hoursGraph">
                    <h1>{day.weekday}</h1>
                    <HourForecastList list={day.forecast} />
                    <WeatherGraph
                      data={day.forecast}
                      width="800"
                      height="500"
                    />
                  </div>
                ) : (
                  <p>{`There exists no information for ${weekday}.`}</p>
                );
              }
              return result;
            }}
          />
        </main>
      </BrowserRouter>
    );
  }
}

const groupByWeekday = list => {
  var options = { weekday: 'long' };
  const grouped = list.reduce((result, fc) => {
    const date = new Date(fc.dt);
    const weekday = new Intl.DateTimeFormat('en-US', options).format(
      date,
    );
    if (!result[weekday]) result[weekday] = [];
    result[weekday].push(fc);
    return result;
  }, {});
  return Object.keys(grouped).map(key => ({
    weekday: key,
    forecast: grouped[key],
  }));
};

export default App;
