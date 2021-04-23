import React from 'react';
import { SynchronizeOptions, TimeSeriesChart } from './TimeSeriesChart';

interface ISeries {
    name: string,
    id: string,
    type: 'column' | 'area',
    data: [],
}

export interface IStackingTimeSeriesProps {
    series: Array<ISeries>,
    title?: string,
    tooltip?: boolean,
    selected?: number,
    loading?: boolean,
    stacking?: 'number' | 'percent',
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

export const StackTimeSeriesChart = (props : IStackingTimeSeriesProps) => 
{
    return (
        <TimeSeriesChart {...props} />
    );
};