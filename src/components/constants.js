import {
  faCloud,
  faCloudRain,
  faSun,
  faSnowflake,
} from '@fortawesome/free-solid-svg-icons';

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const forecastIcons = {
  sunny: faSun,
  rainy: faCloudRain,
  cloudy: faCloud,
  snowy: faSnowflake,
};

export { weekDays, forecastIcons };
