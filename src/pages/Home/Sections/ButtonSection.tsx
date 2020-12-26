
import { GridItem, GridRow, GridContainer } from '../../../components/If-Design-System/Grid'
import { Button, IconButton } from '../../../components/If-Design-System/Button/Button';
import { IFButtonSpinnerPrimary } from '../../../components/If-Design-System/Button/SpinnerButton'; 

export const ButtonSection = () => {
    return (<>

    <GridItem columns={[{value: 1, type: "xs" }]}>
    </GridItem>
    <GridContainer>
        <GridRow>
            <GridItem xs={12}>
                Pick Style
            </GridItem>   
        </GridRow>
        <GridRow>
            <GridItem xs={1} md={2}>
               <span></span>
            </GridItem>
            <GridItem xs={3} md={2}>
                <Button loading={true} styleType="primary"><span className="if icon product car white"></span></Button>
            </GridItem>
            <GridItem xs={3} md={2}>
                <Button loading={true} styleType="secondary">Secondary</Button>
            </GridItem>
            <GridItem xs={3} md={2}>
                <Button loading={true} styleType="tertiary">Tertiary</Button>
            </GridItem>
        </GridRow>
        <GridRow>
            <GridItem xs={1}>
               <span></span>
            </GridItem>
            <GridItem xs={3}>
                <Button styleType="info">Info</Button>
            </GridItem>
        </GridRow>

        <GridRow>
            <GridItem xs={12}>
                Pick Size
            </GridItem>   
        </GridRow>

        <GridRow>
            <GridItem xs={1}><span></span></GridItem>
            <GridItem xs={3}>
                <Button styleType="primary">Primary</Button>
            </GridItem>
            <GridItem xs={3}>
                <Button styleType="secondary" size="large">Primary</Button>
            </GridItem>

        </GridRow>
    </GridContainer>

    <br />
    <IFButtonSpinnerPrimary></IFButtonSpinnerPrimary>
    <br />
    <br />
    <Button styleType="primary">Medium</Button>
    <br />
    <Button styleType="primary" size="large" onClick={() => alert("hi")}>Large</Button>
    <br />
    <IconButton icon="ui trashcan" disabled/>

    </>);
}

export default ButtonSection;