import React, { useState, createContext } from "react";
// import { ISelectionOption } from "../applicationFilterModal";
import { reportsReducer } from './applicationActions';
import { Application } from './application';

export interface IReportsState {
    applications: Array<Application>,
    filteredApplications: Array<Application>,
    showAppFilterModal: boolean,
}

const initialState: IReportsState = {
    applications: [],
    filteredApplications: [],
    showAppFilterModal: false,
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

