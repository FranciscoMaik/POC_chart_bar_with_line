import { ComputedBarDatum } from '@nivo/bar';

export interface IChartData {
  x: string;
  v: number;
  v1: number;
  v2: number;
  lineChart: number;
}

export type IBar = ComputedBarDatum<IChartData>;
