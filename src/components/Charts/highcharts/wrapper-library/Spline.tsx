import React, { Component } from 'react';
import Highcharts from 'highcharts';
import {
  Chart, XAxis, YAxis, Title, Legend,
  AreaSplineSeries, SplineSeries, Tooltip, TooltipProps, LineSeries, Subtitle, HighchartsProvider, HighchartsChart
} from 'react-jsx-highcharts';
import { SplineChart } from '../SplineChart';
import syncTooltip from 'highcharts-tooltip-synchronization';
// we need to study highcharts docs for cofiguration in json formate..
// click on this link (ctrl +  left click)  https://api.highcharts.com/highcharts/ 

  const plotoptions = {
    series: {  
      animation:{
        duration: 5000
      }
    }
  };
  const categories= ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
 const labels= {
    style: {
        fontsize:'20px'
    }
  }

const marker= {
  symbol: 'circle',
}
const x: TooltipProps = {

};

const SplineExample = (props) => {
  return (
    <HighchartsProvider Highcharts={Highcharts}>
      <HighchartsChart 
        callback={(chartReference) => {
          // syncTooltip(chartReference); does not work
        }}
        plotoptions={plotoptions} 
        marginleft={300}
      >
      <Chart height={500}/>

      <Title 
        align='center'>
        monthly average temperature
      </Title>

      <Subtitle>source: worldclimate.com</Subtitle>

      <XAxis categories={categories} labels={labels}>
        <XAxis.Title >time</XAxis.Title>
      </XAxis>
      <Tooltip  />
      <Legend 
        layout="horizontal" 
        align="right" 
        verticalAlign='top' 
        borderWidth={0}
        symbolRadius={0} 
        symbolWidth={5}
      />
      <YAxis>
        <YAxis.Title >{'temperature (\xb0c)'}</YAxis.Title>
        <SplineSeries 
          name= 'tokyo'
          data= {[7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6]}
          marker= {marker}
        />
        <SplineSeries 
          name= 'new york'
          data= {[-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]}
          marker= {marker}
        />
        <SplineSeries 
          name="berlin" 
          data={[-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]} 
          marker={marker}
        />
        <SplineSeries 
          name= 'london'
          data= {[3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]}
          marker= {marker}
        />
      </YAxis>
    </HighchartsChart>
    </HighchartsProvider>
  )
};

export default SplineExample;