
import { GridItem, GridRow, GridContainer } from '../../../components/If-Design-System/Grid'
import { HorizontalLoader } from '../../../components/If-Design-System/Loader';

export const LoaderSection = () => {
    return (<>

    <GridItem columns={[{value: 1, type: "xs" }]}>
    </GridItem>
    <GridContainer>
        <GridRow>
            <GridItem xs={12}>
                Pick Color
            </GridItem>   
        </GridRow>
        <GridRow>
            <GridItem xs={1} md={2}>
               <span></span>
            </GridItem>
            <GridItem xs={3}>
                <HorizontalLoader color="brown"/>
            </GridItem>
            <GridItem xs={3} style={{backgroundColor: "black"}}>
                <HorizontalLoader color="white"/>
            </GridItem>
            <GridItem xs={3}>
                <HorizontalLoader color="blue"/>
            </GridItem>
        </GridRow>
        <GridRow>
            <GridItem xs={1} md={2}>
               <span></span>
            </GridItem>
            <GridItem xs={3}>
                <HorizontalLoader size="large" color="brown"/>
            </GridItem>
            <GridItem xs={3} style={{backgroundColor: "black"}}>
                <HorizontalLoader size="medium" color="white"/>
            </GridItem>
            <GridItem xs={3}>
                <HorizontalLoader size="large" color="blue"/>
            </GridItem>
        </GridRow>
        <GridRow>
            <GridItem xs={1} md={2}>
               <span></span>
            </GridItem>
            <GridItem xs={3}>
                <HorizontalLoader size="largest" color="brown"/>
            </GridItem>
            <GridItem xs={3} style={{backgroundColor: "black"}}>
                <HorizontalLoader size="largest" color="white"/>
            </GridItem>
            <GridItem xs={3}>
                <HorizontalLoader size="largest" color="blue"/>
            </GridItem>
        </GridRow>
        
    </GridContainer>
    </>);
}

export default LoaderSection;