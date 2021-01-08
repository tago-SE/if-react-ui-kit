
import { Container, Block } from '../../components/If-Design-System/Container';
import { Article, ArticleList, BlogBlock } from '../../components/If-Design-System/Card/Article';
import { Heading } from '../../components/If-Design-System/Heading';


import { 
    ButtonCrosslink, 
    ButtonCrosslinkContainer,
  } from '../../components/If-Design-System/Crosslinks';

export const PageTemplatesCrosslinks = () => {
    return (
        <Block>
            <Container>
                    <Heading rank={1} size="large">Page Templates</Heading>
                <ButtonCrosslinkContainer columns={4}>
                    <ButtonCrosslink title="Career" href="/career"  />
                    <ButtonCrosslink title="Article" href="/article" />
                </ButtonCrosslinkContainer>
            </Container>
            
        </Block>
    );
}

export default PageTemplatesCrosslinks;