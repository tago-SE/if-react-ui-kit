import { Container, Block } from '../../../components/If-Design-System/Container';
import { Heading } from '../../../components/If-Design-System/Layout/Typography/Heading';
import { 
    ListColumCrosslinkContainer, 
    ListColumnCrosslink, 
    ListCrosslink, 
    LifestyleCrosslinkContainer, 
    LifestyleCrosslink,
    StudioCrosslinkContainer,
    StudioCrosslink,
    ButtonCrosslinkContainer,
    ButtonCrosslink,

} from '../../../components/If-Design-System//Crosslinks';


export const CrosslinkSection = () => {
    return (
        <Block>
            <Container> 
            <Heading variant="largest">Crosslinks</Heading>

            <Heading variant="medium">Studio</Heading>
            <StudioCrosslinkContainer columns={3}>
                <StudioCrosslink title="Yo" description="abc" href="/abc" imgSrc="https://if-design-cdn.azureedge.net/images/documentation/studio/If-studio-documents-IFS-04772_PNG.PNG" />
                <StudioCrosslink title="hello" description="abc" href="/abc" imgSrc="https://if-design-cdn.azureedge.net/images/documentation/studio/If-studio-documents-IFS-04772_PNG.PNG" />
                <StudioCrosslink title="hello" description="abc" href="/abc" imgSrc="https://if-design-cdn.azureedge.net/images/documentation/studio/If-studio-documents-IFS-04772_PNG.PNG" />
                <StudioCrosslink title="hello" description="abc" href="/abc" imgSrc="https://if-design-cdn.azureedge.net/images/documentation/studio/If-studio-documents-IFS-04772_PNG.PNG" />
                <StudioCrosslink title="hello" description="abc" href="/abc" imgSrc="https://if-design-cdn.azureedge.net/images/documentation/studio/If-studio-documents-IFS-04772_PNG.PNG" />
            </StudioCrosslinkContainer>

            <Heading variant="medium">Lifestyle</Heading>
            <LifestyleCrosslinkContainer columns={4}>
                <LifestyleCrosslink  title="hello" href="/abc" imgSrc="https://v.imgi.no/gy5k43je86-MOODBOARD/2042"/>
                <LifestyleCrosslink  title="hello" href="/abc" imgSrc="https://v.imgi.no/gy5k43je86-MOODBOARD/2042"/>
                <LifestyleCrosslink  title="hello" href="/abc" imgSrc="https://v.imgi.no/gy5k43je86-MOODBOARD/2042"/>
                <LifestyleCrosslink  title="hello" href="/abc" imgSrc="https://v.imgi.no/gy5k43je86-MOODBOARD/2042"/>
                <LifestyleCrosslink  title="hello" href="/abc" imgSrc="https://v.imgi.no/gy5k43je86-MOODBOARD/2042"/>
            </LifestyleCrosslinkContainer>

            <Heading variant="medium">Button</Heading>
            <ButtonCrosslinkContainer columns={4}>
                <ButtonCrosslink title="hello" href="/abc" iconTag="diamond"  />
                <ButtonCrosslink title="hello" href="/abc" iconTag="forest"  />
                <ButtonCrosslink title="hello" href="/abc" iconTag="cloud-light"  />
                <ButtonCrosslink title="hello" href="/abc" iconTag="smarthphone"  />
                <ButtonCrosslink title="hello" href="/abc" iconTag="watch"  />
            </ButtonCrosslinkContainer>
    
            <Heading variant="medium">List Column</Heading>
            <ListColumCrosslinkContainer columns={3}>
                <ListColumnCrosslink title="Innehålstittel" titlevariant="medium">
                    <ListCrosslink title="Betalningsguide" href="#"/>
                    <ListCrosslink title="Därfor väljer du If" href="#"/>
                    <ListCrosslink title="Säkerhetsbutikken" href="#"/>
                    <ListCrosslink title="Tryggare vardag" href="#"/>
                    <ListCrosslink title="Inför pensionen" href="#"/>
                    </ListColumnCrosslink>
                    <ListColumnCrosslink title="Innehålstittel" titlevariant="medium">
                    <ListCrosslink title="Betalningsguide" href="#"/>
                    <ListCrosslink title="Därfor väljer du If" href="#"/>
                    <ListCrosslink title="Säkerhetsbutikken" href="#"/>
                    <ListCrosslink title="Tryggare vardag" href="#"/>
                    <ListCrosslink title="En alldeles för lång rubrik" href="#"/>
                    </ListColumnCrosslink>
                    <ListColumnCrosslink title="Innehålstittel" titlevariant="medium">
                    <ListCrosslink title="Betalningsguide" href="#"/>
                    <ListCrosslink title="Därfor väljer du If" href="#"/>
                    <ListCrosslink title="Säkerhetsbutikken" href="#"/>
                    <ListCrosslink title="Tryggare vardag" href="#"/>
                    <ListCrosslink title="Inför pensionen" href="#"/>
                    </ListColumnCrosslink>
            
                    <ListColumnCrosslink title="Innehålstittel" titlevariant="medium">
                    <ListCrosslink title="Betalningsguide" href="#"/>
                    <ListCrosslink title="Därfor väljer du If" href="#"/>
                    <ListCrosslink title="Säkerhetsbutikken" href="#"/>
                    <ListCrosslink title="Tryggare vardag" href="#"/>
                    <ListCrosslink title="Inför pensionen" href="#"/>
                    </ListColumnCrosslink>
                    <ListColumnCrosslink title="Innehålstittel" titlevariant="medium">
                    <ListCrosslink title="Betalningsguide" href="#"/>
                    <ListCrosslink title="Därfor väljer du If" href="#"/>
                    <ListCrosslink title="Säkerhetsbutikken" href="#"/>
                    <ListCrosslink title="Tryggare vardag" href="#"/>
                    <ListCrosslink title="Inför pensionen" href="#"/>
                    </ListColumnCrosslink>
                    <ListColumnCrosslink title="Innehålstittel" titlevariant="medium">
                    <ListCrosslink title="Betalningsguide" href="#"/>
                    <ListCrosslink title="Därfor väljer du If" href="#"/>
                    <ListCrosslink title="Säkerhetsbutikken" href="#"/>
                    <ListCrosslink title="Tryggare vardag" href="#"/>
                    <ListCrosslink title="Inför pensionen" href="#"/>
                    </ListColumnCrosslink>
        
                    <ListColumnCrosslink title="Innehålstittel" titlevariant="medium">
                    <ListCrosslink title="Betalningsguide" href="#"/>
                    <ListCrosslink title="Därfor väljer du If" href="#"/>
                    <ListCrosslink title="Säkerhetsbutikken" href="#"/>
                    <ListCrosslink title="Tryggare vardag" href="#"/>
                    <ListCrosslink title="Inför pensionen" href="#"/>
                    </ListColumnCrosslink>
                    <ListColumnCrosslink title="Innehålstittel" titlevariant="medium">
                    <ListCrosslink title="Betalningsguide" href="#"/>
                    <ListCrosslink title="Därfor väljer du If" href="#"/>
                    <ListCrosslink title="Säkerhetsbutikken" href="#"/>
                    <ListCrosslink title="Tryggare vardag" href="#"/>
                    <ListCrosslink title="Inför pensionen" href="#"/>
                    </ListColumnCrosslink>

            </ListColumCrosslinkContainer>    
            </Container>
        </Block>
    );
}

export default CrosslinkSection;