import React, { Component } from 'react';
import { render } from 'react-dom';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

interface IState {
    chartOptions: any,
    hoverData: any
}

interface IProps {
  // data: any,
}


export class LineChart extends Component<IProps, IState> {

  constructor(props) {
    super(props);
 
    this.state = {
      // To avoid unnecessary update keep all options in the state.
      chartOptions: {
        xAxis: {
          categories: ['A', 'B', 'C'],
        },
        series: [
          { data: [1, 2, 3] }
        ],
        plotOptions: {
          series: {
            point: {
              events: {
                mouseOver: this.setHoverData.bind(this)
              }
            }
          }
        }
      },
      hoverData: null
    };
  }
 
  setHoverData = (e) => {
    // The chart is not updated because `chartOptions` has not changed.
    this.setState({ hoverData: e.target.category })
  }
 
  updateSeries = () => {
    // The chart is updated only with new options.
    this.setState({
      chartOptions: {
        series: [
          { data: [Math.random() * 5, 2, 1]}
        ]
      }
    });
  }
 
  render() {
    console.log("Line Render!");
    const { chartOptions, hoverData } = this.state;
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          containerProps = {{ className: 'line-chart' }}
        />
        {/* <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          containerProps = {{ className: 'line-chart' }}
        /> */}
      <h3>Hovering over {hoverData}</h3>
        <button type="button" className="if primary button" onClick={this.updateSeries.bind(this)}>Update Series</button>
      </div>
    )
  }
}