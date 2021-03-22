/* eslint-disable import/first */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from "highcharts/highstock";
// Load Highcharts modules
require("highcharts/modules/exporting")(Highcharts);
import { allColors, selectedBlue, primaryBlue, primaryRed, primaryYellow, primaryGreen } from '../Colors';
import './highcharts.scss';




const scrollbarColor = "#0054f0";
const trackColor = "#ede6e1";

interface IState {
    chartOptions: any,
    hoverData: any
}

interface IProps {

}

const seriesOptions = [], seriesCounter = 0, names = ['MSFT', 'AAPL', 'GOOG'];

import msft from './data/msft';
import appl from './data/appl';

// Ref: Source https://codepen.io/pen/


export class StockmarketChart extends Component<IProps, IState> {

  constructor(props) {
    super(props);
 
    this.state = {
      // To avoid unnecessary update keep all options in the state.
      chartOptions: {
        chart: { 
            backgroundColor: undefined,
            styleMode: true,
            style: {
              //fontFamily: 'serif'
            },
            



        //   className: 'column'
        // },
        // rangeSelector: {
        //   selected: 1
        
        },
        navigator: {
          handles: {
            enabled: true,
            backgroundColor: scrollbarColor,
            borderColor: scrollbarColor,
            height: 20,
            lineWidth: undefined,
            symbols: ["navigator-handle", "navigator-handle"],
            width: 7,
          },
          maskFill: "rgba(102,133,194,0.2)",
        },
        /**
         * Bottom track located below the navigator selection mask
         */
        scrollbar: {
          enabled: true,
          /* Whether to show or hide the scrollbar when the scrolled content is zoomed out to it full extent. */
          showFull: true,        
          barBackgroundColor: scrollbarColor,
          barBorderColor: scrollbarColor,

          buttonArrowColor: "#ffffff",
          buttonBackgroundColor: scrollbarColor,
          rifleColor: "#ffffff",

          trackBackgroundColor: trackColor,
          trackBorderColor: trackColor,
          trackBorderRadius: 0,
          trackBorderWidth: 1,

        },

        title: {
          text: "My Title",
        },

        legend: {
          enabled: true,
          margin: 48,
          padding: 20,
          itemStyle: {"color": "#333333", "cursor": "pointer", "fontSize": "12px", "fontWeight": "bold", "textOverflow": "ellipsis"},
          itemHiddenStyle:{ color: "#cccccc" },
          itemHoverStyle: { color: "#000000", },
          title: {
            text: "",
            style: { fontWeight: "bold"} 
          }
        },

        exporting: {
          enabled: true,
            
        },

        rangeSelector: {
          buttonTheme: { // styles for the buttons
            fill: 'none',
            stroke: 'none',
            'stroke-width': 0,
            r: 8,
            style: {
                color: '#039',
                fontWeight: 'bold'
            },
            states: {
                hover: {
                },
                select: {
                    fill: '#039',
                    style: {
                        color: 'white'
                    }
                }
                // disabled: { ... }
            },
        },
        inputBoxBorderColor: 'gray',
        inputBoxWidth: 120,
        inputBoxHeight: 18,
        inputStyle: {
            color: '#039',
            fontWeight: 'bold'
        },
        labelStyle: {
            color: 'silver',
            fontWeight: 'bold'
        },
        selected: -1,

          // inputBoxBorderColor: 'gray',
          // inputBoxWidth: 120,
          // inputBoxHeight: 18,

          // inputStyle: {
          //   color: '#00ffbb',
          //   fontWeight: undefined,
          //   font: undefined,
          // },
          // labelStyle: {
          //   color: 'silver',
          //   fontWeight: 'bold'
          // },

          dropdown: 'responsive',
          buttons: [{
              type: 'day',
              count: 7,
              text: '7d',
              title: 'View 1 week'
            }, {
              type: 'month',
              count: 1,
              text: '1m',
              title: 'View 1 month'
            }, {
              type: 'month',
              count: 3,
              text: '3m',
              title: 'View 3 months'
            }, {
              type: 'month',
              count: 6,
              text: '6m',
              title: 'View 6 months'
            }, {
              type: 'ytd',
              text: 'YTD',
              title: 'View year to date'
            }, {
              type: 'year',
              count: 1,
              text: '1y',
              title: 'View 1 year'
            }, {
              type: 'all',
              text: 'All',
              title: 'View all'
            }
          ]
        }, 
         
        credits: { enabled: false, },
        colors: allColors,
        yAxis: {
          labels: {
            formatter: function () {
              return (this.value > 0 ? ' + ' : '') + this.value + '%';
            }
          },
          plotLines: [{
            value: 0,
            width: 2,
            color: 'silver'
          }]  
        },
        xAxis: {
          type: 'datetime',
                dateTimeLabelFormats: {
                  millisecond: '%H:%M:%S.%L',
                  second: '%H:%M:%S',
                  minute: '%H:%M',
                  hour: '%H:%M',
                  day: '%e. %b',
                  week: '%e. %b',
                  month: '%b \'%y',
                  year: '%Y'
                },
          labels: {
            formatter: function () {
              return `${format(this.value, 'MMM')}'${format(this.value, 'd')}`;
            }
          },
        },
        /*
        tooltip: {
        formatter: function () {
            return this.points.reduce(function (s, point) {
                return s + '<br/>' + point.series.name + ': ' +
                    point.y + 'm';
            }, '<b>' + this.x + '</b>');
        },
        shared: true
    },
    */
        tooltip: {
          pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
          valueDecimals: 2,
          split: true,
          followPointer: true,
        },  
        series: [
          {
              name: 'MSFT',
              data: msft, 
          },
          {
            name: 'APPL',
            data: appl, 
          },
        ],
        plotOptions: {
          series: {
            compare: 'percent',
            showInNavigator: true
          }
        },
      },
      hoverData: null
    };
  }
 
  setHoverData = (e) => {
    // The chart is not updated because `chartOptions` has not changed.
    //this.setState({ hoverData: e.target.category })
  }
 
  updateSeries = () => {
    // The chart is updated only with new options.
    // this.setState({
    //   chartOptions: {
    //     series: [
    //       { data: [Math.random() * 5, 2, 1]}
    //     ]
    //   }
    // });
  }
 
  /*
   <div style={{ height: "500px", width: "100%"}}>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          containerProps = {{ className: 'line-chart', style: { width: "100%", height: "100%" } }}
  */
  render() {
    const { chartOptions, hoverData } = this.state;
    
    return (
      <div className="chartContainer">
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"stockChart"}
          options={chartOptions}
          containerProps = {{ className: 'highcharts', style: { width: "100%", height: "100%" } }}
        />
      <h3>Hovering over {hoverData}</h3>
      <button onClick={this.updateSeries.bind(this)}>Update Series</button>
      </div>
    )
  }
}