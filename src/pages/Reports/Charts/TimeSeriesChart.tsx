import React from 'react';
import { default as Highstocks } from 'highcharts/highstock';
import Highcharts from 'highcharts';
import highchartsAccessibility from "highcharts/modules/accessibility";
import more from 'highcharts/highcharts-more';
import HighchartsReact from 'highcharts-react-official';
import { theme } from './GlobalThemeConfig';
import { HighchartsUtils } from './HighchartsUtils';
import { HorizontalLoader } from '../../../components/If-Design-System/Loader';
/**
 * Very solid example of syncrhonized zoom/crosshairs: http://jsfiddle.net/Gv7Tg/27/
 * 
 * Load new data based on selected zoom: http://jsfiddle.net/gh/get/jquery/1.9.1/highslide-software/highcharts.com/tree/master/samples/stock/demo/lazy-loading/
 */

import { renderToString, renderToStaticMarkup, renderToNodeStream } from 'react-dom/server'
import { ChartContainer } from './Other';

highchartsAccessibility(Highstocks);

// Required for arearange among other things
more(Highstocks);

/*
toggleDateRange(input: TimeRangeOptions) {
        const modifyChartDateRange = (chart: any) => {
            //let newPieData = [];

            let buttons = chart.rangeSelector?.buttons;
            // console.log("Chart", chart);
            if (!buttons) return;
            // This will click the zoom button for the chart if they have matching textContent 
            for (let i = 0; i < buttons.length; i++) {
                let button = buttons[i];
                if (button.element.textContent === input) {
                    button.element.onclick();
                    // After the date range button has been pressed we can extraxt the min max timestamps from the current chart.
                    // And apply it to the summary chart
                    // if (newPieData.length === 0) {
                    //     const {min, max} = chart.xAxis[0].getExtremes();
                    //     console.log("MIN, MAX", min, max);
                    //     console.log("MinDate: BEFORE", new Date(min));
                    //     newPieData = this.data.values.filter(value => true);
                    //     console.log("new pie data", newPieData);
                    // }
                    return;
                }
            }
            throw new Error(`Option is not supported in this chart configuration: ${input}`);
        }
        for (let i = 0; i < this.charts.length; i++) {
            let storedChart = this.charts[i];
            modifyChartDateRange(storedChart.reference);
        }
        // Debug or useful we'll see...
        this.refreshMinMaxTimestamp();
        this.updateCallsSummaryData();
        this.currentRangeSelection = input;
    }
    */
export interface SynchronizeOptions {
    point?: {
        charts: Array<any>,
    }
}

interface ISeries {
    name: string,
    id: string,
    type?: string,
    data: Array<any>,
    [x: string]: any,
}

export interface ITimeSeriesProps {
    series: Array<ISeries>,
    title?: string,
    tooltip?: boolean,
    legend?: boolean,
    stacking?: string,
    selected?: number,
    loading?: boolean,
    xAxis?: {
        floor?: number,
        ceiling?: number,
    },
    onCreation?: (chart: any) => void,
    onLegendItemClick?: (legend: any) => void,
    onLegendItemMouseOver?: (legend: any) => void,
    onLegendItemMouseOut?: (legend: any) => void,
    onPointMouseOver?: (point: any) => void,
    onPointMouseOut?: (point: any) => void,
    onSeriesMouseOver?: (series: any) => void,
    onSeriesMouseOut?: (series: any) => void,
    synchronize?: SynchronizeOptions;
}

/*
credits: { enabled: false },
    scrollbar: { enabled: false },
    navigator: { enabled: false },
    exporting: { enabled: false },
    rangeSelector: {
        selected: -1
      },
  
      title: {
        text: 'Bandwidth consumption'
      },
      tooltip: {
        positioner: function() {
            return { x: this.chart.chartWidth - this.label.width, y: 10 };
          },
      },
      legend: {
          enabled: true,
      },
      series: [{
        name: 'Bandwidth',
        data: [],
        tooltip: {
          valueDecimals: 2
        }
    }],
*/

