import React from 'react';

import { Block, Container } from '../If-Design-System/Container';
import { PieChartNivo } from './nivo/PieChartNivo';
import { BarNivo } from './nivo/BarNivo';
import { BumpNivo } from './nivo/LineChartNivo';
import { MyVictoryPie }  from './Victory/Pie';
import { MyBrushLine } from './Victory/Brush';
import { PieRecharts } from './Recharts/Pie';
import PieVisx from './Visx/Pie';
import BarChartD3 from './d3/Bar';
import { PieSecond } from './d3/Pie2';
import { BarRecharts } from './Recharts/bar';
import { AnimatedPie } from './d3/AnimatedPie';
// Examples from https://www.youtube.com/watch?v=hR8xtl_IbCw
import { Basics } from './d3/Lessons/Basics';
import { Line } from './d3/Lessons/Line';
import { PieChart, DonutChart } from './d3/Pie';
import { MinimalDonut } from './d3/Pie/MinimalDonut';
import { ReportPanel } from './highcharts/ReportPanel'
import SplineExample from './highcharts/wrapper-library/Spline';
import { 
  StackedColumnChart,
  LineChart as HighChartsLine,
  PieChart as HighchartsPie,
  SplineChart as HighchartsSpline,
  StockmarketChart,
  StockMarketColumnChart,
  ChartPanel,
} from './highcharts';

import { MyChart } from './highcharts/wrapper-library/Demo';
import HighStockDemo from './highcharts/wrapper-library/Highstocks';
import CombinedDemo from './highcharts/wrapper-library/CombinedDemo';
import { Panel } from './highcharts/wrapper-library/CURRENT_DIRECTORY/Panel';

// chart.js
import Chart from './chart.js/Chart';

const allKeys = ["🥑", "🍌", "🍆"];

const colors = {
  "🥑": "green",
  "🍌": "orange",
  "🍆": "purple"
};

export const MockCharts = () => {
    
    const [data, setData] = React.useState([{ date: 1, value: 25}, { date: 2, value: 40 }]);
    const [keys, setKeys] = React.useState(allKeys);
    const [dataArea, setDataArea] = React.useState([
      {
        year: 1980,
        "🥑": 10,
        "🍌": 20,
        "🍆": 30
      },
      {
        year: 1990,
        "🥑": 20,
        "🍌": 40,
        "🍆": 60
      },
      {
        year: 2000,
        "🥑": 30,
        "🍌": 45,
        "🍆": 80
      },
      {
        year: 2010,
        "🥑": 40,
        "🍌": 60,
        "🍆": 100
      },
      {
        year: 2020,
        "🥑": 50,
        "🍌": 80,
        "🍆": 120
      }
    ]);


    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (data[0].value !== 25) return;
            setData([{ date: 1, value: 45}, { date: 2, value: 25 }]);
          }, 2000);
          return () => clearTimeout(timer);
    }, []);

    return (<Block>
        <Container> 
          <h2>Panel</h2>
          <ReportPanel />
            {/* <h2>Nivo</h2>
            <PieChartNivo />
            <BumpNivo />
            <BarNivo />
            <h2>Visx</h2>
            <PieVisx width={1000} height={500} /> 
            <h2>Victory</h2>
            <MyVictoryPie />
            <MyBrushLine /> */}
             <h2>Recharts</h2>
             <PieRecharts />
             {/*
            <BarRecharts />
            <h2>d3</h2>
            <h3>Lessons</h3>
            <Basics/>
            <br />
            <Line />
            <h3>Charts</h3>
            <BarChartD3 /> */}
            {/* <PieD3 /> */}
            {/*
            <AnimatedPie
                data={data}
                width={200}
                height={200}
                innerRadius={60}
                outerRadius={100}
            /> */}
            <br />
            <PieChart />
            <DonutChart />
            {/* <br />
            <PieSecond /> */}
            <br />
            <MinimalDonut />
            <br />
            <Chart />
            <StackedColumnChart />
            <HighChartsLine />
            <HighchartsPie 
              title="Browser market share"  
              data={[{
                name: 'Chrome',
                y: 61.41,
              }, {
                name: 'Internet Explorer',
                y: 11.84
              }, {
                name: 'Firefox',
                y: 10.85,
              }, {
                name: 'Edge',
                y: 4.67
              }, {
                name: 'Safari',
                y: 4.18
              }, {
                name: 'Sogou Explorer',
                y: 1.64
              }, {
                name: 'Opera',
                y: 1.6
              }, {
                name: 'QQ',
                y: 1.2
              }, {
                name: 'Other',
                y: 2.61
              }]}
            />
            <HighchartsSpline />
            <StockmarketChart />
            <StockMarketColumnChart />
            <h6>Panel</h6>
            <ChartPanel />
            <h2> SYNC CHARTS </h2>
            <MyChart />
            <h2>Spline example</h2>
            <SplineExample /> 
            <SplineExample /> 
            <h2>Stock demo</h2>
            <HighStockDemo />
            <CombinedDemo />
            <h1>Latest Panel</h1>
            <Panel />
        </Container>
    </Block>);
}

