import React, { Component } from 'react';
import * as ReactDom from 'react-dom';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { allColors, selectedBlue, primaryBlue, primaryRed, primaryYellow, primaryGreen } from '../Colors';


// Load Highcharts modules
require("highcharts/modules/exporting")(Highcharts);

// The wrapper exports only a default component class that at the same time is a
// namespace for the related Props interface (HighchartsReact.Props). All other
// interfaces like Options come from the Highcharts module itself.
 
// const options: Highcharts.Options = {
//     title: {
//         text: 'My Highchart'
//     },
//     series: [{
//         type: 'pie',
        
//         data: [1, 2, 3]
//     }]
// }
 
// export const PieChart = (props: HighchartsReact.Props) => <div>
//     <HighchartsReact
//         highcharts={Highcharts}
//         options={options}
//         {...props}
//     />
// </div>
 
 
interface IState {
    chartOptions: Highcharts.Options,
    hoverData: any,
}

interface IData {
    name: string,
    y: number,
}

interface IProps {
    title: string,
    data: Array<IData>,
}


export class PieChart extends Component<IProps, IState> {

  constructor(props) {
    super(props);

    this.state = {
      chartOptions: {   
        credits: { enabled: false, },
        colors: allColors,
        title: {
            text: this.props.title,
        },
        series: [{
            name: 'Brands',
            type: 'pie',
            colorByPoint: true,
            allowPointSelect: true,
            slicedOffset: 5,
            states: {
                select: {
                  color: selectedBlue,
                }
            },
            data: this.props.data,
        }],
        plotOptions: {
            pie: {
                allowPointSelect: false,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        }
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
      <div style={{ height: "500px", width: "100%"}}>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          containerProps = {{ className: 'line-chart', tyle: { width: "100%", height: "100%" } }}
          
        />
      <h3>Hovering over {hoverData}</h3>
      {/* <button onClick={this.updateSeries.bind(this)}>Update Series</button> */}
      </div>
    )
  }
}