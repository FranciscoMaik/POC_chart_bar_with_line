import React from 'react';
import { line } from 'd3-shape';

import { data } from '../../constants';

import { IBar } from '../../types';

// line color chart
const lineColor = '#fff000';

export const Line = function ({ bars, xScale, yScale }: any) {
  const lineGenerator = line<IBar>()
    .x(bar => xScale(bar.data.indexValue) + bar.width / 2)
    .y(bar => yScale(bar.data.data.lineChart));

  return (
    <>
      <path
        d={lineGenerator(bars.slice(0, data.length)) as string}
        fill="none"
        stroke={lineColor}
        style={{ pointerEvents: 'none' }}
      />
      {bars.map((bar: IBar) => (
        <circle
          key={bar.key}
          cx={xScale(bar.data.indexValue) + bar.width / 2}
          cy={yScale(bar.data.data.lineChart)}
          r={4}
          fill="white"
          stroke={lineColor}
          style={{ pointerEvents: 'none' }}
        />
      ))}
    </>
  );
};
