import React, {createContext, useReducer} from 'react';
import { GlobalHeaderReducer } from './ReportReducer';

type InitialStateType = {
    data: any,
}

const initialState: InitialStateType = {
    data: [],
};

export const ReportContext = createContext<{
  state: InitialStateType, 
  dispatch: React.Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null
});

export const GlobalHeaderStore = ({children}) => {
    const [state, dispatch] = useReducer(GlobalHeaderReducer, initialState);
    return (
        <ReportContext.Provider value={{state, dispatch}}>
            {children}
        </ReportContext.Provider>
    )
};

export default ReportContext;