import React from 'react';

import { Main } from '../../components/If-Design-System/Main';
// import VideoSection from './Sections/VideoSection';
import TeaserSection from './Sections/TeaserSection';
import CrosslinkSection from './Sections/CrosslinkSection';
import ArticleSection from './Sections/ArticleSection';
import {MockCharts} from '../../components/Charts/MockCharts';
import './react-responsive-modal-styles.css';



/**
 * Working video just needs fix with centering the video...
 */
// const Video = () => {
//   const [isPlaying, setIsPlaying] = React.useState(false);
//   return (
//     <div className="if image live">
//       <div className="if video"
//         style={{
//           position: "relative",
//           paddingBottom: "56.25%" /* 16:9 */,
//           paddingTop: 25,
//           height: 0
//         }}
//       >
//       <iframe
//         title="this is a unique title"
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%"
//         }}
//         src={`https://www.youtube.com/embed/${"uuWWZXm8pdA"}?autoplay=${ isPlaying ? 1 : 0}`}
//         frameBorder={0}
//         allowFullScreen={true}
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//       />
//       <div className="if overlay" style={{
//         backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url('https://v.imgi.no/cxb3sdbcsn-MOODBOARD/2042?auto=compress&cs=tinysrgb&h=350')",
//         backgroundPosition: 'center',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         visibility: (isPlaying ? "hidden" : "visible"),
//       }}>
//         <span className="if title">SBAB Featured App</span>
//         <span className="if description">See how SBAB used our APIs to integrate</span>
//         <button type="button" className="if play button secondary"  onClick={() => {
//             setIsPlaying(isPlaying ? false : true);
//         }}> 
//           Play
//         </button>
//       </div>
//     </div>
//   </div>
//   );
// }

// import YouTube from 'react-youtube';
//
// const Video = () => {
//   const [isPlaying, setIsPlaying] = React.useState(false);
//   // const opts = {
//   //   height: '390',
//   //   width: '640',
//   //   playerVars: {
//   //     // https://developers.google.com/youtube/player_parameters
//   //     autoplay: 1,
//   //   },
//   // };

//   // const onReady = () => {
//   //   alert("on ready");
//   // }

//   // const onEnd = () => {
//   //   alert("video ended");
//   // }

//   return (
//     <div className="if image live">
//     <div className="if video"
//       style={{
//         position: "relative",
//         paddingBottom: "56.25%" /* 16:9 */,
//         paddingTop: 25,
//         height: 0
//       }}
//     >
    
//       // onReady={() => onReady()}
//       // onEnd={() => onEnd()}
//       />
//     <div className="if overlay" style={{
//       backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url('https://v.imgi.no/cxb3sdbcsn-MOODBOARD/2042?auto=compress&cs=tinysrgb&h=350')",
//       backgroundPosition: 'center',
//       backgroundSize: 'cover',
//       backgroundRepeat: 'no-repeat',
//       visibility: (isPlaying ? "hidden" : "visible"),
//     }}>
//       <span className="if title">SBAB Featured App</span>
//       <span className="if description">See how SBAB used our APIs to integrate</span>
//       <button type="button" className="if play button secondary"  onClick={() => {
//           setIsPlaying(isPlaying ? false : true);
//       }}> 
//         Play
//       </button>
//     </div>




//       {/* <YouTube 
//         videoId="lhG6lDwWTaA" 
//         className="if player" 
//         opts={{ 
//           width: "100%", 
//           height: "100%"
//         }} 
//         onReady={() => onReady()}
//         onEnd={() => onEnd()}
  
//         /> */}
//       {/* <ReactPlayer 
//         className="if player"
//         url="https://www.youtube.com/watch?v=lhG6lDwWTaA"
//         height="100%"
//         width="100%"
//         playing={false}
//         preload={true}
//         controls={true}
//         light="url('https://v.imgi.no/cxb3sdbcsn-MOODBOARD/2042')"
//       /> */}

//       {/* {isPlaying ? null : (<>
//         <div className="if overlay" style={{
//           backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url('https://v.imgi.no/cxb3sdbcsn-MOODBOARD/2042?auto=compress&cs=tinysrgb&h=350')",
//           backgroundPosition: 'center',
//           backgroundSize: 'cover',
//           backgroundRepeat: 'no-repeat'
//         }}>
//           <span className="if title">SBAB Featured App</span>
//           <span className="if description">See how SBAB used our APIs to integrate</span>
//           <button type="button" className="if play button secondary"  onClick={() => {
//               setIsPlaying(isPlaying ? false : true);
//             }}> 
//             Play
//           </button>
//         </div>
//       </>)} */}
        
//       {/* <div className="if overlay" style={{
//         backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url('https://v.imgi.no/cxb3sdbcsn-MOODBOARD/2042?auto=compress&cs=tinysrgb&h=350')",
//         backgroundPosition: 'center',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         visibility: (isPlaying ? "hidden" : "visible"),
//       }}>
//         <span className="if title">SBAB Featured App</span>
//         <span className="if description">See how SBAB used our APIs to integrate</span>
//         <button type="button" className="if play button secondary"  onClick={() => {
//             setIsPlaying(isPlaying ? false : true);
//         }}> 
//           Play
//         </button>
//       </div> */}

//     </div>
//   </div>
//   );
// }


const HomePage = () => {
    return (
     <Main>
        <MockCharts />
       {/* <VideoSection /> */}
       {/* <ArticleSection />
       <CrosslinkSection />
       <TeaserSection /> */}
      
    </Main>
    );
}

export default HomePage;