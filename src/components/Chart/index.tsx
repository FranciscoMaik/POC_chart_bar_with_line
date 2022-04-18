import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Bar, ComputedBarDatum } from '@nivo/bar';
import { line } from 'd3-shape';

const Container = styled.div`
  display: flex;
`;

// line color chart
const lineColor = '#fff000';

const data = [
  { label: '0', v: 3.3, v1: 2.0, v2: 2.0, lineChart: 1 },
  { label: '1', v: 3.5, v1: 3.1, v2: 2.0, lineChart: 1.3 },
  { label: '2', v: 3.8, v1: 2.3, v2: 2.0, lineChart: 2 },
  { label: '3', v: 4.1, v1: 3.1, v2: 2.0, lineChart: 12.3 },
  { label: '4', v: 4.4, v1: 4.0, v2: 2.0, lineChart: 2.6 },
  { label: '5', v: 4.7, v1: 3.9, v2: 2.0, lineChart: 2.7 },
  { label: '6', v: 4.9, v1: 2.9, v2: 2.0, lineChart: 6 },
  { label: '7', v: 5.2, v1: 3.3, v2: 2.0, lineChart: 4 },
  { label: '8', v: 5.2, v1: 3.3, v2: 2.0, lineChart: 1 },
  { label: '9', v: 5.2, v1: 3.3, v2: 2.0, lineChart: 2 },
  { label: '10', v: 5.2, v1: 3.3, v2: 2.0, lineChart: 3 },
  { label: '11', v: 5.2, v1: 3.3, v2: 2.0, lineChart: 4 },
  { label: '12', v: 5.2, v1: 3.3, v2: 2.0, lineChart: 5 },
  { label: '13', v: 5.2, v1: 3.3, v2: 2.0, lineChart: 6 },
  { label: '14', v: 5.2, v1: 3.3, v2: 2.0, lineChart: 7 },
  { label: '15', v: 5.2, v1: 3.3, v2: 2.0, lineChart: 8 },
  { label: '16', v: 5.2, v1: 3.3, v2: 2.0, lineChart: 9 },
];

interface IChartData {
  x: string;
  v: number;
  v1: number;
  v2: number;
  lineChart: number;
}

type IBar = ComputedBarDatum<IChartData>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Line = function ({ bars, xScale, yScale }: any) {
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

export const Chart: React.FC = function () {
  // get the keys that are neither the main label nor the row data
  const keys = Object.keys(data[0]).filter(
    key => key !== 'label' && key !== 'lineChart'
  );

  return (
    <Container>
      <Bar
        width={500}
        height={400}
        data={data}
        keys={keys}
        maxValue={19}
        padding={0.6}
        margin={{
          top: 10,
          right: 10,
          bottom: 36,
          left: 36,
        }}
        groupMode="stacked"
        indexBy="label"
        enableLabel={false}
        colors={{ scheme: 'set1' }}
        borderRadius={2}
        axisLeft={{
          tickValues: 7,
        }}
        layers={['grid', 'axes', 'bars', Line, 'markers', 'legends']}
      />
    </Container>
  );
};