export const TimeSeriesChart = ({
  series,  
  title,
  selected,
  loading,
  stacking,
  xAxis,
  onCreation,
  onLegendItemClick,
  onLegendItemMouseOver,
  onLegendItemMouseOut,
  onPointMouseOver,
  onPointMouseOut,
  onSeriesMouseOver,
  onSeriesMouseOut,
  synchronize,
} : ITimeSeriesProps) => 
{
    const chartRef = React.useRef(null);

    const getChart = () => chartRef.current.chart;

    const getSeries = () => (!series || loading) ? undefined : series;

    const syncrhonizedPointCharts = () => synchronize?.point?.charts?.filter(chart => chart !== chartRef.current.chart) || [];
    
    const pointsMatchOnXAxis = (p1: any, p2: any) => {
        if (!p1 || !p2) return false;
        return p1.x === p2.x;   
    };

    const findMatchingPoint = (targetPoint: any, points: Array<any>) => {
        if (targetPoint.index < points.length) {
            let pointAtIndex = points[targetPoint.index];
            if (pointsMatchOnXAxis(targetPoint, pointAtIndex)) {
                return pointAtIndex;
            } 
        }
        return points.find(point => pointsMatchOnXAxis(targetPoint, point));
    };

    const showPointHoverOnOtherCharts = (triggeringPoint: any, syncrhonizedCharts: Array<any>) => {
        for (let i = 0; i < syncrhonizedCharts.length; i++) {
            let chartToSync = syncrhonizedCharts[i];
            const { series = [], xAxis = [] } = chartToSync;
            if (series.length === 0) {
                return;
            }
            const updatedPoints = [];
            const visibleSeries = series.filter((serie: any)=> serie.visible);
            for (let j = 0; j < visibleSeries.length; j++) {
                let points = visibleSeries[i].points;
                let point = findMatchingPoint(triggeringPoint, points);
                if (point) {
                    updatedPoints.push(point);
                } 
            }
            if (updatedPoints.length > 0) {
                chartToSync.xAxis[0].drawCrosshair(triggeringPoint, updatedPoints[0]); 
                chartToSync.tooltip.refresh(updatedPoints);  
            }      
        }
    };

    const hidePointHoverOnOtherCharts = (syncrhonizedCharts: Array<any>) => {
        for (let i = 0; i < syncrhonizedCharts.length; i++) {
            let chartToSync = syncrhonizedCharts[i];
            chartToSync.xAxis[0].hideCrosshair(); 
            chartToSync.tooltip.hide(); 
        }
    }

    /**
     * syncrhonizes inputRange.buttons between charts provided they have the same name.
     * @param clickedButton 
     * @param event 
     */
    const syncrhonizeTimeSeriesButton = (clickedButton: any, event: any) => {
        if (!event) return; 
        const charts = syncrhonizedPointCharts();
        const shouldNotPassAnyEvent = undefined;
        for (let j = 0; j < charts.length; j++) {
            const chart = charts[j];
            const buttons = chart.rangeSelector?.buttons;
            if (!buttons) return;
            for (let i = 0; i < buttons.length; i++) {
                const { textStr, element } = buttons[i];
                if (textStr === clickedButton.text) {
                    element.onclick(shouldNotPassAnyEvent);  
                }
            }
        }
    }

    const options = {
        scrollbar: { enabled: false },
        navigator: { enabled: false },
        rangeSelector: {
            enabled: true,
            selected: -1,
            buttons: [{
                type: 'hour',
                count: 24,
                text: '1d',
                events: {
                    click: function (event: any) { syncrhonizeTimeSeriesButton(this, event); }
                }
            }, {
                type: 'month',
                count: 1,
                text: '1m',
                events: {
                    click: function (event: any) { syncrhonizeTimeSeriesButton(this, event); }
                }
            }, {
                type: 'month',
                count: 3,
                text: '3m',
                events: {
                    click: function (event: any) { syncrhonizeTimeSeriesButton(this, event); }
                }
            }, {
                type: 'month',
                count: 6,
                text: '6m',
                events: {
                    click: function (event: any) { syncrhonizeTimeSeriesButton(this, event); }
                }
            }, {
                type: 'ytd',
                text: 'YTD',
                events: {
                    click: function (event: any) { syncrhonizeTimeSeriesButton(this, event); }
                }
            }, {
                type: 'year',
                count: 1,
                text: '1y',
                events: {
                    click: function (event: any) { syncrhonizeTimeSeriesButton(this, event); }
                }
            }, {
                type: 'all',
                text: 'All',
                events: {
                    click: function (event: any) { syncrhonizeTimeSeriesButton(this, event); }
                }
            }]
        },
        chart: { 
           
        },
        title: {
            text: title,
            
        },
        subtitle: {
            text: undefined,
        },
        caption: {
            text: undefined,
        },
        accessibility: {
            description: "Range: Jul 1st 2009 to Jul 31st 2009", // TODO
            enabled: true,
        },
        legend: {
            enabled: true,
        },
        tooltip: {
          
        },
        xAxis: {
            // Propsed solution: use invisible series 
            // http://jsfiddle.net/efej646r/2/
            type: 'datetime',
            title: "Date",
            // tickInterval: 3,
            // pointEnd: 1593205200000,
            // min: 1578114000000,
            // max: 1593205200000,
            
            // allowZoomOutside: true,

            floor: xAxis?.floor,            // <-- this method works but is not animated
            ceiling: xAxis?.ceiling,

            // floor: 1578114000000,
            // ceiling: 1593205200000 ,
            // startOnTick: true,
            // min: 1572114000000,
            // pointStart: 1578114000000,
            // startOnTick: false,
            crosshair: {
                className: 'crosshair-cursor',
                color: '#000000',
                lineWidth: 3,
                dashStyle: 'solid' // 'Dash' | 'DashDot' | 'Dot' | 'LongDash' | 'LongDashDot' | 'LongDashDotDot' | 'ShortDash' | 'ShortDashDot' | 'ShortDashDotDot' | 'ShortDot' | 'Solid'
            },   
            accessibility: {
                rangeDescription: undefined,    // in case you wish to override the default range description
                description: "some description",
                enabled: true,  
            },      
        },
        yAxis: {
            // events: {
            //     afterSetExtremes: function() {
            //         console.log("afterSetExtremes", this);
            //         console.log("chart is zoomed?", this.chart.options.chart.isZoomed);

            //         // Compute a reasonable tick interval given the zoom range -
            //         // have to compute this since we set the tickIntervals in order
            //         // to get predictable synchronization between 3 charts with
            //         // different data.
            //         const computeTickInterval = (xMin, xMax) => {
            //             let zoomRange = xMax - xMin;
            //             if (zoomRange <= 2) return 0.5;
            //             if (zoomRange < 20) return 1;
            //             else if (zoomRange < 50) return 3;
            //             else return 5;
            //         }

                                                
            //             const xMin = this.chart.xAxis[0].min;
            //             const xMax = this.chart.xAxis[0].max;
            //             const zmRange = computeTickInterval(xMin, xMax);
                        
            //             const charts = syncrhonizedPointCharts();
            //             for (let i = 0; i < charts.length; i++) {
            //                 const chart = charts[i];
            //                 if (!chart) continue
            //                 chart.xAxis[0].options.tickInterval = zmRange;
            //                 chart.xAxis[0].isDirty = true;
            //                 chart.options.chart.isZoomed = true;
            //                 chart.xAxis[0].setExtremes(xMin, xMax, true);
            //             }
            //             // chart1.xAxis[0].options.tickInterval =zmRange;
            //             // chart1.xAxis[0].isDirty = true;
            //             // chart2.xAxis[0].options.tickInterval = zmRange;
            //             // chart2.xAxis[0].isDirty = true;
            //             // chart3.xAxis[0].options.tickInterval = zmRange;
            //             // chart3.xAxis[0].isDirty = true;
                            
            //             // chart2.options.chart.isZoomed = true;
            //             // chart3.options.chart.isZoomed = true;
            //             // chart2.xAxis[0].setExtremes(xMin, xMax, true);
                    
            //             // chart3.xAxis[0].setExtremes(xMin, xMax, true);
            //             //     chart2.options.chart.isZoomed = false;
            //             // chart3.options.chart.isZoomed = false;
                    
            
                  
                    
            //     }
            // }
        },
        plotOptions: {
            column: {
                stacking: stacking,
            },
            area: {
                stacking: stacking,
                lineWidth: 1,
                fillOpacity: 0.5,
                marker: {
                    lineWidth: 0,
                }
            },
            series: {
                cursor: 'pointer',
                point: {
                     events: {
                        mouseOver: function() {
                            if (onPointMouseOver) onPointMouseOver(this);
                            showPointHoverOnOtherCharts(this, syncrhonizedPointCharts());
                        },
                        mouseOut: function() {
                            if (onPointMouseOut) onPointMouseOut(this);
                        }               
                    },
                },
                events: {
                    mouseOver: function() {
                        if (onSeriesMouseOver) onSeriesMouseOver(this);
                    },
                    mouseOut: function() {
                        if (onSeriesMouseOut) onSeriesMouseOut(this);
                        hidePointHoverOnOtherCharts(syncrhonizedPointCharts());
                    }               
                },
                // dataGrouping: {
                //     // enabled: false,
                // }
            },
        },
        series: getSeries(),
    };


    const SvgComponent = () => {
        return (
          <svg xmlns="http://www.w3.org/2000/svg">
      
                <rect fill="red" width={100} height={100} />
      
          </svg>
        );
    };

    const svgString = encodeURIComponent(renderToStaticMarkup(<SvgComponent />));

    React.useLayoutEffect(() => {
        const loaderColor = "#0054f0";
        const chart = getChart();
        if (loading) {
        //    chart.showLoading(renderToString(<HorizontalLoader size="large" color="blue" isLoading={true} />));
            // chart.showLoading(  renderToString(<div style={{backgroundColor: "red", width: "50px", height: "50px"}}>
            //      <div className="inner" style={{ width: "50px", height: "50px", backgroundColor: "blue"}}></div> 
            // </div>));
            chart.showLoading(
                // renderToStaticMarkup(<SvgComponent />)
            //     renderToString(<svg
            //     className='if loader dots horizontal large'
            //     xmlns='http://www.w3.org/2000/svg'
            //     viewBox='0 0 64 64'
            // >   
            //    {<g className='if svg g'>
            //       <circle className='if svg circle' fill={loaderColor} cx={8} cy={32} r={8} />
            //       <circle className='if svg circle' fill={loaderColor} cx={32} cy={32} r={8} />
            //       <circle className='if svg circle' fill={loaderColor} cx={56} cy={32} r={8} />
            //     </g>}
            //   </svg>)
              );
            
            HighchartsUtils.removesSeriesFromChart(chart, false);
        } else {
            chart.hideLoading();
            HighchartsUtils.addLegendMouseEventsForChart(chart, onLegendItemClick, onLegendItemMouseOver, onLegendItemMouseOut);
        }
    }, [loading, series]);

    return (
        <div
            style={{
                width: "auto", height: "auto", position: "relative",
            }}
        >
            <HighchartsReact
                highcharts={Highstocks}
                options={Highcharts.merge(options, theme)}
                allowChartUpdate={true}
                updateArgs={[true, true, true]}
                constructorType={"stockChart"}
                ref={chartRef}
                callback={(chart: any) => {
                    if (onCreation) {
                        onCreation(chart);
                    }
                }}
            >
            </HighchartsReact>
            <div className="highcharts-overlay" style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0px",
                left: "0px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
            }}>
                <HorizontalLoader size="small" color="blue" />
            </div>
        </div>
    );
};