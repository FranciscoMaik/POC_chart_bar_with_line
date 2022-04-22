import { IChartDataRequest } from '../types';

interface IDataLine {
  id: string;
  color: string;
  data: { x: string; y: number }[];
}

export const transformDataLine = (data: IChartDataRequest): IDataLine[] => {
  const objectData = data.projection.map(itens => ({
    x: itens.date.split('T')[0],
    y: Number(itens.value.toFixed(2)),
  }));

  return [
    {
      id: 'projection',
      color: '#fff000',
      data: objectData,
    },
  ];
};
