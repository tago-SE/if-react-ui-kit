import React from 'react';
import * as styles from './chartContainer.module.scss';

interface IChartOverlayProps {
    children: React.ReactNode,
    [x: string]: any
}

export function ChartLoaderOverlay({ children, ...props } : IChartOverlayProps) {
    return (
        <div {...props}>
            {children}
        </div>
    );
}

export function ChartLoader() {
    return (
        <ChartLoaderOverlay>
            
        </ChartLoaderOverlay>
    );
}