// import { GridItem, GridRow, GridContainer } from '../../../components/If-Design-System/Grid'
import { Container, Block } from '../../../components/If-Design-System/Container';
import { Heading } from '../../../components/If-Design-System/Heading';
import { CategoryTag, TagContainer } from '../../../components/If-Design-System/Tag';


export const TagsSection = () => {
    return (
        <Block>
            <Container> 
                <Heading size="largest">Tags</Heading>
                <TagContainer>
                    <CategoryTag name="hi" href="/link/to/category" color="mint"></CategoryTag>
                    <CategoryTag name="hi" href="/link/to/category" color="pink"></CategoryTag>
                    <CategoryTag name="hi" href="/link/to/category" color="yellow"></CategoryTag>
                    <CategoryTag name="hi" href="/link/to/category" color="aquamarine" ></CategoryTag>
                    <CategoryTag name="hi" href="/link/to/category"></CategoryTag>
                </TagContainer>
            </Container>
        </Block>
    );
}

export default TagsSection;


/*
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
    */