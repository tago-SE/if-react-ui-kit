// import React from 'react';

import { Block, Container } from '../../components/If-Design-System/Container';
import { Content } from '../../components/If-Design-System/Content';
import { VideoContent } from '../../components/If-Design-System/Video';

export const CareerPage = () => {
    return (
        <Block>
            <Container>
                <p>
                    Hello
                </p>
            
                {/*<Content>
                 <Heading size="medium" rank={3}>Why If?</Heading>
                    <p className="if text body">
                    Insurance is a vital part of a well-functioning and evolving society. We make sure our customers are correctly insured and feel confident enough to face risks and build for the future.
                    When something happens, we help them rebuild and recover. We are there both at defining moments and for everyday matters. Our actions today have a big impact on our customers' future lives and businesses.
                    </p>  
                    <a href="/asdasd" className="if standalone">Läs mer om vår drulleförsäkring</a>
                </Content> */}
                <Content>
                    <VideoContent 
                        url="https://www.dreambroker.com/channel/qtauayyk/v8ukrs97/get/fullhd.mp4" 
                        posterUrl="https://v.imgi.no/cxb3sdbcsn-MOODBOARD/2042"
                        coverTitle="If Drulleförsäkring"
                        coverDescription="Se hur If Drulleförsäkring förändrade Anna's vardag"
                        />
                </Content>
                
           
            </Container>
        </Block>
    );  
}

export default CareerPage;

