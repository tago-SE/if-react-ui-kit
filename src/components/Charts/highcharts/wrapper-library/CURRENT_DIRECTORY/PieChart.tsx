import React from 'react';
// Pie Chart
import { HorizontalLoader } from '../../../../If-Design-System/Loader';
import './Panel.scss';
import Highcharts from 'highcharts';
// import {
//     HighchartsProvider, HighchartsChart,Chart, Tooltip, Loading, XAxis, YAxis, Title, Legend, ColumnSeries, SplineSeries, PieSeries
// } from 'react-jsx-highcharts';
import HighchartsReact from 'highcharts-react-official';

interface Props {
    title: string,
    series: {
        name?: string,
        data: Array<{ name: string, y: number }>
    },
    callback?: (chartRef: any) => void;
    loading: boolean,
}

// export const PieChart = ({ title, data, loading} : Props) => {
//     if (loading) return (
//         <HighchartsProvider Highcharts={Highcharts}>
//             <HighchartsChart>
//                 <Chart/>

//                 <Title>Combination chart</Title>
//                 <Legend />
//                 <Tooltip />
//                 <Loading> Fetching data...</Loading>
//                 <PieSeries 
//                     name="Total" 
//                     data={data} 
//                     animation={true}
//                     showInLegend={true} 
//                 />
//             </HighchartsChart>
//         </HighchartsProvider>
//     ); 
//     else return (
//         <HighchartsProvider Highcharts={Highcharts}>
//             <HighchartsChart>
//                 <Chart/>

//                 <Title>Combination chart</Title>
//                 <Legend />
//                 <Tooltip 
//                     pointFormat="{series.name}: <b>{point.percentage:.1f}%</b>"
//                 />
//                 <PieSeries 
//                     name="Total" 
//                     data={data} 
//                     animation={true}
//                     showInLegend={true} 
//                     allowPointSelect={true}
//                     cursor="pointer"
//                     dataLabels={{ enabled: false, format: "<b>{point.name}</b>: {point.percentage:.1f} %" }}
//                 />
//             </HighchartsChart>
//         </HighchartsProvider>
//     );
// }

export class PieChart extends React.Component<Props, any> {

    private chart: any;

    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie',
                    animation: true,
                },
                title: {
                    text: this.props.title,
                },
                exporting: { enabled: false },
                credits: { enabled: false },
                tooltip: {
                    pointFormat: '<span style="color:{point.color}">\u25CF</span>  {series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)'
                },
                accessibility: {
                    point: {
                    valueSuffix: '%'
                    }
                },
                plotOptions: {
                    pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                    }
                },
                series: [{
                    name: this.props.series.name,
                    colorByPoint: true,
                    data: this.props.series.data,
                }],
            }
        };
    }

    hasDataChanged(nextProps) {
        const nextSeries = nextProps.series;
        const prevSeries = this.props.series;
        if (prevSeries.data.length != nextSeries.data.length) return true;
        if (nextSeries.name != prevSeries.name) return true;
        for (let i = 0; i < nextSeries.data.length; i++) {
            let prevValue = prevSeries.data[i];
            let nextValue = nextSeries.data[i];
            if (nextValue.name != prevValue.name || nextValue.y != prevValue.y) return true;
        }
        return false;
    }

    isLoading(nextProps) {
        return nextProps.loading;
    }

    handleLoading(nextProps) {
        if (this.isLoading(nextProps)) this.chart.showLoading()
        else this.chart.hideLoading();   
    }

    componentWillReceiveProps(nextProps) {
        // 
    }

    shouldComponentUpdate(nextProps, nextState) {
        // const chart = this.chartRef.current.chart;
        this.handleLoading(nextProps);
        if (this.hasDataChanged(nextProps)) {
            while (this.chart.series.length) {
                this.chart.series[0].remove();
            }
            this.chart.addSeries({ name: nextProps.series.name, data: nextProps.series.data});
            this.chart.redraw(true);
        }
        return false;
    } 

    componentDidMount() {
        this.handleLoading(this.props);
    
    }

    render() {
        return (
            <HighchartsReact 
                highcharts={Highcharts}
                options={this.state.options}
                callback={(chart) => {
                    this.chart = chart;
                    if (this.props.callback) {
                        this.props.callback(chart);
                    }
                }}
            />
        );
    }
}
