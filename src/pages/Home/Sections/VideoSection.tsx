import ReactPlayer from 'react-player';

import { Container, Block } from '../../../components/If-Design-System/Container';
import { Heading } from '../../../components/If-Design-System/Heading';

// import { VideoControl, VideoContainer } from '../../../components/If-Design-System/Video/Control';

import VideoModal from '../../../components/If-Design-System/Modal/VideoModal';

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

            <VideoModal title="Why If" isOpen={true} />

            <p>
                .
                . 
                Hero
            </p>
            <section className="if split">
            <div className="if container">
              <div className="if content">
                <h1 className="if heading medium">
                  Drulleförsäkringen
                </h1>
                <p className="if text body">
                  Allriskförsäkring, drulleförsäkring eller otursförsäkring – oavsett vad du kallar det så är det en
                  försäkring som hjälper dig när du haft lite otur och till exempel välter kaffekoppen över datorn eller
                  tappar solglasögonen i havet.
                </p>
                <a href="/asdasd" className="if standalone">Läs mer om vår drulleförsäkring</a>
              </div>
              <div className="if image live">
                <div className="if video">
                  <video src="https://www.dreambroker.com/channel/qtauayyk/v8ukrs97/get/fullhd.mp4" preload="auto" poster="https://v.imgi.no/cxb3sdbcsn-MOODBOARD/2042">
                    Sorry, your browser doesn't support embedded videos, but don't worry, you can
                    <a href="https://archive.org/details/BigBuckBunny_124">download it</a>
                    and watch it with your favorite video player!
                  </video>
                  <div className="if overlay">
                    <span className="if title">If Villaförsäkring</span>
                    <span className="if description">Se hur If Villaförsäkring förändrade Anna’s vardag</span>
                    <button type="button" className="if play button secondary">
                      Spela up filmen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="if hero">
            <div className="if container">
              <div className="if content">
                <h1 className="if heading medium">
                  Drulleförsäkringen
                </h1>
                <p className="if text body">
                  Allriskförsäkring, drulleförsäkring eller otursförsäkring – oavsett vad du kallar det så är det en
                  försäkring som hjälper dig när du haft lite otur och till exempel välter kaffekoppen över datorn eller
                  tappar solglasögonen i havet.
                </p>
                <a href="/asdasd" className="if standalone">Läs mer om vår drulleförsäkring</a>
              </div>
              <div className="if image live">
                <div className="if video">
                  <iframe className="if yt-player" id="yt-player-1" 
                    style={{width: "100%", height: "100%"}} frameBorder="0" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="640" height="360" src="https://www.youtube.com/embed/-5V0RWaERSU?controls=0&amp;showinfo=0&amp;ecver=2&amp;rel=0&amp;iv_load_policy=3&amp;autoplay=0&amp;loop=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fdesign.if.eu&amp;widgetid=1"></iframe>
                  <div className="if overlay">
                    <span className="if title">If Villaförsäkring</span>
                    <span className="if description">Se hur If Villaförsäkring förändrade Anna’s vardag</span>
                    <button type="button" className="if play button secondary">
                      Spela up filmen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

            {/* <Container>
                <ReactPlayer 
                    className="if player"
                    url={"https://www.youtube.com/watch?v=frWd8FnwK7U&feature=emb_title"}
                    playing={false}
                    preload={false}
                    controls={true}
                    height="100%"
                    width="100%"
                />
            </Container> */}
        </Block>
    );
}

export default VideoSection;