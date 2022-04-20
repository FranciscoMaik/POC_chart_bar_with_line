import { IChartDataRequest, IChartData } from '../types';

interface IAssistantArrayLine {
  label: string;
  lineChart: number | string;
}

interface IItemResponse {
  data: IChartData[];
  keys: Array<string>;
}

export const transformData = (data: IChartDataRequest): IItemResponse => {
  const dataChart: IChartData[] = [];
  const lineChartData: IAssistantArrayLine[] = [];

  const keys = data.tickersInfo.map(item => item.ticker);

  data.tickersInfo.forEach(item =>
    item.history.forEach(subItem => {
      const findExistItem = dataChart.findIndex(
        dataItem => dataItem.label === subItem.date.split('T')[0]
      );

      if (findExistItem !== -1) {
        dataChart[findExistItem] = {
          ...dataChart[findExistItem],
          [item.ticker]: Number(subItem.value.toFixed(2)),
        };
      } else {
        dataChart.push({
          label: subItem.date.split('T')[0],
          [item.ticker]: Number(subItem.value.toFixed(2)),
          lineChart: '0',
        });
      }
    })
  );

  data.projection.forEach(item => {
    lineChartData.push({
      label: item.date.split('T')[0],
      lineChart: item.value.toFixed(2),
    });
  });

  dataChart.sort((current, next) => {
    const timestampDateCurrent = new Date(current.label).getTime();
    const timestampDateNext = new Date(next.label).getTime();

    if (timestampDateCurrent < timestampDateNext) {
      return -1;
    }
    if (timestampDateCurrent > timestampDateNext) {
      return 1;
    }

    return 0;
  });

  dataChart.forEach((item, index) => {
    const findItemEqual = lineChartData.findIndex(
      line => line.label === item.label
    );

    if (findItemEqual !== -1) {
      dataChart[findItemEqual] = {
        ...item,
        lineChart: lineChartData[findItemEqual].lineChart,
      };
    } else {
      dataChart[index] = {
        ...item,
        lineChart: '0',
      };
    }
  });

  dataChart.forEach((item, index) => {
    const getKeys = Object.keys(item);

    let newObject = { ...item };

    keys.forEach(key => {
      const findEqualItem = getKeys.findIndex(subKey => subKey === key);

      if (findEqualItem === -1) {
        newObject = { ...newObject, [key]: 0 };
      }
    });

    dataChart[index] = newObject;
  });

  return { data: dataChart, keys };
};
