import ReactPlayer from 'react-player';
import { Container, Block } from '../../../components/If-Design-System/Container';
import { Heading } from '../../../components/If-Design-System/Layout/Typography/Heading';
import React from 'react';
import YouTube, { Options as YoutubeOptions } from 'react-youtube';

// import { VideoModal } from '../../../components/If-Design-System/Modal/VideoModal';

import { Split } from '../../../components/If-Design-System/Layout/Split';

import { YouTube as Video } from '../../../components/If-Design-System/Video/Youtube';
import { YouTubeOriginal } from '../../../components/If-Design-System/Video/Youtube/YouTubeOriginal';
import { YouTubeThree } from '../../../components/If-Design-System/Video/Youtube/YouTubeThree';

class VideoSection extends React.Component {

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://ifitservices-my.sharepoint.com/personal/tiago_redaelli_if_se/Documents/Microsoft%20Teams%20Chat%20Files/video.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    // https://www.youtube.com/watch?v=4BUpSPIhhXY&feature=emb_title

    const opts: YoutubeOptions = {
      // height: '390',
      // width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
    
    const videoId = "a62YoUZOGpY";
    const showFirst = true;
    const poster = {image: "https://v.imgi.no/cxb3sdbcsn-MOODBOARD/2042", title: (showFirst ? "First Video" : "Second Video"), description: "See how SBAB used our API products..."};
    
    const getVideo = (index: number) => {
      if (index === 0) return (<YouTubeOriginal videoId={videoId} metaTitle="master-class" poster={poster} />);
      if (index === 1) return (<YouTubeThree videoId={videoId} metaTitle="master-class" poster={poster} />);
      else return (<Video videoId={videoId} metaTitle="master-class" poster={poster} />);
    }

    const SplitVideo = getVideo(1);
    
    
    // <video src="https://www.dreambroker.com/channel/qtauayyk/v8ukrs97/get/fullhd.mp4" preload="auto" poster="https://v.imgi.no/cxb3sdbcsn-MOODBOARD/2042">
    return (<>
     <Block>
        <Container>
          <h1 className="if heading medium">
            Video Standalone
          </h1>
          {SplitVideo}
        </Container>
      </Block>


      <div className="if block" style={{paddingBottom: "0px"}}>
        <div className="if dark split small">
          <Container>
            <div className="if content">
              <h1 className="if heading medium">
                Video Split
              </h1>
              <p className="if text body">
                Allriskförsäkring, drulleförsäkring eller otursförsäkring – oavsett vad du kallar det så är det en
                försäkring som hjälper dig när du haft lite otur och till exempel välter kaffekoppen över datorn eller
                tappar solglasögonen i havet.
              </p>
              <a href="/asdasd" className="if standalone">Läs mer om vår drulleförsäkring</a>
            </div>
            {SplitVideo}
          </Container>
        </div>
      </div>
      <div className="if block" style={{paddingBottom: "0px"}}>
        <div className="if split small reverse">
          <Container>
            <div className="if content">
              <h1 className="if heading medium">
                Video Split
              </h1>
              <p className="if text body">
                Short text.
              </p>
              <a href="/asdasd" className="if standalone">Läs mer om vår drulleförsäkring</a>
            </div>
            {SplitVideo}
          </Container>
        </div>
      </div>
      <div className="if block" style={{paddingBottom: "0px"}}>
        <div className="if split small reverse">
          <Container>
            <div className="if content">
              <h1 className="if heading medium">
                Video Split - Long
              </h1>
              <p className="if text body">
                Allriskförsäkring, drulleförsäkring eller otursförsäkring – oavsett vad du kallar det så är det en
                försäkring som hjälper dig när du haft lite otur och till exempel välter kaffekoppen över datorn eller
                tappar solglasögonen i havet.Allriskförsäkring, drulleförsäkring eller otursförsäkring – oavsett vad du kallar det så är det en
                försäkring som hjälper dig när du haft lite otur och till exempel välter kaffekoppen över datorn eller
                tappar solglasögonen i havet.Allriskförsäkring, drulleförsäkring eller otursförsäkring – oavsett vad du kallar det så är det en
                försäkring som hjälper dig när du haft lite otur och till exempel välter kaffekoppen över datorn eller
                tappar solglasögonen i havet.
              </p>
              <a href="/asdasd" className="if standalone">Läs mer om vår drulleförsäkring</a>
            </div>
            {SplitVideo}
          </Container>
        </div>
      </div>






          <Split 
            content={{ 
              heading: { rank: 2, variant: "medium", children: "Drulleförsäkringen"}, 
              body: (
                <p className="if text body">
                Allriskförsäkring, drulleförsäkring eller otursförsäkring – oavsett vad du kallar det så är det en
                försäkring som hjälper dig när du haft lite otur och till exempel välter kaffekoppen över datorn eller
                tappar solglasögonen i havet.
              </p>
              ), 
              footer: (<a href="/asdasd" className="if standalone">Läs mer om vår drulleförsäkring</a>)
            }} 
            featured={{src: "https://v.imgi.no/cxb3sdbcsn-MOODBOARD/2042", alt: ""}}
          />

          <Block>
            <Container>
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
                      
                      <ReactPlayer 
                        className="if player"
                        url="https://www.youtube.com/watch?v=lhG6lDwWTaA"
                        playing={false}
                        preload={false}
                        controls={true}
                        height="100%"
                        width="100%"
                      />
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
            </Container>
          </Block>

          <Block>
            <Container>
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
                      
                      <ReactPlayer 
                        className="if player"
                        url="https://www.youtube.com/watch?v=lhG6lDwWTaA"
                        playing={false}
                        preload={false}
                        controls={true}
                        height="100%"
                        width="100%"
                      />
                    </div>
                  </div>
                </div>
                </section>
            </Container>
          </Block>


          <div className="if block">
          <div data-speccer="" className="if split small reverse">
            <div className="if container">
              <div className="if content">
                <h2 className="if heading medium">
                  Drulleförsäkringen
                </h2>
                <p className="if text body">
                  Allriskförsäkring, drulleförsäkring eller otursförsäkring – oavsett vad du kallar det så är det en
                  försäkring som hjälper dig när du haft lite otur och till exempel välter kaffekoppen över datorn eller
                  tappar solglasögonen i havet.
                </p>
                <a href="/asdasd" className="if standalone">Läs mer om vår drulleförsäkring</a>
              </div>
              <img
                className={`if image`}
                src="https://v.imgi.no/cxb3sdbcsn-MOODBOARD/2042"
                alt=""
              /> 
            </div>
          </div>
        </div>
        <div className="if block">
          <div data-speccer="" className="if split small reverse">
            <div className="if container">
              <div className="if content">
                <h2 className="if heading medium">
                  Drulleförsäkringen
                </h2>
                <p className="if text body">
                  Allriskförsäkring, drulleförsäkring eller otursförsäkring – oavsett vad du kallar det så är det en
                  försäkring som hjälper dig när du haft lite otur och till exempel välter kaffekoppen över datorn eller
                  tappar solglasögonen i havet.
                </p>
                <a href="/asdasd" className="if standalone">Läs mer om vår drulleförsäkring</a>
              </div>
              <div className="if image live">
                <ReactPlayer 
                  className="if player"
                  url="https://www.youtube.com/watch?v=lhG6lDwWTaA"
                  playing={false}
                  preload={false}
                  controls={true}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
             
          <Block>
            <Container>
              <Heading size="largest">ReactPlayer - Youtube # 1</Heading>
                <ReactPlayer 
                    className="if player"
                   // url={"https://www.youtube.com/watch?v=frWd8FnwK7U&feature=emb_title"}
                    url="https://www.youtube.com/watch?v=lhG6lDwWTaA"
                    playing={false}
                    preload={false}
                    controls={true}
                    height="600px"
                    width="100%"
                />
            </Container>
          </Block>

          <Block>
            <Container>
            <YouTube videoId="lhG6lDwWTaA" opts={opts} />
            </Container>
          </Block>

          <Block>
            <Container>
              <Heading size="largest">ReactPlayer - Youtube # 1</Heading>
                <ReactPlayer 
                    className="if player"
                    url={"https://www.youtube.com/watch?v=frWd8FnwK7U&feature=emb_title"}
                    playing={false}
                    preload={false}
                    controls={true}
                    height="600px"
                    width="100%"
                />
            </Container>
          </Block>

          <Block>
            <Container>
            <Heading size="largest">Default Video # 1</Heading>
          <div className="if image live">
            <div className={`if video`}>
              <video 
                //controls 
                className="if player"
                poster="https://v.imgi.no/cxb3sdbcsn-MOODBOARD/2042"
              >
                <source src="https://www.dreambroker.com/channel/qtauayyk/v8ukrs97/get/fullhd.mp4" type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
              </video> 

              <div className="if overlay">
                <span className="if title">Our visual identity</span>
                <span className="if description">
                  Let us show you our new visual identity
                </span>
                <button className="if play button secondary" type="button">
                  Play
                </button>
              </div>

              <div className="if controls">
                <div className="if volume-control">
                  <button type="button" className="if volume button is-muted">
                    <span className="if description">Volume</span>
                  </button>
                  <input className="if volume js-volume-control" type="range" min="0" max="100" step="1"/>
                </div>
                <div className="if subtitles-control">
                  <button type="button" className="if subtitles button">
                    <span className="if description">Subtitles</span>
                  </button>
                <div className="if menu bottom right"><ul className="if"><li className="if"><button id="if-video-0-subtitles-off" className="if" value="Off" data-state="inactive">Off</button></li><li className="if separator"></li><li className="if"><button id="if-video-0-subtitles-en" className="if" lang="en" value="English" data-state="inactive">English</button></li><li className="if"><button id="if-video-0-subtitles-no" className="if" lang="no" value="Norsk" data-state="inactive">Norsk</button></li><li className="if"><button id="if-video-0-subtitles-dk" className="if" lang="dk" value="Dansk" data-state="inactive">Dansk</button></li><li className="if"><button id="if-video-0-subtitles-se" className="if" lang="se" value="Svenska" data-state="inactive">Svenska</button></li></ul></div></div>
                <div className="if seeker-control">
                  <span className="if js-seeker-time-elapsed"></span>
                  <progress className="if seeker js-seeker-control" value="0" max="100"></progress>
                  <span className="if js-seeker-time-remaining"></span>
                </div>
                <div className="if cc-control">
                  <button type="button" className="if cc button"><span className="if description">Captions</span></button>
                <div className="if menu bottom right"><ul className="if"><li className="if"><button id="if-video-0-captions-off" className="if" value="Off" data-state="inactive">Off</button></li><li className="if separator"></li><li className="if"><button id="if-video-0-captions-en" className="if" lang="en" value="English" data-state="inactive">English</button></li><li className="if"><button id="if-video-0-captions-no" className="if" lang="no" value="Norsk" data-state="inactive">Norsk</button></li></ul></div></div>
                <div className="if quality-control">
                  <button type="button" className="if quality button">
                    <span className="if js-video-quality">Full HD</span><span className="if description">Quality</span>
                  </button>
                  <div className="if menu bottom left">
                    <ul className="if">
                      <li className="if">
                      {/* <button id="if-video-0-quality-1080p" className="if" quality="1080p" data-state="inactive" value="1080p">Full HD (1080p)</button> */}
                      <button id="if-video-0-quality-1080p" className="if" data-state="inactive" value="1080p">Full HD (1080p)</button>
                      </li>
                      <li className="if">
                        <button id="if-video-0-quality-720p" className="if" data-state="inactive" value="720p">HD (720p)</button>
                      </li>
                      <li className="if">
                        <button id="if-video-0-quality-480p" className="if" data-state="inactive" value="480p">SD (480p)</button>
                      </li>
                      <li className="if">
                        <button id="if-video-0-quality-240p" className="if"  data-state="inactive" value="240p">Mobile (240p)</button>
                      </li>
                      <li className="if separator"></li>
                      <li className="if">
                        <button id="if-video-0-quality-automatic" className="if is-active" data-state="active" value="1080p">Automatic (1080p)</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Container>
          </Block>
      
          <Block><Container>
          <Heading size="largest">Default Video # 2 (no poster)</Heading>
          <div className="if image live">
            <div className={`if video`}>
              <video 
                //controls 
                className="if player"
              >
                <source src="https://www.dreambroker.com/channel/qtauayyk/v8ukrs97/get/fullhd.mp4" type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
              </video> 

              <div className="if overlay">
                <span className="if title">Our visual identity</span>
                <span className="if description">
                  Let us show you our new visual identity
                </span>
                <button className="if play button secondary" type="button">
                  Play
                </button>
              </div>

              <div className="if controls">
                <div className="if volume-control">
                  <button type="button" className="if volume button is-muted">
                    <span className="if description">Volume</span>
                  </button>
                  <input className="if volume js-volume-control" type="range" min="0" max="100" step="1"/>
                </div>
                <div className="if subtitles-control">
                  <button type="button" className="if subtitles button">
                    <span className="if description">Subtitles</span>
                  </button>
                <div className="if menu bottom right"><ul className="if"><li className="if"><button id="if-video-1-subtitles-off" className="if" value="Off" data-state="inactive">Off</button></li><li className="if separator"></li><li className="if"><button id="if-video-0-subtitles-en" className="if" lang="en" value="English" data-state="inactive">English</button></li><li className="if"><button id="if-video-0-subtitles-no" className="if" lang="no" value="Norsk" data-state="inactive">Norsk</button></li><li className="if"><button id="if-video-0-subtitles-dk" className="if" lang="dk" value="Dansk" data-state="inactive">Dansk</button></li><li className="if"><button id="if-video-0-subtitles-se" className="if" lang="se" value="Svenska" data-state="inactive">Svenska</button></li></ul></div></div>
                <div className="if seeker-control">
                  <span className="if js-seeker-time-elapsed"></span>
                  <progress className="if seeker js-seeker-control" value="0" max="100"></progress>
                  <span className="if js-seeker-time-remaining"></span>
                </div>
                <div className="if cc-control">
                  <button type="button" className="if cc button"><span className="if description">Captions</span></button>
                <div className="if menu bottom right"><ul className="if"><li className="if"><button id="if-video-1-captions-off" className="if" value="Off" data-state="inactive">Off</button></li><li className="if separator"></li><li className="if"><button id="if-video-0-captions-en" className="if" lang="en" value="English" data-state="inactive">English</button></li><li className="if"><button id="if-video-0-captions-no" className="if" lang="no" value="Norsk" data-state="inactive">Norsk</button></li></ul></div></div>
                <div className="if quality-control">
                  <button type="button" className="if quality button">
                    <span className="if js-video-quality">Full HD</span><span className="if description">Quality</span>
                  </button>
                  <div className="if menu bottom left">
                    <ul className="if">
                      <li className="if">
                      {/* <button id="if-video-0-quality-1080p" className="if" quality="1080p" data-state="inactive" value="1080p">Full HD (1080p)</button> */}
                      <button id="if-video-1-quality-1080p" className="if" data-state="inactive" value="1080p">Full HD (1080p)</button>
                      </li>
                      <li className="if">
                        <button id="if-video-1-quality-720p" className="if" data-state="inactive" value="720p">HD (720p)</button>
                      </li>
                      <li className="if">
                        <button id="if-video-1-quality-480p" className="if" data-state="inactive" value="480p">SD (480p)</button>
                      </li>
                      <li className="if">
                        <button id="if-video-1-quality-240p" className="if"  data-state="inactive" value="240p">Mobile (240p)</button>
                      </li>
                      <li className="if separator"></li>
                      <li className="if">
                        <button id="if-video-1-quality-automatic" className="if is-active" data-state="active" value="1080p">Automatic (1080p)</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Container>
          </Block>

          <Block>
            <Container>
              <Heading size="largest">Default Video #3 (no if controls)</Heading>
              <video 
                controls 
                className="if player"
              >
                <source src="/media/cc0-videos/flower.webm" type="video/webm"/>
                <source src="https://www.dreambroker.com/channel/qtauayyk/v8ukrs97/get/fullhd.mp4" type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
              </video> 
            </Container>
          </Block>

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
            <div className={`if video is-active`}>
              <video 
                controls 
                className="if player"
              >
                <source src="/media/cc0-videos/flower.webm" type="video/webm"/>
                <source src="https://www.dreambroker.com/channel/qtauayyk/v8ukrs97/get/fullhd.mp4" type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
              </video> 
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

      
    </>);
  }
}

export default VideoSection;