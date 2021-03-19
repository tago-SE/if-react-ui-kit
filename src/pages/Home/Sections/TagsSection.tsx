// import { GridItem, GridRow, GridContainer } from '../../../components/If-Design-System/Grid'
import { Container, Block } from '../../../components/If-Design-System/Container';
import { Heading } from '../../../components/If-Design-System/Layout/Typography/Heading';
import { StatusTag, LinkTag, TagContainer } from '../../../components/If-Design-System/Tag';

import SpacingBuilder, { LargestSpacing } from '../../../components/If-Design-System/Utils/Spacing';


export const TagsSection = () => {
    return (
        <Block>
            <Container> 
                <Heading size="largest">Tags</Heading>
                <TagContainer>
                    <LinkTag name="hi" href="/link/to/category" color="mint" spacing={{  padding: { bottom: LargestSpacing }, margin: { bottom: 12 } }}></LinkTag>
                    <LinkTag name="hi" href="/link/to/category" color="pink"></LinkTag>
                    <LinkTag name="hi" href="/link/to/category" color="yellow"></LinkTag>
                    <LinkTag name="hi" href="/link/to/category" color="aquamarine" ></LinkTag>
                    <LinkTag name="hi" href="/link/to/category"></LinkTag>
                </TagContainer>
                <TagContainer>
                    <StatusTag name="Warning" status="warning" spacing={{  padding: { bottom: LargestSpacing }, margin: { bottom: 12 } }}></StatusTag>
                    <StatusTag name="Error" status="error" spacing={{  padding: { bottom: 20}, margin: { bottom: 12 } }}></StatusTag>
                    <StatusTag name="Success" status="success" spacing={{  padding: { bottom: 20}, margin: { bottom: 12 } }}></StatusTag>
                </TagContainer>
                <Heading size="smallest">Small</Heading>
                <TagContainer>
                    <StatusTag name="Warning" status="warning" small />
                    <LinkTag name="hi" href="/link/to/category" color="mint" small />
                </TagContainer>
                {SpacingBuilder.buildPaddingClass({})}
                {SpacingBuilder.buildPaddingClass({bottom: 0})}
                {SpacingBuilder.buildPaddingClass({bottom: 4})}
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