import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export { LineChart } from './LineChart';
export { PieChart } from './PieChart';
export { SplineChart } from './SplineChart';
export { StackedColumnChart } from './StackedColumnChart';
export { StockmarketChart } from './StockmarketChart';
export { StockMarketColumnChart } from './StockMarketColumnChart_WithCustomFilter';
export { ChartPanel } from './Panel/ChartPanel';

// The wrapper exports only a default component class that at the same time is a
// namespace for the related Props interface (HighchartsReact.Props). All other
// interfaces like Options come from the Highcharts module itself.
 
const options: Highcharts.Options = {
    title: {
        text: 'My Highchart'
    },
    series: [{
        type: 'pie',
        
        data: [1, 2, 3]
    }]
}
 
export const Example = (props: HighchartsReact.Props) => <div>
    <HighchartsReact
        highcharts={Highcharts}
        options={options}
        {...props}
    />
</div>
 