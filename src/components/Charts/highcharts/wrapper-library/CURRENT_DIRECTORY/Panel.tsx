import React from 'react';
import { mockFetchData } from './mockData';

// Pie Chart
import { HorizontalLoader } from '../../../../If-Design-System/Loader';
import './Panel.scss';
import Highcharts from 'highcharts';
import {
    HighchartsProvider, HighchartsChart,Chart, Tooltip, Loading, XAxis, YAxis, Title, Legend, ColumnSeries, SplineSeries, PieSeries
} from 'react-jsx-highcharts';
import { RangeSelectorOptions, RangeSelectorButtonsOptions } from "highcharts/highstock";
import HighchartsReact from 'highcharts-react-official';
import { PieChart } from './PieChart';
import { ColumnStockChart } from './StockColumnChart';

// Test Generic
import { StockChart } from './StockChart';
//

interface IState {
    rawData: any,

}

export enum TimeRangeOptions {
    OneHour = ("1h"),
    OneDay = ("1d"),
    OneWeek = ("7d"),
    OneMonth = ("1m"),
    ThreeMonths = ("3m"),
    YearToDate = ("YTD"),
    All = ("all"),
}

const rangeSelectionButtonsConfig:  Array<RangeSelectorButtonsOptions> = [
    {
        type: 'hour',
        count: 1,
        text: TimeRangeOptions.OneHour.toString(),
    }, 
    {
        type: 'day',
        count: 1,
        text: TimeRangeOptions.OneDay.toString(),
    },
    {
        type: 'day',
        count: 7,
        text: TimeRangeOptions.OneWeek.toString(),
    }, 
    {
        type: 'month',
        count: 1,
        text: TimeRangeOptions.OneMonth.toString(),
    }, 
    {
        type: 'month',
        count: 3,
        text: TimeRangeOptions.ThreeMonths.toString(),
    }, 
    {
        type: 'ytd',
        text: TimeRangeOptions.YearToDate.toString(),
    }, 
    {
        type: 'all',
        text: TimeRangeOptions.All.toString(),
    }
];

const rangeSelectorConfig: RangeSelectorOptions = {
    labelStyle: {
        // display: 'none',
    },
    selected: -1,
    buttonTheme: { 
        style: {
            // visibility: "hidden",
        },
    },
    buttons: rangeSelectionButtonsConfig,
};

