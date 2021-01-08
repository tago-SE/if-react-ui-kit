//import './video.css';

import styled from 'styled-components';


const StyledWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;

    position: relative;
    padding: 0;
    margin: 0;
    display: block;
    min-height: 280px;
    margin-left: 24px * -1;
    margin-right: 24px * -1;

    & .if.controls {
        position: absolute;
        display: flex;
        width: auto;
        height: auto;
        left: 0;
        bottom: 0;
        background: "rgba(0,0,0,0.6)",
    }

    /* &.volume.control {
        position: relative;
    } */
`;

const VolumeControl = () => {
    // class="if icon ui volume-mute"
    // ${muted? "volume-mute is-muted" : "sound"}
    return (
        <div className="volume-control">
            <button type="button" className={`if volume button`}>
                <span className="if description">Volume</span>
            </button>
            <input className="if volume js-volume-control" type="range" min="0" max="100" step="1" />
        </div>
    );
}

export const VideoControl = () => {
    return (
        <div className="if controls">
            <VolumeControl></VolumeControl>
            {/*
            <div className="if subtitles-control">
                <button type="button" className="if subtitles button">
                    <span className="if description">Subtitles</span>
                </button>

                 <div className="if menu bottom right">
                    <ul className="if">
                        <li className="if">
                            <button id="if-video-0-subtitles-off" className="if" value="Off" data-state="inactive">Off</button>
                        </li>
                        <li className="if separator"></li>
                        <li className="if">
                            <button id="if-video-0-subtitles-en" className="if" lang="en" value="English" data-state="inactive">English</button>
                        </li>
                        <li className="if"><button id="if-video-0-subtitles-no" className="if" lang="no" value="Norsk" data-state="inactive">
                            Norsk</button>
                        </li>
                        <li className="if">
                            <button id="if-video-0-subtitles-dk" className="if" lang="dk" value="Dansk" data-state="inactive">Dansk</button>
                        </li>
                        <li className="if">
                            <button id="if-video-0-subtitles-se" className="if" lang="se" value="Svenska" data-state="inactive">Svenska</button>
                        </li>
                    </ul>
                    </div>
                </div> */}
            
            <div className="if seeker-control">
                <span className="if js-seeker-time-elapsed">02:08</span>
                {/* <input className="if volume js-volume-control" type="range" min="0" max="100" step="1" /> */}
                <input className="if seeker js-seeker-control" type="range" min="0" max="100" step="1"></input>
                <span className="if js-seeker-time-remaining">-00:00</span>
            </div>

            {/* <div className="if cc-control">
                <button type="button" className="if cc button"><span className="if description">Captions</span></button>
                <div className="if menu bottom right">
                    <ul className="if">
                        <li className="if"><button id="if-video-0-captions-off" className="if" value="Off" data-state="inactive">Off</button></li>
                        <li className="if separator"></li><li className="if"><button id="if-video-0-captions-en" className="if" lang="en" value="English" data-state="inactive">English</button></li>
                        <li className="if"><button id="if-video-0-captions-no" className="if" lang="no" value="Norsk" data-state="inactive">Norsk</button></li>
                    </ul>
                </div>
            </div> */}
            
            {/* <div className="if quality-control">
                <button type="button" className="if quality button">
                    <span className="if js-video-quality">Full HD</span><span className="if description">Quality</span>
                </button>
                <div className="if menu bottom left">
                    <ul className="if">
                        <li className="if"><button id="if-video-0-quality-1080p" className="if" quality="1080p" data-state="inactive" value="1080p">Full HD (1080p)</button></li>
                        <li className="if"><button id="if-video-0-quality-720p" className="if" quality="720p" data-state="inactive" value="720p">HD (720p)</button></li>
                        <li className="if"><button id="if-video-0-quality-480p" className="if" quality="480p" data-state="inactive" value="480p">SD (480p)</button></li>
                        <li className="if"><button id="if-video-0-quality-240p" className="if" quality="240p" data-state="inactive" value="240p">Mobile (240p)</button></li>
                        <li className="if separator"></li>
                        <li className="if"><button id="if-video-0-quality-automatic" className="if is-active" data-state="active" quality="1080p" value="1080p">Automatic (1080p)</button></li>
                    </ul>
                </div>
            </div> */}
        </div>
    );
}

export const VideoContainer = ({...props}) => {
    return (
        <StyledWrapper>
           {props.children}
        </StyledWrapper>
    );
}



export default VideoControl;