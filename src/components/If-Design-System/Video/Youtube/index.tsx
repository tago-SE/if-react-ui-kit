import React from "react";

export interface IYouTube {
    videoId: string,
    metaTitle: string,
    poster?: { image?: string, title?: string, description?: string }
}


export const YouTube = ({  
    videoId,
    metaTitle,
    poster = {},
}: IYouTube) => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    return (
        <div className="if image live">
            <div className="if video"
                style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    paddingTop: 25,
                    height: 0
                }}
            >
            <iframe
                className="if yt-player"
                title={metaTitle}
                style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
                }}
                src={`https://www.youtube.com/embed/-${videoId}?controls=1&amp;showinfo=0&amp;ecver=2&amp;rel=0&amp;iv_load_policy=3&amp;autoplay=${isPlaying ? "1" : "0"}&amp;loop=0&amp;enablejsapi=1&amp;`}
                frameBorder={0}
                allowFullScreen={true}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                
            />
            <div className="if overlay" style={{
                backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url('${poster?.image}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                visibility: (isPlaying ? "hidden" : "visible"),
            }}>
                {poster.title && <span className="if title">{poster?.title}</span>}
                {poster.description && <span className="if description">{poster?.description}</span>}
                <button type="button" className="play-button"  onClick={() => {
                        setIsPlaying(isPlaying ? false : true);
                    }}> 
                    Play
                </button>
            </div>
            </div>
        </div>
    );
}

export default YouTube;