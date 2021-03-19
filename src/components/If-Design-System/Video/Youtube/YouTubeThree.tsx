import React from 'react';
import ReactPlayer from 'react-player';
import './youtube.css';
import { HorizontalLoader } from '../../../If-Design-System/Loader';

export interface IYouTube {
    videoId: string,
    metaTitle: string,
    poster?: { image?: string, title?: string, description?: string }
}

enum VideoState {
    Unused,
    Initializing,
    Error,
    Playing,
    Paused,
    Ended,
}

export const YouTubeThree = ({  
    videoId,
    poster = {},

}: IYouTube) => {
    const [state, setState] = React.useState(VideoState.Unused);
    const getState = () => {
        switch (state) {
            case VideoState.Initializing: return "init";
            case VideoState.Error: return "error";
            case VideoState.Playing: return "playing";
            case VideoState.Paused: return "paused";
            case VideoState.Ended: return "ended";
            default: return "";
        }
    }
    
    const isPlayFlagSet = () => {
        return state === VideoState.Initializing || state === VideoState.Playing;
    }

    const handleError = () => {
        setState(VideoState.Error)
    }

    const handleStart = () => {
        setState(VideoState.Playing)
    }

    const handleEnd = () => {
        setState(VideoState.Ended);
    }

    const handleProgress = (progress: {playedSeconds: Number}) => {
        if (state === VideoState.Initializing && progress.playedSeconds > 0.0) {
            setState(VideoState.Playing);
        }
    }

    const button = (
        <button type="button" className="if play button secondary"  
        onClick={() => {
            setState(VideoState.Initializing)
        }}
        >
            <span className="if ui icon play"/>
        </button>
    );

    const loader = (<HorizontalLoader color="blue" size="large" />);


    return (
        <div className="if image live"   style={{
            position: "relative",
            paddingBottom: "56.25%" /* 16:9 */,
            paddingTop: 25,
            height: 0
        }}>
            <div className={`youtube ${getState()}`}>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videoId}`}
                    className="react-player"
                    width="100%"
                    height="100%"
                    controls={true}
                    playing={isPlayFlagSet()}
                    onEnded={handleEnd}
                    onError={handleError}
                    onStart={handleStart}
                    onProgress={(progress) => handleProgress(progress)}
                />
                <div className="overlay"
                    style={{
                        backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url('${poster?.image}')`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    {/* {poster.title && <h6 className="if heading medium">{poster?.title}</h6>}
                    {poster.description && <p className="if lead text">{poster?.description}</p>} */}
                    {state === VideoState.Initializing ? loader : button}
                </div>
            </div>
        </div>
    );
}

export default YouTubeThree;