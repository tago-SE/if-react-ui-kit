import React from 'react';
import * as d3 from 'd3';


/**
 * Example usage: https://app.pluralsight.com/guides/make-d3js-charts-responsive-in-react-apps
 * 
 * @param renderChartFn - Callback that contains d3.js code to be executed
 * @param dependencies - fixed-length array to tell React when to renderChartFn. 
 * 
 * Useful for preventing unecessary rerenders.
 */
export const useD3 = (renderChartFn: any, dependencies: any) => {
    const ref = React.useRef();
    React.useEffect(() => {
        renderChartFn(d3.select(ref.current));
        return () => {};
    }, dependencies);
    return ref;
}
  