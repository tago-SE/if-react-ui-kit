import React from 'react';
import DatePicker from 'react-datepicker';

// Test data
import appleData from '../data/apple-column.json';

// Charts
import { StockMarketColumnChart } from '../StockMarketColumnChart_WithCustomFilter';

// Temp 
import { LineChart } from '../LineChart';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

import { ChartContainer } from '../ChartContainer';


const SomeLineChart = ({ data }: { data: number[] }) => {

    const chartOptions = {
        xAxis: {
            categories: ['A', 'B', 'C'],
          },
          series: [
            { data: data }
          ],
    };
    return (
        <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          containerProps = {{ className: 'line-chart' }}
        />
      </div>
    );
}

const SomeStockMarketChart = ({ dataInput } : { dataInput: any}) => {
    const chartOptions = {
        credits: { enabled: false, },
        colors: ["#00ff00", "#ff0000", "#0000ff"],
        chart: { 
            type: 'column',
            styleMode: true,
            alignTicks: false,
            className: 'column'
        },
      
        rangeSelector: {
          selected: -1,
        },
    
        title: {
          text: 'AAPL Stock Volume'
        },
      
        tooltip: {
          shared: true,
          split: false,
          formatter: function() {
            // console.log("this", this);
            const points = this.points;
            const date = this.x;
            let  returnString = '<b>Stack name: </b>' + /* this.y */ this.x + '<br/><b>' + new Date(this.x) + '</b><br/>';
            for (let i = 0; i < points.length; i++) {
              const { point, series, color, total } = points[i];
              returnString += series.name + ': ' + point.y + '<br/>';
              //console.log("point", points[i]);
            }
            return returnString;
          },
        },

        series: [
          {
            type: 'column',
            name: 'AAPL Stock Volume',
            data: dataInput,
            // data: data.filter(d => d[0] >= floor),
            tooltip: {
              pointFormatter: function() {
                return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + (this.y > 0 ? 'On' : 'off') + '</b><br/>';
              }
            },
          },
        ],
        plotOptions: {
          column: {
            pointPadding: 0,
            borderWidth: 0,
            stacking: 'normal ',
          }
        }, 
    };

    return (
        <ChartContainer>
          <HighchartsReact
          highcharts={Highcharts}
          constructorType={"stockChart"}
          options={chartOptions}
          containerProps = {{ className: "highcharts", style: { width: "100%", height: "100%" } }}
      
        />
      </ChartContainer>
    );
}


const getBoundingTimestamps = (data) => {
    let minTimestamp = Number.MAX_SAFE_INTEGER;
    let maxTimestamp = Number.MIN_SAFE_INTEGER;
    data.forEach(d => {
      let timestamp = d[0];
      if (timestamp < minTimestamp) minTimestamp = timestamp;
      else if (timestamp > maxTimestamp) maxTimestamp = timestamp;
    });
    return { minTimestamp: minTimestamp, maxTimestamp: maxTimestamp};
}

export const ChartPanel = () => {
    const { minTimestamp, maxTimestamp } = getBoundingTimestamps(appleData);
    const minDate = new Date(minTimestamp);
    const maxDate = new Date(maxTimestamp);
    const [startDate, setStartDate] = React.useState(minDate);
    const [endDate, setEndDate] = React.useState(maxDate);

    const [lineData, setLineData] = React.useState([]);

    const [chart, setChart] = React.useState(undefined);
    console.log("Hello!");

    const handleStartDateClick = (date: Date) => {
        setStartDate(date);
        let minRange = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
        let maxRange = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
        const xAxis = chart.xAxis[0];
        xAxis.setExtremes(
          minRange,
          maxRange,
        );
      }
  
      const handleEndDateClick = (date: Date) => {
        setEndDate(date);
        let selectedTimestamp = date.getUTCDate();
        console.log("Clicked start date: ", date, selectedTimestamp, Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        let maxRange = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
        let minRange = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        const xAxis = chart.xAxis[0];
        xAxis.setExtremes(
          minRange,
          maxRange,
        );
      }

      const handleLineChange = () => {
        if (lineData.length === 0)
        setLineData([4, 5, 6, 8, 12]);
        else {
            let x = lineData;
            let y = Math.floor(Math.random() * Math.floor(15));
            x.push(y);
            setLineData([...x]);
        }
      }
    

    return (<>
        <p>Line!!</p>
        <SomeLineChart data={lineData} />
        <button type="button" className="if primary button" onClick={handleLineChange}>Add node to line chart</button>
        <SomeStockMarketChart dataInput={appleData} />
        <p>End</p>


        <DatePicker
            selected={startDate}
            onChange={date => handleStartDateClick(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={minDate}
        />
        <DatePicker
            selected={endDate}
            onChange={date => handleEndDateClick(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            maxDate={maxDate}
            minDate={startDate}
        />
        <br />
        <p>chart:</p>
        <StockMarketColumnChart onChartCreated={(chart) => setChart(chart)} />
    </>);
}