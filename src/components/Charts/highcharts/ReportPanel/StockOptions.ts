export const stockOptions = {
  chart: {
    animation: true,
  },
  yAxis: [
    {
      height: '75%',
      labels: {
        align: 'right',
        x: -3
      },
      title: {
        text: 'AAPL'
      }
    }, 
  ],
  series: [{
    data: [],
    type: 'column', // 'ohlc',
    name: 'AAPL Stock Price',
    id: 'aapl'
  }],
  rangeSelector: {
    enabled: true,
    inputEnabled : true
  }
};
