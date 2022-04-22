import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

import { dataRequest } from '../../constants';
import { transformData } from '../../utils';

import { Container } from './styles';

export const ChartBar: React.FC = function () {
  const { data, keys } = transformData(dataRequest);

  return (
    <Container>
      <ResponsiveBar
        data={data}
        keys={keys}
        padding={0.6}
        margin={{
          top: 10,
          bottom: 56,
          right: 10,
          left: 36,
        }}
        groupMode="stacked"
        indexBy="label"
        enableLabel={false}
        colors={{ scheme: 'set1' }}
        borderRadius={2}
        axisLeft={{
          tickSize: 7,
          tickPadding: 3,
        }}
        axisBottom={{
          tickSize: 7,
          tickPadding: 3,
          tickRotation: 45,
        }}
        layers={['grid', 'axes', 'bars', 'markers', 'legends']}
      />
    </Container>
  );
};
