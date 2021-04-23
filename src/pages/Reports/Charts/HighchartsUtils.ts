export class HighchartsUtils {
    
    static removesSeriesFromChart(chart: any, redraw: boolean) {
            while (chart.series.length) {
        chart.series[0].remove(redraw);
        }
    }

    static setupCallbackForElement(element: any, arg: any, event: 'mouseover' | 'mouseout' | 'click', callback: (arg: any) => void) {
        if (!element) return;
        // How to destory this callback and is it necessary? 
        element.on(event, function() {
            if (callback) {
                return callback(arg);
            }
        });
    }

    static addLegendMouseEventsForChart(
        chart: any, 
        onLegendItemClick: (legendItem: any) => void,
        onLegendItemMouseOver: (legendItem: any) => void,
        onLegendItemMouseOut: (legendItem: any) => void,
    ) {
        chart?.legend.allItems.forEach((legendItem: any) => {
            const legendElement = legendItem.legendItem;
            this.setupCallbackForElement(legendElement, legendItem, 'mouseover', onLegendItemMouseOver);
            this.setupCallbackForElement(legendElement, legendItem, 'mouseout', onLegendItemMouseOut);
            this.setupCallbackForElement(legendElement, legendItem, 'click', onLegendItemClick);    
        });
    }

    static removeLegendMouseEventsForChart(
        chart: any
    ) {
        // Is this necessary to remove the above event handlers ???
    }
    
}

export default HighchartsUtils;