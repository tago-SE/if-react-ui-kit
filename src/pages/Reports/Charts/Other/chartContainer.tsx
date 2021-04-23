import React from 'react';
import * as styles from './chartContainer.module.scss';

interface IChartContainerProps {
    children: React.ReactNode,
    [x: string]: any
}

export function ChartContainer({ children, ...props } : IChartContainerProps) {
    return (
        <div {...props} >
            <p>hello</p>
            {children}
        </div>
    );
}