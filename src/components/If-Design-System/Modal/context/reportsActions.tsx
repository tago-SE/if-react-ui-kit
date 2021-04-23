import { IReportsState } from './reportsContext';
import { ISelectionOption } from "../applicationFilterModal";
export interface IToggleFilterAppOptionPayload {
    appId: string, 
    appWasChecked: boolean,
    wasFilteringAll: boolean,
}

export const toggleFilterAppOption = (payload: IToggleFilterAppOptionPayload) => ({
    type: ReportActionTypes.TOGGLE_FILTER_APP_OPTION,
    payload: payload,
})
 
function onToggleFilterAppOption(state: IReportsState, payload: IToggleFilterAppOptionPayload) : IReportsState  {
    if (payload.wasFilteringAll) {
        return { 
            ...state,
            appFilterOptions: state.appFilterOptions.map(o => ({ ...o, checked: o.id === payload.appId })),
            appFilterAll: false 
        };
    }
    const getChecked = o => {
        if (o.id === payload.appId) 
            return !payload.appWasChecked;
        return o.checked;
    };
    return { 
        ...state,
        appFilterOptions: state.appFilterOptions.map(o => ({ ...o, checked: getChecked(o) })),
        appFilterAll: false 
    };
}

export const setApplications = (payload: Array<ISelectionOption>) => ({
    type: ReportActionTypes.SET_APPLICATONS,
    payload: payload,
})

function onSetApplications(state: IReportsState, payload: Array<ISelectionOption>) : IReportsState  {
    const applications : Array<ISelectionOption> = payload;
    return {
        ...state,
        appFilterOptions: applications,
        appFilterAll: true,
    }
}

export enum ReportActionTypes {
    SET_FILTER_ALL_APPS = "SET_FILTER_ALL_APPS",
    TOGGLE_FILTER_APP_OPTION = "TOGGLE_FILTER_APP_OPTION",
    SET_APPLICATONS = "SET_APPLICATIONS",
}

interface IReportAction {
    type: ReportActionTypes
    payload: any,
}

export const setFilterAllApplications = (payload: boolean) => ({
    type: ReportActionTypes.SET_FILTER_ALL_APPS,
    payload: payload,
});

function onFilterAllApps(state: IReportsState, payload: boolean )  : IReportsState  {
    const filterAllApps : boolean = payload;
    if (filterAllApps) return {
        ...state, 
        appFilterAll: true,
    };
    else return {
        ...state,
        appFilterAll: false,
    };
}

function reportsReducer(state: IReportsState, action: IReportAction) {
    const { type, payload } = action; 
    switch (type) {
        case ReportActionTypes.SET_FILTER_ALL_APPS : return onFilterAllApps(state, payload);
        case ReportActionTypes.TOGGLE_FILTER_APP_OPTION : return onToggleFilterAppOption(state, payload);
        case ReportActionTypes.SET_APPLICATONS : return onSetApplications(state, payload);
        default: throw Error(`ActionType was not recognized: ${action.type}.`)
    }
}