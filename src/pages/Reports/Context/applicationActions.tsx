import { IReportsState } from './applicationContext';
import { Application } from './application';

enum ReportActionTypes {
    SET_FILTER_ALL_APPS,
    TOGGLE_FILTER_APP_OPTION,
    SET_APPLICATONS,
    SET_SHOW_FILTER_MODAL,
    SET_FILTERED_APPS,
    SET_APP_FILTER_STATE,
}

interface IReportAction {
    type: ReportActionTypes
    payload: any,
}

export class ReportsAction {
    
    static setApplications(payload: Array<Application>) {
        return {
            type: ReportActionTypes.SET_APPLICATONS,
            payload: payload,
        };
    }

    static setShowFilterModal = (show: boolean) => ({
        type: ReportActionTypes.SET_SHOW_FILTER_MODAL,
        payload: show,
    });

    static setApplicationFilterState = (filteredApplicationIds?: string[]) => ({
        type: ReportActionTypes.SET_APP_FILTER_STATE,
        payload: filteredApplicationIds,
    });

}   

export const setApplications = (payload: Array<Application>) => ({
    type: ReportActionTypes.SET_APPLICATONS,
    payload: payload,
})

function onSetApplications(state: IReportsState, payload: Array<Application>) : IReportsState  {
    return {
        ...state,
        applications: payload,
        filteredApplications: payload.filter(app => state.filteredApplications.find(x => x.id === app.id)),
    };
}

function onSetShowFilterModal(state: IReportsState, payload: boolean) : IReportsState  {
  return { ...state, showAppFilterModal: payload };
}

function onSetApplicationFilterState(state: IReportsState, filterIds: string[] ) : IReportsState  {
    return { ...state, 
        filteredApplications: state.applications.filter(app => filterIds.includes(app.id))
    };
}

export function reportsReducer(state: IReportsState, action: IReportAction) {
    const { type, payload } = action; 
    switch (type) {
        case ReportActionTypes.SET_APPLICATONS : return onSetApplications(state, payload);
        case ReportActionTypes.SET_SHOW_FILTER_MODAL : return onSetShowFilterModal(state, payload);
        case ReportActionTypes.SET_APP_FILTER_STATE : return onSetApplicationFilterState(state, payload);
        default: { 
            console.warn(`ActionType was not recognized: ${action.type}.`); return state;
        }
    }
}