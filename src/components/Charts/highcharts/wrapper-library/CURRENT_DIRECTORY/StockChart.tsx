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