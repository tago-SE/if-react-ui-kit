import React, { useState } from 'react';
import ReactPlayer from 'react-player'

interface IProps {
  url: string,            // video url
  preload?: boolean,      // preload if possible
  controls?: boolean,     // show video controls
  posterUrl?: string,        // video cover when paused
  coverTitle?: string,         
  coverDescription?: string,   
  playButtonTooltip?: string,
  className?: string,
  children?: any, 
  [x: string]: any
};

enum VideoState {
  NotStarted = "",
  Paused = "is-paused",
  Playing = "is-active",
}

/*
 <div className="if video is-paused">
            <video className="if player" poster="https://v.imgi.no/cxb3sdbcsn-MOODBOARD/2042" src="https://www.dreambroker.com/channel/qtauayyk/v8ukrs97/get/fullhd.mp4" aria-labelledby="video-0-title">Sorry, your browser doesn't support embedded videos, but don't worry, you can <a href="https://archive.org/details/BigBuckBunny_124">download it</a> and watch it with your favorite video player!</video>
            <div className="if overlay">
              <span className="if title" id="video-0-title">If Villaförsäkring</span> <span className="if description">Se hur If Villaförsäkring förändrade Anna’s vardag</span> <button className="if play button secondary" type="button">Spela up filmen</button>
            </div>
          </div>
          */
export const VideoContent : React.FC<IProps> = ({
  url,
  preload=false,
  controls=true,
  posterUrl="",
  coverTitle="",
  coverDescription="",
  playButtonTooltip="Play",
}) => {

  const [state, setState] = useState(VideoState.NotStarted);

  const  isPlaying = () => state === VideoState.Playing;

  const hasStarted = () => state !== VideoState.NotStarted;

  const pause = () => {
    setState(VideoState.Paused);
  }

  const resume = () => {
    setState(VideoState.Playing);
  }

  const togglePlay = () => {
    if (isPlaying()) {
      pause();
    } else {
      resume(); 
    }
  }

  
  if (ReactPlayer.canPlay(url)) {
    return (
      <div className="if image live">
          <div className={`if video ${state}`}>
            {/* {isPlaying() || hasNoPoster() ? ( */}
            <ReactPlayer 
              url={url}
              playing={isPlaying()}
              preload={preload}
              height="100%"
              width="100%"
              controls={controls && hasStarted()}
              poster={`url(${posterUrl})`}
          
            />
            {!hasStarted() ? (
              <span className="if image lifestyle" style={{height:"100%", width: "100%"}}>
                <img src="https://www.if.no/magasinet/images/2020/04/av1-in-group-work-1560x900.jpg" alt="video-poster" className="if " style={{height:"100%", width: "100%"}}/>
              </span>
             
            ) : null}
            <div className="if overlay">
                <span className="if title">{coverTitle}</span>
                <span className="if description">{coverDescription}</span>
                <button type="button" className="if play button primary" onClick={togglePlay}>{playButtonTooltip}</button>
              </div>
          </div>
      </div>
    );
  } 
  else {
    return (
      <>
        Something went wrong when loading the video or your browser cannot play the video...
      </>
    );
  }
}
