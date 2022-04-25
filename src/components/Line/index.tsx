import React from 'react';
import { line, curveNatural } from 'd3';

import { dataRequest } from '../../constants';
import { transformData } from '../../utils';

import { IBar } from '../../types';

// line color chart
const lineColor = '#fff000';

const { keys } = transformData(dataRequest);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Line = function ({ bars, xScale, yScale }: any) {
  const barsFilter = bars.filter(
    (itemBar: { data: { id: string } }) => itemBar.data.id === keys[0]
  );

  const lineGenerator = line<IBar>()
    .x(bar => xScale(bar.data.indexValue) + bar.width / 2)
    .y(bar => yScale(bar.data.data.lineChart))
    .defined((_, i) => i >= 12)
    .curve(curveNatural);

  return (
    <>
      <path
        d={lineGenerator(barsFilter) as string}
        fill="none"
        stroke={lineColor}
        style={{ pointerEvents: 'none' }}
      />
      {/* {bars.map((bar: IBar) => (
        <circle
          key={bar.key}
          cx={xScale(bar.data.indexValue) + bar.width / 2}
          cy={yScale(bar.data.data.lineChart)}
          r={4}
          fill="white"
          stroke={lineColor}
          style={{ pointerEvents: 'none' }}
        />
      ))} */}
    </>
  );
};
