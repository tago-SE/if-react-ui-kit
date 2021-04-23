import { IChartState } from './chartsContext';


enum ChartsActionTypes {
    SET_DATE_RANGE,
    SET_CHART_DATA,
}

interface IChartsAction {
    type: ChartsActionTypes
    payload: any,
}

export class ChartsAction {
    
    static setDateRange(start: Date, end: Date) {
        return {
            type: ChartsActionTypes.SET_DATE_RANGE,
            payload: {
                start: start,
                end: end,
            },
        };
    }

    static setChartData(data: any) {
        return {
            type: ChartsActionTypes.SET_CHART_DATA,
            payload: data,
        };
    }

} 


export function chartsReducer(state: IChartState, action: IChartsAction) {
    const { type, payload } = action; 
    switch (type) {
        default: { 
            console.warn(`ActionType was not recognized: ${action.type}.`); return state;
        }
    }
}