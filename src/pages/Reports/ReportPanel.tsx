import React from 'react';
import mockData from './mockData.json';
import mockData2 from './mockData2.json';

import { StockChart } from './StockChart';

import {default as Highstocks } from 'highcharts/highstock';
import {default as Highcharts } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting'
import more from 'highcharts/highcharts-more';

import './Panel.scss';
import BandwidthChart from './BandwidthChart';

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
    result: any,
}

const CALLS_CHART_ID = 0;
const CALLS_SUMMARY_CHART_ID = 1;
const BANDIWDTH_CHART_ID = 10;
const RESPONSE_TIME_CHART_ID = 20;

export class ReportPanel extends React.Component<any, State> {

    private charts: any = {};

    // cycle between alternatives

    private index: number = 0;

    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.state = {
            loading: true,
            valueCount: -1,
            result: undefined,
        }
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

        for (let i = 0; i < result.values.length; i++) {
            const value: any = Object.assign({}, result.values[i]);
            const timestamp = Date.parse(value.timestamp);
            if (isNaN(timestamp)) {
                console.error(new Error(`Failed to parse timestamp: ${value.timestamp}`));
                continue;
            }
            value.timestamp = timestamp;
            // Requests
            if (/* date is inside range ??? */ true) {
                callCountSuccessTotal += value.callCountSuccess;
                callCountBlockedTotal += value.callCountBlocked;
                callCountFailedTotal += value.callCountFailed;
                callCountOtherTotal += value.callCountOther;
            }
            successCallsTimeSeries.push([timestamp, value.callCountSuccess]);
            blockedCallsTimeSeries.push([timestamp, value.callCountBlocked]);
            failedCallsTimeSeries.push([timestamp, value.callCountFailed]);
            otherCallsTimeSeries.push([timestamp, value.callCountOther]);
            
            // Data transfer rate
            bandwidthTimeSeries.push([timestamp, value.bandwidth]);

            // Api response time
            apiTimeMinMax.push([timestamp, value.apiTimeMin, value.apiTimeMax]);
            averageApiTime.push([timestamp, value.apiTimeAvg]);

        }
        
        this.setState({ 
            ...this.state, 
            valueCount: result.values.length,
            loading: false,
            result: {
                callStatusSeries: [
                    {
                        type: 'column',
                        id: 'callCountSuccess',
                        name: 'Success',
                        data: successCallsTimeSeries,
                    },
                    {
                        type: 'column',
                        id: 'callCountBlocked',
                        name: 'Blocked',
                        data: blockedCallsTimeSeries,
                    },
                    {
                        type: 'column',
                        id: 'callCountFailed',
                        name: 'Success',
                        data: failedCallsTimeSeries,
                    },
                    {
                        type: 'column',
                        id: 'callCountOther',
                        name: 'Other',
                        data: otherCallsTimeSeries,
                    }

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
                                name: 'Blocked',
                                y: callCountBlockedTotal
                            },
                            {
                                name: 'Failed',
                                y: callCountFailedTotal
                            },
                            {
                                name: 'Other',
                                y: callCountOtherTotal
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
    }

    isLoading() {
        return this.state.loading;
    }

    handleLoading() {
        if (this.isLoading()) {
            this.charts[RESPONSE_TIME_CHART_ID].showLoading();
            this.charts[BANDIWDTH_CHART_ID].showLoading();
            this.charts[CALLS_CHART_ID].showLoading();
            this.charts[CALLS_SUMMARY_CHART_ID].showLoading();
        } else {
            this.charts[RESPONSE_TIME_CHART_ID].hideLoading(); 
            this.charts[BANDIWDTH_CHART_ID].hideLoading(); 
            this.charts[CALLS_CHART_ID].hideLoading();
            this.charts[CALLS_SUMMARY_CHART_ID].hideLoading();
        }
    }

    componentDidUpdate() {
        this.handleLoading();
    }

    componentDidMount() {
        this.handleLoading();
    }

    saveChartReference(key: string | number, chart: any) {
        if (key in this.charts) throw new Error(`Key already in use: ${key}`);
        this.charts[key] = chart
    }

    render() {
        const _callsChartOptions = { ...callStatusChartOptions, series: this.state.result?.callStatusSeries || [] };
        const _callsTotalChartOptions = { ...callsStatusTotalPieChart, series: this.state.result?.callStatusTotal || [] };
        const _bandwidthChartOptions = {...bandwidthChartOptions, series: this.state.result?.bandwidthSeries || [] };
        const _responseTimeOptions = { ...reponseTimeChartConfig, series: this.state.result?.apiTimeSeries || [] };
        
        return (<div>
            <button onClick={this.fetchData} className="if primary button small">Fetch</button>
            <HighchartsReact
                highcharts={Highstocks}
                options={_callsChartOptions}
                constructorType={"stockChart"}
                allowChartUpdate={true}
                updateArgs={[true, true, true]}
                callback={(chart: any) => this.saveChartReference(CALLS_CHART_ID, chart)}
            />
             <HighchartsReact
                highcharts={Highcharts}
                options={_callsTotalChartOptions}
                allowChartUpdate={true}
                updateArgs={[true, true, true]}
                callback={(chart: any) => this.saveChartReference(CALLS_SUMMARY_CHART_ID, chart)}
            />
            <HighchartsReact
                highcharts={Highstocks}
                options={_bandwidthChartOptions}
                constructorType={"stockChart"}
                allowChartUpdate={true}
                updateArgs={[true, true, true]}
                callback={(chart: any) => this.saveChartReference(BANDIWDTH_CHART_ID, chart)}
            />
            <HighchartsReact
                highcharts={Highstocks}
                options={_responseTimeOptions}
                constructorType={"stockChart"}
                allowChartUpdate={true}
                updateArgs={[true, true, true]}
                callback={(chart: any) => this.saveChartReference(RESPONSE_TIME_CHART_ID, chart)}
            />
        </div>);
    }
}

export default ReportPanel;