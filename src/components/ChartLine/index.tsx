import React from 'react';
import { ResponsiveLine } from '@nivo/line';

import { dataRequest } from '../../constants';
import { transformDataLine } from '../../utils';

import { Container } from './styles';

export const ChartLine: React.FC = function () {
  const data = transformDataLine(dataRequest);

  const colors = data.map(itemColors => itemColors.color);

  return (
    <Container>
      <ResponsiveLine
        data={data}
        colors={colors}
        margin={{
          top: 10,
          bottom: 56,
          right: 10,
          left: 36,
        }}
        curve="natural"
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 0,
          max: 'auto',
        }}
        yFormat=" >-.2f"
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 45,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
        }}
        useMesh={false}
      />
    </Container>
  );
};
