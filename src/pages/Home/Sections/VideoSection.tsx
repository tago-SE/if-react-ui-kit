import ReactPlayer from 'react-player';

import { Container, Block } from '../../../components/If-Design-System/Container';
import { Heading } from '../../../components/If-Design-System/Heading';

import { VideoControl, VideoContainer } from '../../../components/If-Design-System/Video/Control';

export const VideoSection = () => {
    return (

//         <video muted="" title="Our visual identity" className="if player" disablepictureinpicture="" poster="https://www.dreambroker.com/channel/qtauayyk/v8ukrs97/get/poster?etag=1576140475000" 
// preload="none" aria-labelledby="video-0-title" aria-describedby="video-0-transcription-content-title">
//
// <source data-source-type="quality" name="Full HD" label="Full HD (1080p)" quality="1080p" src="https://www.dreambroker.com/channel/qtauayyk/v8ukrs97/get/fullhd.mp4" type="video/mp4">
//     <track label="English" kind="subtitles" srclang="en" src="/videos/captions/vtt/if-design-en.vtt">
//     <track label="Norsk" kind="subtitles" srclang="no" src="/videos/captions/vtt/if-design-no.vtt">
//     <track label="Dansk" kind="subtitles" srclang="dk" src="/videos/captions/vtt/if-design-dk.vtt">
//     <track label="Svenska" kind="subtitles" srclang="se" src="/videos/captions/vtt/if-design-se.vtt">
//     <track label="English" kind="captions" srclang="en" src="/videos/captions/vtt/if-design-captions.en.vtt">
//     <track label="Norsk" kind="captions" srclang="no" src="/videos/captions/vtt/if-design-captions.no.vtt">
    
//     <source data-source-type="quality" name="HD" label="HD (720p)" quality="720p" src="https://www.dreambroker.com/channel/qtauayyk/v8ukrs97/get/hd.mp4" type="video/mp4">
//     <source data-source-type="quality" name="SD" label="SD (480p)" quality="480p" src="https://www.dreambroker.com/channel/qtauayyk/v8ukrs97/get/normal.mp4" type="video/mp4">
//     <source data-source-type="quality" name="Mobile" label="Mobile (240p)" quality="240p" src="https://www.dreambroker.com/channel/qtauayyk/v8ukrs97/get/mobile.mp4" type="video/mp4">
//     Sorry, your browser doesn't support embedded videos, but don't worry, you can
//     <a href="https://www.dreambroker.com/channel/qtauayyk/v8ukrs97/get/fullhd.mp4">download it</a>
//     and watch it with your favorite video player!
//   </video>
        <Block>
            <Heading size="largest">Video</Heading>
            <Container> 
                <ReactPlayer 
                    className="if player"
                    url={"https://www.dreambroker.com/channel/qtauayyk/v8ukrs97/get/fullhd.mp4"}
                    playing={false}
                    preload={false}
                    controls={true}
                    height="100%"
                    width="100%"
                    style={{outline: 'none'}}
                />
            </Container>

            <>
            <div className={`if backdrop${false ? "" : " is-open"}`} aria-hidden={false}
                style={{backgroundColor: 'rgba(11, 11, 11, 0.9)'}}
            />
            <div 
                aria-modal="true" 
                role="dialog" 
                aria-labelledby="modal-title" 
                aria-describedby="modal-description" 
                aria-hidden={false}
                className="if modal"
                style={{backgroundColor: "black"}}
            >
                <header className="if title small" id="modal-title" style={{marginBottom: 0}}>
                    Why If
                    {true ? (
                        <button type="button" className="if close" aria-label="Close modal"/>
                    ) : null}
                    <span className="if axe sr-only" id="modal-description">{"lol"}</span>
                </header>
               
                    <Container style={{height: "98%", width: "98%", backgroundColor: "black"}}> 
                        <ReactPlayer 
                            className="if player"
                            url={"https://www.dreambroker.com/channel/qtauayyk/v8ukrs97/get/fullhd.mp4"}
                            playing={false}
                            preload={false}
                            controls={true}
                            height="100%"
                            width="100%"
                            style={{outline: 'none'}}
                        />
                    </Container>
               
            </div>
        </>
            <Container>
                <ReactPlayer 
                    className="if player"
                    url={"https://www.youtube.com/watch?v=frWd8FnwK7U&feature=emb_title"}
                    playing={false}
                    preload={false}
                    controls={true}
                    height="100%"
                    width="100%"
                />
            </Container>
        </Block>
    );
}

export default VideoSection;