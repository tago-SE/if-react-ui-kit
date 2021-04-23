import React, { useState, createContext } from "react";


export interface IReportsState {
    appFilterOptions: Array<any>,
    appFilterSelection: Array<any>,
    appFilterAll: boolean,
}

const initialState: IReportsState = {
    appFilterOptions: [],
    appFilterSelection: [],
    appFilterAll: true,
};

// Create Context Object
export const ReportsContext = createContext<{
  state: IReportsState, 
  dispatch: React.Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null
});

export const useReportsContext = () => React.useContext(ReportsContext);

// Create a provider for components to consume and subscribe to changes
export const ReportsContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reportsReducer, initialState);
    return (
        <ReportsContext.Provider value={{state, dispatch}}>
            {children}
        </ReportsContext.Provider>
    )
};

export default ReportsContext;

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
        // case ReportActionTypes.TOGGLE_FILTER_APP_OPTION : return onToggleFilterAppOption(state, payload);
        // case ReportActionTypes.SET_APPLICATONS : return onSetApplications(state, payload);
        default: throw Error(`ActionType was not recognized: ${action.type}.`)
    }
}