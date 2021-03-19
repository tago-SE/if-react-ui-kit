import React, {createContext, useReducer} from "react";
import { GlobalHeaderReducer } from './GlobalHeaderReducer';

type InitialStateType = {

    /** Flag for when the global menu is open */
    isOpen: boolean,

    /** The id of the open secondary menu, is empty when none is set */
    openSecondaryMenuId: string,

    /** The height of the secondary navbar component. This does not include any expanded accordations. */
    secondaryNavbarHeight: number,

    /** The total height of the global menu. Changes when a tertiary accordation is expanded/collapsed */
    menuHeight: number,
}

const initialState: InitialStateType = {
    isOpen: false,
    openSecondaryMenuId: "",
    menuHeight: 0,
    secondaryNavbarHeight:  0,
};

export const GlobalHeaderContext = createContext<{
  state: InitialStateType, 
  dispatch: React.Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null
});

export const GlobalHeaderStore = ({children}) => {
    const [state, dispatch] = useReducer(GlobalHeaderReducer, initialState);
    return (
        <GlobalHeaderContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalHeaderContext.Provider>
    )
};

export default GlobalHeaderContext;