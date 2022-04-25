import { IChartDataRequest, IChartData } from '../types';

type IAssistantArrayLine = IChartData;

interface IItemResponse {
  data: IChartData[];
  keys: Array<string>;
  maxValueArray: number;
}

export const testeFunctions = (data: IChartDataRequest): IItemResponse => {
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
    const findEqualDate = lineChartData.findIndex(
      itemLine => itemLine.label === item.label
    );

    if (findEqualDate !== -1) {
      dataChart[index] = {
        ...item,
        lineChart: lineChartData[findEqualDate].lineChart,
      };
    }
  });

  const getEqualIndexArrayLineAndBar = lineChartData.findIndex(
    item => item.label === dataChart[dataChart.length - 1].label
  );

  for (
    let index = getEqualIndexArrayLineAndBar;
    index < lineChartData.length;
    index += 1
  ) {
    const element = lineChartData[index];

    dataChart.push(element);
  }

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

  const maxValueBar = Math.max(
    ...dataChart.map(item => {
      let total = 0;
      Object.entries(item).forEach(([key, value]) => {
        if (key !== 'lineChart' && key !== 'label') {
          total += Number(value);
        }
      });

      return total + 10;
    })
  ).toFixed(0);

  const maxValueLine =
    Number(
      Math.max(...lineChartData.map(item => Number(item.lineChart))).toFixed(0)
    ) + 10;

  const maxValueChart = Math.max(Number(maxValueBar), maxValueLine);

  return { data: dataChart, keys, maxValueArray: maxValueChart };
};
