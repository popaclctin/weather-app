import React from 'react';
import { Group } from '@vx/group';
import { LinePath } from '@vx/shape';
import { scaleLinear, scaleTime } from '@vx/scale';
import { extent, max, min } from 'd3-array';
import { AxisLeft, AxisBottom } from '@vx/axis';

function WeatherGraph({ data, width, height }) {
  const margin = {
    top: 60,
    bottom: 60,
    left: 80,
    right: 80,
  };

  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const x = d => new Date(d.dt);
  const y = d => d.temperature;

  const xScale = scaleTime({
    rangeRound: [0, xMax],
    domain: extent(data, x),
  });

  const yScale = scaleLinear({
    rangeRound: [yMax, 0],
    domain: [Math.min(-16, min(data, y)), Math.max(24, max(data, y))],
  });
  return (
    <svg width={width} height={height}>
      <Group top={margin.top} left={margin.left}>
        <AxisBottom
          scale={xScale}
          top={yMax}
          label={'Hours'}
          stroke={'#777777'}
          tickTextFill={'#777777'}
        />
        <AxisLeft
          scale={yScale}
          top={0}
          left={0}
          label={'Temperature (°C)'}
          stroke={'#777777'}
          tickTextFill={'#777777'}
        />
        <LinePath
          data={data}
          x={d => xScale(x(d))}
          y={d => yScale(y(d))}
          strokeWidth={3}
          stroke="#d9534f"
        />
      </Group>
    </svg>
  );
}

export default WeatherGraph;
