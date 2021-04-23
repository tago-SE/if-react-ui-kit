import React from 'react';
import { GridItem, GridRow, GridContainer } from '../../../components/If-Design-System/Grid'
import { Button, IconButton } from '../../../components/If-Design-System/Button/Button';
import { IFButtonSpinnerPrimary } from '../../../components/If-Design-System/Button/SpinnerButton'; 

import { PrimaryButton, SecondaryButton, TertiaryButton, InfoButton } from '../../../components/If-Design-System/Button/index';
import { Icon } from '../../../components/If-Design-System/Icon';
export const ButtonSection = () => {

    const [state, setState] = React.useState({ loading: false});
    return (
        <div className="if block">
            <div className="if container" style={{ display: "flex", flexWrap: "wrap"}}>
                <PrimaryButton
                    className="my-unique-class"
                    loading={state.loading} 
                    disabled={true}
                    onClick={() => setState({ loading: state.loading ? false : true })}
                >
                    Primary
                </PrimaryButton>
                <SecondaryButton 
                    hovered
                    active
                    loading={state.loading} 
                    onClick={() => setState({ loading: state.loading ? false : true })}
                >
                    Secondary
                </SecondaryButton>
                <TertiaryButton 
                    loading={state.loading} 
                    onClick={() => setState({ loading: state.loading ? false : true })}
                >
                    Tertiary
                </TertiaryButton>
                <InfoButton 
                    loading={state.loading} 
                    onClick={() => setState({ loading: state.loading ? false : true })}
                >
                    Info
                </InfoButton>
                <InfoButton 
                    loading={state.loading} 
                    onClick={() => setState({ loading: state.loading ? false : true })}
                >
                    <Icon identifier="ui date" size="small" color="white"></Icon>
                    Info
                </InfoButton>
                <PrimaryButton 
                    loading={state.loading} 
                    onClick={() => setState({ loading: state.loading ? false : true })}
                    size="large"
                >
                    Primary 
                    <Icon identifier="ui date" size="medium" color="white" style={{ marginLeft: "1.5rem"}} />
                </PrimaryButton>
              
            </div>
        </div>
    

    // <br />
    // <IFButtonSpinnerPrimary></IFButtonSpinnerPrimary>
    // <br />
    // <br />
    // <Button styleType="primary">Medium</Button>
    // <br />
    // <Button styleType="primary" size="large" onClick={() => alert("hi")}>Large</Button>
    // <br />
    // <IconButton icon="ui trashcan" disabled/>

    // </>);
);
}

export default ButtonSection;