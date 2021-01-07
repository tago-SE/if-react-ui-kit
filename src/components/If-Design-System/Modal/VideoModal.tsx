import React from 'react';
import ReactPlayer from 'react-player';

export interface IModal {
    title: string,
    isOpen: boolean,
    meta?: { id?: string, description: string}
    [x: string]: any
}
export const VideoModal: React.FC<IModal>= ({
    title,
    isOpen = true,
    meta = { description: ""},
    ...props
}) => {
    const [hidden, setHidden] = React.useState(!isOpen);

    const handleClose = () => {
        setHidden(true);
    }
    
    return (
        <>
            <div className={`if backdrop${hidden ? "" : " is-open"}`} aria-hidden={hidden} />
            <div 
                id={meta?.id}
                aria-modal="true" 
                role="dialog" 
                aria-labelledby="modal-title" 
                aria-describedby="modal-description" 
                aria-hidden={hidden}
                className="if modal"
                {...props}
            >
                <header className="if title small" id="modal-title" style={{marginBottom: 0}}>
                    Why If
                    <button type="button" className="if close" aria-label="Close modal" onClick={handleClose} onKeyPress={handleClose} />
                    <span className="if axe sr-only" id="modal-description">{meta.description}</span>
                </header>
                <div className="if container" style={{height: "98%", width: "98%", backgroundColor: "black"}}> 
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
                </div>
            </div>
        </>
        
    );
}

/*
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
        */


export default VideoModal;