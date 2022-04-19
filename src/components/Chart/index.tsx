import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

import { data } from '../../constants';
import { Line } from '..';

import { Container } from './styles';

export const Chart: React.FC = function () {
  // get the keys that are neither the main label nor the row data
  const keys = Object.keys(data[0]).filter(
    key => key !== 'label' && key !== 'lineChart'
  );

  return (
    <Container>
      <ResponsiveBar
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
