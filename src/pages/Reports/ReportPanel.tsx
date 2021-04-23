import React from 'react';
import { formatISO } from 'date-fns';
import mockData from './mockData.json';
import mockData2 from './mockData2.json';

import { StockChart } from './StockChart';

import {default as Highstocks } from 'highcharts/highstock';
import {default as Highcharts } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting'
import more from 'highcharts/highcharts-more';
import BandwidthChart from './BandwidthChart';

import { 
    PieChart,
    StackTimeSeriesChart,
    TimeSeriesChart,
    Legend
} from './Charts';

import { 
    reponseTimeChartConfig,
    bandwidthChartOptions,
    callStatusChartOptions,
    callsStatusTotalPieChart,
} from './chartDefinitions';

if (typeof Highcharts === "object") {
    // Required for arearange 
    more(Highstocks);
}

const options: Highstocks.Options = {
    title: {
        text: 'My chart'
    },
    series: [{
        type: 'line',
        data: [1, 2, 3]
    }]
}

interface State {
    loading: boolean,
    valueCount: number,
    selected: number,
    xAxis: any,
    result: any,
}

const CALLS_CHART_ID = 0;
const CALLS_SUMMARY_CHART_ID = 1;
const BANDIWDTH_CHART_ID = 10;
const RESPONSE_TIME_CHART_ID = 20;

// Point mouseOver event series: https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-point-events-mouseover/

// https://www.highcharts.com/demo/combo-multi-axes Api Calls + Bandwidth  or Api Calls + Api Time ?

// If we don't use Stock Chart 
// https://www.highcharts.com/samples/highcharts/demo/dynamic-master-detail?codepen&_ga=2.156423675.1575108621.1616405467-1443874984.1616162914


// CUSTOM RANGE SELECTION BUTTON
// https://jsfiddle.net/BlackLabel/cf0h8tp5/


// AreaSpline: https://www.highcharts.com/demo/stock/areasplinerange

export class ReportPanel extends React.Component<any, State> {

    private charts: any = {};

    // cycle between alternatives

