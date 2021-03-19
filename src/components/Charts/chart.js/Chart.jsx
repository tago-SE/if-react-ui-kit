import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import { allColors } from '../Colors';

const data = {
  labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
  datasets:[
    {
      label:'Population',
      data:[
        617594,
        181045,
        153060,
        106519,
        105162,
        95072
      ],
      backgroundColor: allColors,
      
    }
  ]
};

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: data
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

        <Line
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

        <Pie
          data={this.state.chartData}
          height={400}
          options={{
            responsive: false,
            fullWidth: true,
            //weight: 1,
            title:{
              display: true,
              text:'Largest Cities In '+this.props.location,
              fontSize:25,
            },
            legend:{
             // weight: 1,
              display: true,
              // fullWidth: true,
              position: "bottom",
              margin: "50px",
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;