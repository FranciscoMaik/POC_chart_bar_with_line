interface IHistory {
  date: string;
  value: number;
}

export interface IChartDataRequest {
  projection: IHistory[];
  tickersInfo: {
    ticker: string;
    price: number;
    dividendsAverage12Months: number;
    averagePVP: number;
    vp: number;
    vpc: number;
    emittedQuotes: number;
    monthlyPreview: number;
    dividendsYield12: number;
    history: IHistory[];
  }[];
}
