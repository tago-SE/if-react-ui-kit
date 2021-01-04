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
