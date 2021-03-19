import React, { Component } from 'react';
import { render } from 'react-dom';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { allColors, selectedBlue, primaryBlue, primaryRed, primaryYellow, primaryGreen } from '../Colors';
import './highcharts.scss';

interface IState {
    chartOptions: any,
    hoverData: any
}

interface IProps {

}

export class StackedColumnChart extends Component<IProps, IState> {

  constructor(props) {
    super(props);
 
    this.state = {
      // To avoid unnecessary update keep all options in the state.
      chartOptions: {
        credits: { enabled: false, },
        colors: allColors,
        chart: { 
            type: 'column',
            styleMode: true,
            className: 'column'
        },
        title: {
            text: 'Stacked column chart'
        },
        subtitle: {
            text: undefined,
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        tooltip: {
            animation: true,
            borderColor: "none",
            backgroundColor: "#060f01",
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            className: "tooltip",
            followTouchMove: true,
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
              pointPadding: 0,
              borderWidth: 0,
              pointWidth: 16,
              stacking: 'number'
            }
        },
        series: [
            {
                name: 'Tokyo',
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4] 
            }, {
                name: 'New York',
                data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
        
            }, {
                name: 'London',
                data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
            }, {
                name: 'Berlin',
                data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
                
            }
        ]  
      },
      hoverData: null
    };
  }
 
//   setHoverData = (e) => {
//     // The chart is not updated because `chartOptions` has not changed.
//     this.setState({ hoverData: e.target.category })
//   }
 
//   updateSeries = () => {
//     // The chart is updated only with new options.
//     this.setState({
//       chartOptions: {
//         series: [
//           { data: [Math.random() * 5, 2, 1]}
//         ]
//       }
//     });
//   }
 
  render() {
    const { chartOptions, hoverData } = this.state;
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          containerProps = {{ className: 'stacked-column-chart' }}
        />
      <h3>Hovering over {hoverData}</h3>
      {/* <button onClick={this.updateSeries.bind(this)}>Update Series</button> */}
      </div>
    )
  }
}