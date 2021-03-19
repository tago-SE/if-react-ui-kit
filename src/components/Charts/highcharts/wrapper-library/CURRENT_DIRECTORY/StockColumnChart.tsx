import React from 'react';
// Pie Chart
import { HorizontalLoader } from '../../../../If-Design-System/Loader';
import './Panel.scss';
import Highcharts, { RangeSelectorOptions } from "highcharts/highstock"; // Array<RangeSelectorButtonsOptions>;RangeSelectorOptions
import HighchartsReact from 'highcharts-react-official';
import './Panel.scss';

const legendConfig = {
    enabled: true,
    margin: 48,
    padding: 20,
    itemStyle: {"color": "#333333", "cursor": "pointer", "fontSize": "12px", "fontWeight": "bold", "textOverflow": "ellipsis"},
    itemHiddenStyle:{ color: "#cccccc" },
    itemHoverStyle: { color: "#000000", },
    title: {
        text: "",
        style: { fontWeight: "bold"} 
    }
};

interface Props {
    title: string,
    series: Array<{ type: 'column', id: string, name: string, data: Array<any> }>,
    loading?: boolean
    callback?: (chartRef: any) => void,
    rangeSelector?: RangeSelectorOptions,
    xAxis?: {
        minTimestamp?: number | null, maxTimestamp?: number | null,
    }
}

export class ColumnStockChart extends React.Component<Props, any> {

    private chart: any;

    constructor(props) {
        super(props);
        this.state = {
            loading: this.props.loading || false,
            options: {
                // common
                chart: { animation: true },
                credits: { enabled: false },
                navigator: {enabled: false },
                scrollbar: { enabled: false },
                exporting: { enabled: false },
                title: {
                    text: this.props.title,
                },
                xAxis: {
                    min: this.props?.xAxis?.minTimestamp || null,
                    max: this.props?.xAxis?.maxTimestamp || null,
                },
                plotOptions: {
                    column: {
                        stacking: 'number'
                    }
                },
                series: props.series,
                legend: legendConfig,
                rangeSelector: this.props.rangeSelector,
            }   
        };
    }

    hasRangeSelectionIndexChanged(nextProps) {
        console.log("nextProps", nextProps, this.props);
        return this.state.options?.rangeSelector?.selected !== nextProps.rangeSelector?.selected;
    }

    hasFilterChanged(nextProps) {
        return this.props?.xAxis.minTimestamp != nextProps?.xAxis.minTimestamp || this.props?.xAxis.maxTimestamp != nextProps?.xAxis.maxTimestamp ;
    }

    hasDataChanged(nextProps) {
        const nextSeriesCollection = nextProps.series;
        const prevSeriesCollection = this.props.series;
        if (prevSeriesCollection.length != nextSeriesCollection.length) return true;
        for (let i = 0; i < prevSeriesCollection.length; i++) {
            let prevSeries = prevSeriesCollection[i];
            let nextSeries = nextSeriesCollection[i];
            if (prevSeries.name != nextSeries.name) return true;
            if (prevSeries.data.length != nextSeries.data.length) return true;
            // TODO: compare each time series value for changes... 
            // Compare first and last values and perhaps a middle value if they are all the same assume the whole dataset is the same...
        }
        return false;
    }

    isLoading(nextProps) {
        return nextProps.loading;;
    }

    handleRangeSelection() {
        console.log("Handle range selector", this.state.options.rangeSelector?.selected);
        console.log("State", this.state.options.rangeSelector);
    }

    handleLoading() {
        if (this.isLoading(this.props)) this.chart.showLoading()
        else this.chart.hideLoading();   
    }

    handleExtremas() {
        console.log("xAxis", this.chart.xAxis[0]);
        // this.chart.xAxis[0].setExtremas(this.state.options.xAxis.min, this.state.options.xAxis.max);
        // this.chart.showResetZoom(); 
    }

    componentWillReceiveProps(nextProps) {
        console.log("StockColumnChart:componentWillReceiveProps", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        let changed = false;
        if (this.hasRangeSelectionIndexChanged(nextProps)) {
            console.log("range selector changed")
            this.state.options.rangeSelector.selected = nextProps?.rangeSelector.selected || -1;
            changed = true;
        }
        if (this.hasDataChanged(nextProps)) {
            this.state.options.series = nextProps.series;
            changed = true;
        }
        if (this.hasFilterChanged(nextProps)) {
            this.state.options.xAxis.min = nextProps?.xAxis?.minTimestamp || null;
            this.state.options.xAxis.max = nextProps?.xAxis?.maxTimestamp || null;
            changed = true;
        }
        return changed;
    } 
    
    componentDidMount() {
        this.handleLoading();
    }

    componentDidUpdate() {
        // This part could be improved by verifying that it was previously loading...
        this.handleLoading();
        this.handleRangeSelection();
        this.chart.xAxis[0].setExtremes(this.state.options.xAxis.min, this.state.options.xAxis.max);
        this.chart.showResetZoom();
    }

    render() {
        console.log("Render", this.state);
        return (
            <HighchartsReact 
                highcharts={Highcharts}
                options={this.state.options}
                constructorType={'stockChart'}
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