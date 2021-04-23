import React, { useState, createContext } from "react";
import { chartsReducer } from './chartsActions';

export interface IChartState {
   
}

const initialState: IChartState = {
};

// Create Context Object
export const ChartsContext = createContext<{
  state: IChartState, 
  dispatch: React.Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null
});

export const useChartsContext = () => React.useContext(ChartsContext);

// Create a provider for components to consume and subscribe to changes
export const chartsContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(chartsReducer, initialState);
    return (
        <ChartsContext.Provider value={{state, dispatch}}>
            {children}
        </ChartsContext.Provider>
    )
};

export default ChartsContext;

