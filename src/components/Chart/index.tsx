import React from 'react';
import styled from 'styled-components';
import { Bar } from '@nivo/bar';
import { line } from 'd3-shape';

const Container = styled.div`
  display: flex;
`;

// // `x` is used for labels
// // `v` is used for bars
// // `v1` is used for line
// // `v2` is used for area

const lineColor = 'rgba(200, 30, 15, 1)';

const data = [
  { x: 'A', v: 3.3, v1: 2.0, v2: 1.2 },
  { x: '1', v: 3.5, v1: 3.1, v2: 1.3 },
  { x: '2', v: 3.8, v1: 2.3, v2: 1.1 },
  { x: '3', v: 4.1, v1: 3.1, v2: 2.3 },
  { x: '4', v: 4.4, v1: 4.0, v2: 2.6 },
  { x: '5', v: 4.7, v1: 3.9, v2: 2.7 },
  { x: '6', v: 4.9, v1: 2.9, v2: 2.3 },
  { x: '7', v: 5.2, v1: 3.3, v2: 1.8 },
];

const Line = function ({ bars, xScale, yScale }) {
  const lineGenerator = line()
    .x(bar => xScale(bar.data.indexValue) + bar.width / 2)
    .y(bar => yScale(bar.data.data.v1));

  return (
    <>
      <path
        d={lineGenerator(bars) as string}
        fill="none"
        stroke={lineColor}
        style={{ pointerEvents: 'none' }}
      />
      {/* adicionando círculos na linha */}
      {/* {bars.map(bar => (
        <circle
          key={bar.key}
          cx={xScale(bar.data.indexValue) + bar.width / 2}
          cy={yScale(bar.data.data.v1)}
          r={4}
          fill="white"
          stroke={lineColor}
          style={{ pointerEvents: 'none' }}
        />
      ))} */}
    </>
  );
};

export const Chart: React.FC = function () {
  return (
    <Container>
      <Bar
        width={500}
        height={400}
        data={data}
        keys={['v']}
        maxValue={6}
        padding={0.1}
        margin={{
          top: 10,
          right: 10,
          bottom: 36,
          left: 36,
        }}
        indexBy="x"
        enableLabel={false}
        colors={{ scheme: 'nivo' }}
        borderRadius={2}
        axisLeft={{
          tickValues: 7,
        }}
        layers={['grid', 'axes', 'bars', Line, 'markers', 'legends']}
      />
    </Container>
  );
};
