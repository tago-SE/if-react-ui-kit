import React from 'react'
import HighchartsReact from 'highcharts-react-official';

class StockChart extends React.Component<{options, highcharts, onChartCreated, onRef}> {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  
  render() {
    const props = this.props;
    return (<HighchartsReact
      highcharts={props.highcharts}
      constructorType={'stockChart'}
      options={props.options}
      ref={props.onRef ? props.onRef : undefined}
      callback={(chart) => {
        if (props.onChartCreated) props.onChartCreated(chart);
      }}
    />)
  }
}


export default StockChart;