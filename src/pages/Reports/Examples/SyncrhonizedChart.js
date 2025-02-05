import React, { Component } from "react";

import Highcharts from "highcharts";
import {
  HighchartsChart,
  HighchartsProvider,
  XAxis,
  YAxis,
  Title,
  Series,
  Tooltip
} from "react-jsx-highcharts";

// Cache the default values to restore when this example unmounts
const oldReset = Highcharts.Pointer.prototype.reset;
const oldHighlight = Highcharts.Point.prototype.highlight;

class SynchronisedCharts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: null
    };

    // Override the Highcharts prototypes here, so they only apply to this example
    Highcharts.Pointer.prototype.reset = () => {};

    Highcharts.Point.prototype.highlight = function(event) {
      this.onMouseOver(); // Show the hover marker
      this.series.chart.tooltip.refresh(this); // Show the tooltip
      this.series.chart.xAxis[0].drawCrosshair(event, this); // Show the crosshair
    };
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/whawker/809cae1781f25db5f3c2dd7cee93b017/raw/6906d0406d4cd5be1fab470f4353a132d128a0c1/activity.json"
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(json => {
        this.setState({
          chartData: json
        });
      });
  }

  componentWillUnmount() {
    // Restore the cached defaults
    Highcharts.Pointer.prototype.reset = oldReset;
    Highcharts.Point.prototype.highlight = oldHighlight;
  }

  renderChart = (dataset, index) => {
    const tooltipPositioner = function() {
      return { x: this.chart.chartWidth - this.label.width, y: 10 };
    };
    const data = dataset.data.map((val, i) => [
      this.state.chartData.xData[i],
      val
    ]);
    const colour = Highcharts.getOptions().colors[index];

    return (
      <HighchartsProvider Highcharts={Highcharts}>
        <HighchartsChart key={dataset.name}>
          <Title align="left" margin={30} x={30}>
            {dataset.name}
          </Title>
          <XAxis crosshair labels={{ format: "{value} km" }} />
          <YAxis>
            <Series
              name={dataset.name}
              type={dataset.type}
              data={data}
              color={colour}
              tooltip={{ valueSuffix: ` ${dataset.unit}` }}
            />
          </YAxis>

          <Tooltip
            positioner={tooltipPositioner}
            borderWidth={0}
            backgroundColor="none"
            pointFormat="{point.y}"
            headerFormat=""
            shadow={false}
            style={{ fontSize: "18px" }}
            valueDecimals={dataset.valueDecimals}
          />
        </HighchartsChart>
      </HighchartsProvider>
    );
  };

  handleMouseMove = e => {
    let point = null;
    let event = null;

    e.persist();
    Highcharts.charts.forEach(chart => {
      if (!chart) return;
      event = chart.pointer.normalize(e); // Find coordinates within the chart
      point = chart.series[0]?.searchPoint(event, true) || undefined; // Get the hovered point
      if (point) {
        point?.highlight(e);
      }
    });
  };

  render() {
    const { chartData } = this.state;
    if (!chartData) return null;

    return (
      <div
        onMouseMove={this.handleMouseMove}
        onTouchMove={this.handleMouseMove}
      >
        {chartData.datasets.map(this.renderChart)}
      </div>
    );
  }
}

export default SynchronisedCharts;
