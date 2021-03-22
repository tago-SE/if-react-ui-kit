import React from 'react';
// Pie Chart
// import { HorizontalLoader } from '../../../../If-Design-System/Loader';
import './Panel.scss';
import Highcharts, { RangeSelectorOptions } from "highcharts/highstock"; // Array<RangeSelectorButtonsOptions>;RangeSelectorOptions
import HighchartsReact from 'highcharts-react-official';

/**
 * Properties for a Highcharts component
 */
export interface Props {
    /* *
     *
     *  Properties
     *
     * */

    /**
     * Indexer for custom properties
     */
    [key: string]: any;

    /**
     * Flag for `Chart.update` call (Default: true)
     */
    allowChartUpdate?: boolean;

    /**
     * Reference to the chart factory (Default: chart)
     */
    constructorType?: keyof typeof Highcharts;

    /**
     * Properties of the chart container
     */
    containerProps?: { [key: string]: any };

    /**
     * Highcharts namespace
     */
    highcharts?: typeof Highcharts;

    /**
     * Immutably recreates the chart on receiving new props
     */
    immutable?: boolean;

    /**
     * Highcharts options
     */
    options?: Highcharts.Options;

    /**
     * Flags for `Chart.update` call: redraw, oneToOne, and animation. (Default:
     * [true, true, true])
     */
    updateArgs?: [boolean] | [boolean, boolean] | [boolean, boolean, boolean];

    /* *
     *
     *  Functions
     *
     * */

    /**
     * Callback for the chart factory
     */
    callback?: Highcharts.ChartCallbackFunction;
}

export const StockChartWrapper = (props: Props) => {
    return (
        <HighchartsReact {...props} highcharts={Highcharts} />
    );
}

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



export class StockChart extends React.Component<any, any> {

    private internalChart: any;

    constructor(props) {
        super(props);
        console.log("StockChart:Props", this.props);
        this.afterChartCreated = this.afterChartCreated.bind(this);
      }
       
      afterChartCreated(chart) {
        this.internalChart = chart;
        if (this.props.callback) {
            this.props.callback(chart);
        }
      }
       
    //   componentDidMount() {
        // example of use
        // this.internalChart.addSeries({ data: [1, 2, 3] })
    //   }
       
    render() {
        return (
            <HighchartsReact
                highcharts={Highcharts}
                options={this.props.options}
                callback={this.afterChartCreated}
            />
        );
    }
}