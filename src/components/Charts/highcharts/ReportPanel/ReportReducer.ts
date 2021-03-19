export enum Types {
    CloseTertiaryMenu = 'CloseTertiaryMenu',
    ToggleSecondaryMenuItem = 'ToggleSecondaryMenuItem',
}

export function setData ( secondaryMenuId: string) {
    return {
        type: Types.ToggleSecondaryMenuItem,
        payload: { 
            secondaryMenuId: secondaryMenuId,
        },
    }
}


export const GlobalHeaderReducer = (state, action) => {

    const onToggleSecondaryMenuItem = (action) => {
        //
        // We pressed the same as before so we close the menu
        //
        console.log("action", action);
        if (state.openSecondaryMenuId === action.payload.secondaryMenuId) {
            return {
                ...state,
                isOpen: false,
                openSecondaryMenuId: "",
            };
        } else {
            return {
                ...state,
                isOpen: true,
                openSecondaryMenuId: action.payload.secondaryMenuId,
            };
        }
    }

    const onCloseTertiaryMenu = () => {
        return {
            ...state,
            isOpen: false,
            openSecondaryMenuId: "",
        }
    }

    switch (action.type) {
        case Types.ToggleSecondaryMenuItem: return onToggleSecondaryMenuItem(action);
        case Types.CloseTertiaryMenu: return onCloseTertiaryMenu();
        default:
            console.log(`ActionType was not recognized: ${action.type}.`);
            return state;
    }
}