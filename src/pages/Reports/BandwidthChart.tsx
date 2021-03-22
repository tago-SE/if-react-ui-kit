import React from 'react'
import {default as Highstocks } from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official'
import { 
    bandwidthChartOptions,
} from './chartDefinitions';

interface Props {
    data: Array<any>,
    callback?: (chart: any) => void,
}

const BandwidthChart = ({ data, callback }: Props) => {
   console.log(data); // this is always correct
    let options = {
        ...bandwidthChartOptions,
        series: [{
            name: 'Bandwidth',
            data: data || [],
            tooltip: {
                valueDecimals: 0
            }
        }]
    }

    return(
        <HighchartsReact
            highcharts={Highstocks}
            options={options}
            oneToOne={true}
            constructorType={"stockChart"}
            callback={(chart: any) => {
                if (callback) {
                    callback(chart);
                }
            }}
        />
    );
}

export default BandwidthChart;