import React from 'react';
import { SimpleModal } from './simpleModal';
import { Checkbox, SelectionControlGroup } from '../Input/SelectionControls';
import { Legend, Fieldset, InputWrapper } from '../Input';
import { 
    useReportsContext, 
    setFilterAllApplications,
    toggleFilterAppOption,
} from './context';

export interface ISelectionOption {
    name: string,
    id: string,
    checked: boolean,
}


interface IQueryModelProps {
    show: boolean, 
    options: any,
    onClose?: () => void,
    onComplete?: (selectionArray: Array<ISelectionOption>) => void,
}

export const UserApplicationFilterModal = ({ 
    show, 
    onComplete,
    onClose,
} : IQueryModelProps) => {

    const { state, dispatch } = useReportsContext();
    
    const [localState, setState] = React.useState({ 
        filterAll: true,
        options: [],
    });

    const updateState = (shouldFilterAll: boolean) => {
        const selectedArray = localState.options.filter(o => o.checked);
        if (shouldFilterAll || selectedArray.length === 0) {
            setState({...localState, filterAll: true });
        }
        else {
            setState({...localState, filterAll: false });
        } 
    }

    React.useEffect(() => {
        setState({ ...localState, 
            options: state.appFilterOptions, 
            filterAll: true
        }); 
    }, [state.appFilterOptions]);

    return (
        <SimpleModal 
            show={show}
            title="Filter by application"
            contentProps={{ style: { marginBottom: "1.5rem" }}}
            content={
            <InputWrapper>
                <Fieldset>
                    <Legend>Applications</Legend>
                    <SelectionControlGroup alignment="vertical">
                        {localState.options.map((app: ISelectionOption) => (
                            <Checkbox 
                                id={app.id} 
                                name={app.name}
                                label={app.name} 
                                checked={!localState.filterAll && app.checked} 
                                onChange={() => { 
                                    if (localState.filterAll) {
                                        for (let o of localState.options) {
                                            o.checked = false;
                                        }
                                        app.checked = true;
                                    } else {
                                        app.checked = !app.checked;
                                    }
                                    updateState(false);
                                }}
                            />
                        ))}
                    <Checkbox 
                        id="all-applications-id"
                        name="Select all applications"
                        label="All"
                        checked={localState.filterAll}
                        onChange={() => { 
                            updateState(localState.filterAll ? false : true);
                        }}/>
                    </SelectionControlGroup>
                </Fieldset>
            </InputWrapper>}
            onClose={onClose}
        />
    );
}
