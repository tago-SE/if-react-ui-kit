import React from 'react';

export interface IYouTube {
    videoId: string,
    metaTitle: string,
    poster?: { image?: string, title?: string, description?: string }
}


export const YouTubeOriginal = ({  
    videoId,
    metaTitle,
    poster = {},
}: IYouTube) => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    return (
        <div className="if image live" >
            <div className="if video">
                <iframe
                    className="if yt-player"
                    style={{width: "100%", height: "100%"}}
                    title={metaTitle}
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
                    {poster.title && <h6 className="if hero-title large">{poster?.title}</h6>}
                    {poster.description && <p className="if description">{poster?.description}</p>}
                    <button type="button" className="if play button secondary"  onClick={() => {
                            setIsPlaying(isPlaying ? false : true);
                        }}> 
                        Play
                    </button>
                </div>
            </div>
        </div>
    );
}

export default YouTubeOriginal;