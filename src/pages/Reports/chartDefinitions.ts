export const reponseTimeChartConfig = {

    credits: { enabled: false },
    scrollbar: { enabled: false },
    navigator: { enabled: false },
    exporting: { enabled: false },
    title: {
        text: "Response time"
    },
    xAxis: {
        type: 'datetime',
        title: "Date",
        accessibility: {
            rangeDescription: "Range: Jul 1st 2009 to Jul 31st 2009",
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true,
        valueSuffix: ' ms',
        series: undefined,
        plotOptions: {
            series: {
                // general plot options for all series
            },
            arearange: {
                // shared options for all arearange series
            }
        }
    },
    legend: {
        enabled: true,
    },
    series: [],
    plotOptions: {
        series: {
            // general plot options for all series
            events: {
                legendItemClick: function () {
                    console.log("LEGEND CLICKED!");    
                }
            }
        },
        arearange: {
            // shared options for all arearange series
        }
    }
};


export const bandwidthChartOptions = {
    credits: { enabled: false },
    scrollbar: { enabled: false },
    navigator: { enabled: false },
    exporting: { enabled: false },
    rangeSelector: {
        selected: 1
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
    plotOptions: {
        series: {
            events: {
                legendItemClick: function () {
                    console.log("LEGEND CLICKED!");    
                }
            }
        },
    },
};

export const callStatusChartOptions = {
    credits: { enabled: false },
    scrollbar: { enabled: false },
    navigator: { enabled: false },
    exporting: { enabled: false },
    title: {
        text: "Calls"
    },
    xAxis: {
        type: 'datetime',
        title: "Date",
        accessibility: {
            rangeDescription: "Range: Jul 1st 2009 to Jul 31st 2009",
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true,
        valueSuffix: ' ms',
        series: undefined,
        plotOptions: {
            series: {
                // general plot options for all series
            },
            arearange: {
                // shared options for all arearange series
            }
        }
    },
    legend: {
        enabled: true,
    },
    series: [],
    plotOptions: {
        column: {
            stacking: 'number'
        },
        series: {
            // general plot options for all series
            events: {
                legendItemClick: function () {
                    console.log("LEGEND CLICKED!");    
                }
            }
        },
    }
};

export const callsStatusTotalPieChart = {
    credits: { enabled: false },
    scrollbar: { enabled: false },
    navigator: { enabled: false },
    exporting: { enabled: false },
    title: {
        text: "Calls"
    },
    subtitle: {
        text: "Total calls for the period 2019-03-12 - 2020-05-25"
    },
    xAxis: {
        type: 'datetime',
        title: "Date",
        accessibility: {
            rangeDescription: "Range: Jul 1st 2009 to Jul 31st 2009",
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true,
        valueSuffix: ' ms',
        series: undefined,
        plotOptions: {
            series: {
                // general plot options for all series
            },
            arearange: {
                // shared options for all arearange series
            }
        }
    },
    legend: {
        enabled: true,
    },
    series: [],
    plotOptions: {
        pie: {
            allowPointSelect: false, 
            dataLabels: {
                enabled: true,
                style: { fontWeight: "italic" }
            }
        },
        series: {
            // general plot options for all series
            events: {
                legendItemClick: function () {
                    console.log("LEGEND CLICKED!");    
                }
            }
        },
    }
}