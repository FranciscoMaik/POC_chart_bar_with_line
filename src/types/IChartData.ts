import { ComputedBarDatum } from '@nivo/bar';

export interface IChartData {
  label: string;
  lineChart: number | string;
  [key: string]: number | string;
}

export type IBar = ComputedBarDatum<IChartData>;