    private index: number = 0;

    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.toggleLoading = this.toggleLoading.bind(this);
        this.state = {
            loading: true,
            valueCount: -1,
            selected: undefined,
            xAxis: { floor: undefined, ceiling: undefined },
            result: undefined,
        }
    }


    getSyncrhonizedTimeSeriesCharts() {
        return [this.charts[BANDIWDTH_CHART_ID], this.charts[CALLS_CHART_ID], this.charts[CALLS_CHART_ID]];
    }

    /**
     * 
     * @param lastTimestamp 
     * @param interval number of minutes between intervals
     */
    getMissingTimestampsUntilNow(lastTimestamp: number, interval: number) {
        const timestamps = [];
        for (let nextTimestamp = lastTimestamp; nextTimestamp < Date.now(); nextTimestamp = nextTimestamp + interval*60*1000) {
            timestamps.push(nextTimestamp);
        }
        return timestamps;
    }
    
    fetchData() {
        this.index = ++this.index % 2;
        let result = undefined;
        if (this.index === 0) {
            result = Object.assign({}, mockData);
            console.log("result-1", result, result.values[0].timestamp);
        } else {
            result = Object.assign({}, mockData2);
            console.log("result-2", result, result.values[0].timestamp);
        }
        
       

        // let index = this.state.valueCount === -1 ? result.count : this.state.valueCount/2;
        // let newValues = result.values.slice(0, index);
        // result.values = newValues;
        // console.log("values", result.values);

        let 
            callCountSuccessTotal = 0, 
            callCountBlockedTotal = 0, 
            callCountFailedTotal = 0, 
            callCountOtherTotal = 0;
            
        const 
            successCallsTimeSeries = [], 
            blockedCallsTimeSeries = [], 
            failedCallsTimeSeries = [], 
            otherCallsTimeSeries = [], 
            bandwidthTimeSeries = [],
            apiTimeMinMax = [],
            averageApiTime = [];

        let value = undefined;
        for (let i = 0; i < result.values.length; i++) {
            value = Object.assign({}, result.values[i]);
            const timestamp = Date.parse(value.timestamp);
            if (isNaN(timestamp)) {
                console.error(new Error(`Failed to parse timestamp: ${value.timestamp}`));
                continue;
            }
            value.timestamp = timestamp;
            if (i === 0) {
                console.log("first", value.timestamp, new Date(value.timestamp));
            }
            else if (i === 100) {
                console.log("min", value.timestamp, new Date(value.timestamp));
            }
            else if (i  === result.values.length - 100) {
                console.log("max", value.timestamp, new Date(value.timestamp));
            }
            else if (i === result.values.length - 1) {
                console.log("last", value.timestamp, new Date(value.timestamp));
            }
            // Requests
            if (/* date is inside range ??? */ true) {
                callCountSuccessTotal += value.callCountSuccess;
                callCountOtherTotal += value.callCountOther;
                callCountBlockedTotal += value.callCountBlocked;
                callCountFailedTotal += value.callCountFailed;
            }
            successCallsTimeSeries.push([timestamp, value.callCountSuccess]);
            otherCallsTimeSeries.push([timestamp, value.callCountOther]);
            blockedCallsTimeSeries.push([timestamp, value.callCountBlocked]);
            failedCallsTimeSeries.push([timestamp, value.callCountFailed]);
            
            // Data transfer rate
            bandwidthTimeSeries.push([timestamp, value.bandwidth]);

            // Api response time
            apiTimeMinMax.push([timestamp, value.apiTimeMin, value.apiTimeMax]);
            averageApiTime.push([timestamp, value.apiTimeAvg]);

        }

        // Pad the dataset with missing end date
        const missingTimestamps = this.getMissingTimestampsUntilNow(value.timestamp, 60*24);
        for (let i = 0; i < missingTimestamps.length; i++) {
            const missingTimestamp = missingTimestamps[i];
            successCallsTimeSeries.push([missingTimestamp, 0]);
            blockedCallsTimeSeries.push([missingTimestamp, 0]);
            failedCallsTimeSeries.push([missingTimestamp, 0]);
            otherCallsTimeSeries.push([missingTimestamp, 0]);

            bandwidthTimeSeries.push([missingTimestamp, 0]);

            apiTimeMinMax.push([missingTimestamp, 0, 0]);
            averageApiTime.push([missingTimestamp, 0]);

        }
        
        // Pad the dataset with missing start timestamps

        this.setState({ 
            ...this.state, 
            valueCount: result.values.length,
            loading: false,
            selected: undefined, 
            xAxis: { floor: undefined, ceiling: undefined },
            result: {
                callStatusSeries: [
                    {
                        type: 'area',
                        id: 'callCountSuccess',
                        name: 'Success',
                        data: successCallsTimeSeries,
                    },
                    {
                        type: 'area',
                        id: 'callCountOther',
                        name: 'Other',
                        data: otherCallsTimeSeries,
                    },
                    {
                        type: 'area',
                        id: 'callCountBlocked',
                        name: 'Blocked',
                        data: blockedCallsTimeSeries,
                    },
                    {
                        type: 'area',
                        id: 'callCountFailed',
                        name: 'Failed',
                        data: failedCallsTimeSeries,
                    },

                ],
                callStatusTotal: [
                    {
                        name: 'Blabla',
                        type: 'pie',
                        colorByPoint: true,
                        allowPointSelect: true,
                        slicedOffset: 5,
                        states: {
                            select: {
                                color: '#00ff'
                            }
                        },
                        data: [
                            {
                                name: 'Success',
                                y: callCountSuccessTotal,
                            },
                            {
                                name: 'Other',
                                y: callCountOtherTotal
                            },
                            { 
                                name: 'Blocked',
                                y: callCountBlockedTotal
                            },
                            {
                                name: 'Failed',
                                y: callCountFailedTotal
                            }
                        ]
                    }
                ],
                bandwidthSeries: [{
                    name: "Bandwidth",
                    data: bandwidthTimeSeries
                }],
                apiTimeSeries: [
                    {
                        name: "Average response time",
                        data: averageApiTime,
                        zIndex: 1,
                        marker: {
                            fillColor: "white",
                            lineWidth: 0,
                        },
                    }, {
                        name: "Range",
                        data: apiTimeMinMax,
                        type: "arearange",
                        linewidth: 0,
                        linkedTo: ":previous",
                        fillOpacity: 0.3,
                        zIndex: 0,
                        marker: { enabled: false }
                    }
                ]
            }
        });

        // setInterval(() => this.setState({ loading: !this.state.loading }), 5000);
    }


    componentDidUpdate() {
  
    }

    componentDidMount() {
   
    }

    saveChartReference(key: string | number, chart: any) {
        if (key in this.charts) throw new Error(`Key already in use: ${key}`);
        this.charts[key] = chart
    }

    setExtremesProgramatically() {
        // http://jsfiddle.net/wkBwW/16/
        // https://www.highcharts.com/forum/viewtopic.php?t=31649¨
        // This method also works
        
       // this.setState({ selected: 2});
        // console.log("state", this.state); 

     

        // const chartsToUpdate = [this.charts[CALLS_CHART_ID], this.charts[BANDIWDTH_CHART_ID], this.charts[RESPONSE_TIME_CHART_ID]]
        const now = Date.now();
        const yesterday = now - 24 * 3600 * 1000;
        
        this.setState({ xAxis: {
            floor: yesterday,
            ceiling: now
        }});
        // chartsToUpdate.forEach(chart => {
        //     chart.xAxis[0].setExtremes(yesterday, now);
        // });
    }

    setExtremesTo2020() {
        // const chartsToUpdate = [this.charts[CALLS_CHART_ID], this.charts[BANDIWDTH_CHART_ID], this.charts[RESPONSE_TIME_CHART_ID]]
        // chartsToUpdate.forEach(chart => {
        //     chart.xAxis[0].setExtremes(Date.UTC(2020, 0, 1),   Date.UTC(2020, 11, 31));
        // });
        this.setState({ xAxis: {
            floor: Date.UTC(2020, 0, 1),
            ceiling: Date.UTC(2020, 11, 31)
        }});
    }



    syncOnLegendMouseOver(legend: any) {
        // Add hover and tooltip to the chart summary
        let legendName = legend.textStr;
        let pieChart = this.charts[CALLS_SUMMARY_CHART_ID];
        let points = pieChart.series[0].points;
        for (let i = 0; i < points.length; i++) {
            let point = points[i];
            if (point.name === legendName) {
                point.series.chart.tooltip.refresh(point);
                point.setState('hover');
            } else {
                point.setState('inactive');
            }
        }
    }

    syncOnLegendMouseOut(legend: any) {
        let legendName = legend.textStr;
        let pieChart = this.charts[CALLS_SUMMARY_CHART_ID];
        let points = pieChart.series[0].points;
        pieChart.tooltip.hide();
        console.log("PieChart-Tooltip", pieChart.tooltip);
        for (let i = 0; i < points.length; i++) {
            let point = points[i];
            point.setState('normal');
        }
    }

    

    syncHighlightShow(point: any) {
        const chartsToSync = [this.charts[CALLS_CHART_ID], this.charts[CALLS_SUMMARY_CHART_ID]];
        console.log("highligted point", point);
        const pointName = point.name;
        console.log("point name", pointName);
        // chartsToSync.forEach(chart => {
        //     chart.series.forEach(series => {
        //         if (pointName != series.name) {
        //             series.points.forEach(p => {
        //             if (p.index === point.index) {
        //                 p.setState('hover')
        //                 p.series.chart.tooltip.refresh(p)
        //             }
        //             })
        //         }
        //     });
        // });
    }

    syncHighlightHide(point: any) {

    }

    toggleLoading() {
        this.setState({ loading: !this.state.loading });
    }

    render() {
        return (<div>
            <button onClick={this.fetchData} className="if primary button small">Fetch</button>
            <button onClick={this.toggleLoading} className="if secondary button small">Toggle Loading</button>
            <ul className="if tags">
                <li className="if">
                    <span className="if tag" onClick={() => this.setExtremesProgramatically()}>One Day</span>
                </li>
                <li className="if">
                    <span className="if tag" onClick={() => this.setExtremesTo2020()}>Show 2020</span>
                </li>
                <li className="if">
                    <span className="if tag" onClick={() => { 
                        this.setState({ xAxis: {
                            floor: Date.UTC(2021, 0, 1),
                            ceiling: Date.UTC(2021, 11, 31) 
                        }});
                    }}>Show 2021</span>
                </li>
                <li className="if">
                    <span className="if tag" onClick={() => { 
                        this.setState({ xAxis: {
                            floor: Date.UTC(2020, 0, 1),
                            ceiling: Date.UTC(2020, 3, 28) 
                        }});
                    }}>Show 3 months 2020</span>
                </li>
                <li className="if">
                    <span className="if tag" onClick={() => { 
                        const charts = this.getSyncrhonizedTimeSeriesCharts();
                        const input = "All";
                        for (let i = 0; i < charts.length; i++) {
                            const chart = charts[i];
                            const buttons = chart.rangeSelector?.buttons;
                            if (!buttons) return;
                            for (let j = 0; j < buttons.length; j++) {
                                const button = buttons[j];
                                if (button.textStr === input) {
                                    console.log("button", button);
                                    button.element.onclick("hi");
                                    // After the date range button has been pressed we can extraxt the min max timestamps from the current chart.
                                    // And apply it to the summary chart
                                    // if (newPieData.length === 0) {
                                    //     const {min, max} = chart.xAxis[0].getExtremes();
                                    //     console.log("MIN, MAX", min, max);
                                    //     console.log("MinDate: BEFORE", new Date(min));
                                    //     newPieData = this.data.values.filter(value => true);
                                    //     console.log("new pie data", newPieData);
                                    // }
                                }
                            }
                        }
                    }}>All</span>
                </li>
            </ul>

            <h2>Custom Legend</h2>
            <Legend series={[{name: "Hello"}]} />
            <br/>

            <StackTimeSeriesChart 
                title="Calls"
                stacking="number"
                selected={this.state.selected}
                loading={this.state.loading}
                series={this.state.loading ? undefined : (this.state.result?.callStatusSeries || undefined)} 
                xAxis={{ floor: this.state.xAxis?.floor, ceiling: this.state.xAxis.ceiling }}
                onCreation={(chart: any) => this.saveChartReference(CALLS_CHART_ID, chart)}
                onLegendItemClick={(legend: any) => {
                    const otherChart = this.charts[CALLS_SUMMARY_CHART_ID];
                    const points = otherChart.series[0]?.points || [];
                    console.log("Series", otherChart.series || []);
                    for (let i = 0; i < points.length; i++) {
                        const point = points[i];
                        if (legend.name === point.name) {
                            point.setVisible(!legend.visible);
                            return;
                        }
                    }
                }}
                // onLegendItemMouseOver={(legend) => { console.log("Series:legend:mouseOver"); this.syncOnLegendMouseOver(legend)}}
                // onLegendItemMouseOut={(legend) => { console.log("Series:legend:mouseOut"); this.syncOnLegendMouseOut(legend)}}
                synchronize={{ point: {
                    charts: this.getSyncrhonizedTimeSeriesCharts()
                }}}
            />
            
            <PieChart
                title="Calls Total" 
                data={this.state.result?.callStatusTotal[0]?.data || undefined} 
                loading={this.state.loading}
                onCreation={(chart: any) => this.saveChartReference(CALLS_SUMMARY_CHART_ID, chart)}
                onLegendItemMouseOver={(legend) => {this.syncOnLegendMouseOver(legend) }}
                onLegendItemClick={(legend: any) => {
                    const otherChart = this.charts[CALLS_CHART_ID];
                    const series = otherChart.series || [];
                    for (let i = 0; i < series.length; i++) {
                        const currentSeries = series[i]; 
                        if (legend.name === currentSeries.name) {
                            if (legend.visible) {
                                currentSeries.hide();
                            } else {
                                currentSeries.show();
                            }
                            return;
                        }
                    }
                    const points = otherChart.series[0]?.points || [];
                    for (let i = 0; i < points.length; i++) {
                        const point = points[i];
                        if (legend.name === point.name) {
                            point.setVisible(!legend.visible);
                            return;
                        }
                    }
                }}
            />


            <TimeSeriesChart 
                loading={this.state.loading}
                series={this.state.result?.bandwidthSeries || undefined}
                onLegendItemMouseOver={(legend) => console.log("LineTimeSeries:legend mouseOver", legend)} 
                xAxis={{ floor: this.state.xAxis?.floor, ceiling: this.state.xAxis.ceiling }}
                onLegendItemMouseOut={(legend) => console.log("LineTimeSeries:legend mouseOut", legend)} 
                onLegendItemClick={(legend) => console.log("LineTimeSeries:legend mouseClick", legend)} 
                onCreation={(chart: any) => this.saveChartReference(BANDIWDTH_CHART_ID, chart)}
                synchronize={{ point: {
                    charts: this.getSyncrhonizedTimeSeriesCharts()
                }}}
            />

            <TimeSeriesChart 
                series={this.state.result?.apiTimeSeries || undefined}
                xAxis={{ floor: this.state.xAxis?.floor, ceiling: this.state.xAxis.ceiling }}
                onLegendItemMouseOver={(legend) => console.log("LineTimeSeries:legend mouseOver", legend)} 
                onLegendItemMouseOut={(legend) => console.log("LineTimeSeries:legend mouseOut", legend)} 
                onLegendItemClick={(legend) => console.log("LineTimeSeries:legend mouseClick", legend)} 
                loading={this.state.loading}
                onCreation={(chart: any) => this.saveChartReference(RESPONSE_TIME_CHART_ID, chart)}
                synchronize={{ point: {
                    charts: this.getSyncrhonizedTimeSeriesCharts()
                }}}
            />

        </div>);
    }
}

export default ReportPanel;