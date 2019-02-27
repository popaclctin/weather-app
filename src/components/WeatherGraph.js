import React from 'react';
import { Group } from '@vx/group';
import { Bar, Line, AreaClosed } from '@vx/shape';
import { scaleLinear, scaleTime } from '@vx/scale';
import { extent, max } from 'd3-array';

// We'll use some mock data from `@vx/mock-data` for this.
const data = [
  {
    dt: 1406109000,
    main: {
      temp: 220.77,
      temp_min: 298.77,
      temp_max: 298.774,
      pressure: 1005.93,
      sea_level: 1018.18,
      grnd_level: 1005.93,
      humidity: 87,
      temp_kf: 0.26,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: { all: 88 },
    wind: { speed: 5.71, deg: 229.501 },
    sys: { pod: 'd' },
    dt_txt: '2014-07-23 09:00:00',
  },
  {
    dt: 1406106000,
    main: {
      temp: 277.77,
      temp_min: 298.77,
      temp_max: 298.774,
      pressure: 1005.93,
      sea_level: 1018.18,
      grnd_level: 1005.93,
      humidity: 87,
      temp_kf: 0.26,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: { all: 88 },
    wind: { speed: 5.71, deg: 229.501 },
    sys: { pod: 'd' },
    dt_txt: '2014-07-23 09:00:00',
  },
  {
    dt: 1406108000,
    main: {
      temp: 244.77,
      temp_min: 298.77,
      temp_max: 298.774,
      pressure: 1005.93,
      sea_level: 1018.18,
      grnd_level: 1005.93,
      humidity: 87,
      temp_kf: 0.26,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: { all: 88 },
    wind: { speed: 5.71, deg: 229.501 },
    sys: { pod: 'd' },
    dt_txt: '2014-07-23 09:00:00',
  },
];

// Define the graph dimensions and margins
const width = 500;
const height = 500;
const margin = { top: 20, bottom: 20, left: 20, right: 20 };

// Then we'll create some bounds
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

// We'll make some helpers to get at the data we want
const x = d => new Date(d.dt * 1000);
const y = d => d.main.temp;

// And then scale the graph by our data
const xScale = scaleTime({
  rangeRound: [0, xMax],
  domain: extent(data, x),
});
const yScale = scaleLinear({
  rangeRound: [yMax, 0],
  domain: [0, max(data, y)],
});

// Compose together the scale and accessor functions to get point functions
const compose = (scale, accessor) => data => scale(accessor(data));
const xPoint = compose(
  xScale,
  x,
);
const yPoint = compose(
  yScale,
  y,
);

// Finally we'll embed it all in an SVG
function BarGraph(props) {
  return (
    <svg width={width} height={height}>
      <Group top={margin.top} left={margin.left}>
        <AreaClosed
          data={data}
          yScale={yScale}
          x={x}
          y={y}
          fill={'red'}
        />
      </Group>
    </svg>
  );
}

export { BarGraph as WeatherGraph };