export const Panel = () => {
    const [state, setState] = React.useState({
        fetched: undefined,
        loading: true,
        filter: { minTimestamp: undefined, maxTimestamp: undefined },
        callSummary: { data: [
            {
                name: "Success",
                y: 0,
            },
            {
                name: "Failed",
                y: 0,
            },
            {
                name: "Blocked",
                y: 0,
            },
            {
                name: "Other",
                y: 0,
            }
        ]},
        callsTimeSeries: {
            series: [],
        },
        rangeSelector: rangeSelectorConfig,
        genericStockChart: {
            // common
            chart: { animation: true },
            credits: { enabled: false },
            navigator: {enabled: false },
            scrollbar: { enabled: false },
            exporting: { enabled: false },
            title: {
                text: "Hello",
            },
            xAxis: {
                min: null,
                max: null, 
            },
            plotOptions: {
                column: {
                    stacking: 'number'
                }
            },
            series: [
                { 
                    type: 'column',
                    id: "callCountSuccess",
                    name: "Success",
                    data: [] 
                },
                { 
                    type: 'column',
                    id: "callCountBlocked",
                    name: "Blocked",
                    data: [] 
                },
                { 
                    type: 'column',
                    id: "callCountFailed",
                    name: "Failed",
                    data: [] 
                },
                { 
                    type: 'column',
                    id: "callCountOther",
                    name: "Other",
                    data: [] 
                }
            ],
            rangeSelector: rangeSelectorConfig,
        },
    });

    let minTimestamp = undefined;

    const fetchData = () => {
        const result = mockFetchData();
        let callCountSuccessTotal = 0, callCountBlockedTotal = 0, callCountFailedTotal = 0, callCountOtherTotal = 0;
        const successCalls = [], blockedCalls = [], failedCalls = [], otherCalls = [];

        

        for (let i = 0; i < result.values.length; i++) {
            const value = result.values[i];
            const timestamp = Date.parse(value.timestamp);
            value.timestamp = timestamp;
            if (i === 0) {
                console.log("First timestamp", timestamp, new Date(timestamp));
            }
            if (i === 100) {
                console.log("Filter timestamp", timestamp, new Date(timestamp));
                minTimestamp = value.timestamp;
            }
            if (/* date is inside range */ true) {
                callCountSuccessTotal += value.callCountSuccess;
                callCountBlockedTotal += value.callCountBlocked;
                callCountFailedTotal += value.callCountFailed;
                callCountOtherTotal += value.callCountOther;
            }
            successCalls.push([timestamp, value.callCountSuccess]);
            blockedCalls.push([timestamp, value.callCountBlocked]);
            failedCalls.push([timestamp, value.callCountFailed]);
            otherCalls.push([timestamp, value.callCountOther]);
        }
        setState({ 
            fetched: result,
            loading: false,
            filter: { minTimestamp: minTimestamp, maxTimestamp: undefined },
            callSummary: {
                data: [
                    {
                        name: "Success",
                        y: callCountSuccessTotal,
                    },
                    {
                        name: "Failed",
                        y: callCountFailedTotal,
                    },
                    {
                        name: "Blocked",
                        y: callCountBlockedTotal,
                    },
                    {
                        name: "Other",
                        y: callCountOtherTotal,
                    }
                ]
            },
            callsTimeSeries: {
                series: [
                    { 
                        type: 'column',
                        id: "callCountSuccess",
                        name: "Success",
                        data: successCalls 
                    },
                    { 
                        type: 'column',
                        id: "callCountBlocked",
                        name: "Blocked",
                        data: blockedCalls 
                    },
                    { 
                        type: 'column',
                        id: "callCountFailed",
                        name: "Failed",
                        data: failedCalls 
                    },
                    { 
                        type: 'column',
                        id: "callCountOther",
                        name: "Other",
                        data: otherCalls 
                    }
                ]
            },
            rangeSelector: state.rangeSelector,

            //
            genericStockChart: {
                // common
                chart: { animation: true },
                credits: { enabled: false },
                navigator: {enabled: false },
                scrollbar: { enabled: false },
                exporting: { enabled: false },
                title: {
                    text: "Hello",
                },
                xAxis: {
                    min: null,
                    max: null, 
                },
                plotOptions: {
                    column: {
                        stacking: 'number'
                    }
                },
                series: [
                    { 
                        type: 'column',
                        id: "callCountSuccess",
                        name: "Success",
                        data: successCalls 
                    },
                    { 
                        type: 'column',
                        id: "callCountBlocked",
                        name: "Blocked",
                        data: blockedCalls 
                    },
                    { 
                        type: 'column',
                        id: "callCountFailed",
                        name: "Failed",
                        data: failedCalls 
                    },
                    { 
                        type: 'column',
                        id: "callCountOther",
                        name: "Other",
                        data: otherCalls 
                    }
                ],
                rangeSelector: state.rangeSelector
            }
            
        });
    }

    const changeRange = () => {
        setState({ ...state, rangeSelector: { ...state.rangeSelector, selected: 3 }});
    }


    return (<>
        <h2>My Panel</h2>
        <button onClick={fetchData}>Fetch data</button>
        <button onClick={changeRange}>change range</button>
        <PieChart 
            series={{ name: "Total", data: state.callSummary.data}} 
            loading={state.loading} 
            title="Total calls"
            callback={(chart) => console.log("Panel received chart", chart)}
        />
        <h2>Column Chart</h2>
        <ColumnStockChart 
            loading={state.loading}
            title="Calls"
            series={state.callsTimeSeries.series}
            rangeSelector={state.rangeSelector}
            xAxis={state.filter}
        />
        <StockChart options={{
                // common
                chart: { animation: true },
                credits: { enabled: false },
                navigator: {enabled: false },
                scrollbar: { enabled: false },
                exporting: { enabled: false },
                title: {
                    text: "Hello",
                },
                xAxis: {
                    min: null,
                    max: null, 
                },
                plotOptions: {
                    column: {
                        stacking: 'number'
                    }
                },
                series: [],
                rangeSelector: rangeSelectorConfig
            }}
                callback={(chart) => {
                    
                }} 
            />
    </>);
}


/*
import React, { Component } from 'react';
import Highcharts from 'highcharts';
import {
    HighchartsProvider, HighchartsChart, Chart, Tooltip, XAxis, YAxis, Title, Legend, ColumnSeries, SplineSeries, PieSeries
} from 'react-jsx-highcharts';

class CombinedDemo extends Component {

  render() {
    const pieData = [{
      name: 'Jane',
      y: 13
    }, {
      name: 'John',
      y: 23
    }, {
      name: 'Joe',
      y: 19
    }];

    return (
        <HighchartsProvider Highcharts={Highcharts}>
            <HighchartsChart>
            <Chart />

            <Title>Combination chart</Title>

            <Legend />
            <Tooltip />
            <XAxis categories={['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']} />

            <YAxis>
                <ColumnSeries name="Jane" data={[3, 2, 1, 3, 4]} />
                <ColumnSeries name="John" data={[2, 3, 5, 7, 6]} />
                <ColumnSeries name="Joe" data={[4, 3, 3, 9, 0]} />
                <SplineSeries name="Average" data={[3, 2.67, 3, 6.33, 3.33]} />
                <PieSeries name="Total consumption" data={pieData} center={[100, 80]} size={100} showInLegend={false} />
            </YAxis>
            </HighchartsChart>
      </HighchartsProvider>
    );
  }
}

export default CombinedDemo;
*/