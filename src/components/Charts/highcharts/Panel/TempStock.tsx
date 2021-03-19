import React, { Component } from 'react';
import { render } from 'react-dom';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import 
import HighchartsReact from 'highcharts-react-official';
import Highcharts from "highcharts/highstock";
import { allColors, selectedBlue, primaryBlue, primaryRed, primaryYellow, primaryGreen } from '../../Colors';
import './highcharts.scss';
import { ChartContainer } from '../ChartContainer';

import data from '../data/apple-column.json';
import { on } from 'process';

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

interface IProps {
  startDate2?: Date,
  endDate2?: Date,
  onChartCreated?: (chart: any) => void,
}

// https://whawker.github.io/react-jsx-highcharts/examples/CustomComponent/index.html
export const StockMarketColumnChart = ({ 
  startDate2, 
  endDate2,
  onChartCreated,
} : IProps) => {
    
    const { minTimestamp, maxTimestamp } = getBoundingTimestamps(data);
    const minDate = new Date(minTimestamp);
    const maxDate = new Date(maxTimestamp);

    const [startDate, setStartDate] = React.useState(startDate2 ? startDate2 : minDate);
    const [endDate, setEndDate] = React.useState(endDate2 ? endDate2 : maxDate);

    let later = new Date(minDate)
    later.setDate(later.getDate() + 365);
    const floor = later.getTime();

    const [state, setState] = React.useState({ 
      createdChart: undefined,
      //#endregion Options
      chartOptions: {
        credits: { enabled: false, },
        colors: [primaryBlue, primaryRed, primaryYellow],
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
            data: data,
            // data: data.filter(d => d[0] >= floor),
            tooltip: {
              pointFormatter: function() {
                return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + (this.y > 0 ? 'On' : 'off') + '</b><br/>';
              }
            },
          },
          // {
          //   type: 'column',
          //   name: 'ZZZ Stock Volume', 
          //   data: data,
          // },
          // {
          //   type: 'column',
          //   name: 'YYY Stock Volume',
          //   data: data,
      
          // }
        ],
        plotOptions: {
          column: {
            pointPadding: 0,
            borderWidth: 0,
            stacking: 'normal ',
          }
        },
        xAxis: {
          //min: floor,
        }
        
      }
      //#endregion 
    });
    
    const afterChartCreated = (chart) => {
      setState({...state, createdChart: chart } )
      if (onChartCreated) {
        onChartCreated(chart);
      }
    }

    return (<>
      <ChartContainer>
          <HighchartsReact
          highcharts={Highcharts}
          constructorType={"stockChart"}
          options={state.chartOptions}
          containerProps = {{ className: "highcharts", style: { width: "100%", height: "100%" } }}
          callback={afterChartCreated}
        />
      </ChartContainer>
    </>);
}