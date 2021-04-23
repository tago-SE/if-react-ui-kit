import React, { Component } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { allColors, selectedBlue, primaryBlue, primaryRed, primaryYellow, primaryGreen } from '../../../components/Charts/Colors';
import { HighchartsUtils } from './HighchartsUtils';
import { theme } from './GlobalThemeConfig';


export interface ILegendProps {
    series: Array<{ data?: Array<any>, color?: string, name?: string }>,
}

export const Legend = ({ series } : ILegendProps) => 
{
    const options = 
    {
        chart: {
          type: 'line',
          spacing: [0, 0, 0, 0],
          marginTop: 0,
          marginBottom: 0,
          spacingTop: 0
        },
        title: {
          text: null
        },
        yAxis: {
          visible: false
        },
        xAxis: {
          visible: false
        },
        legend: {
          padding: 0,
          margin: 0,
          verticalAlign: 'middle',
          maxHeight: 200
        },
        series: series,
      };
    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
            // allowChartUpdate={false}
            // updateArgs={[true, true, true]}
            //ref={chartRef}
            // callback={(chart: any) => {
            //     if (onCreation) {
            //         onCreation(chart);
            //     }
            // }}
        />
    );
};
