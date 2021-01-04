import React from 'react';


export interface IModal {
    title: string,
    closeableTitle?: boolean,
    meta: { id?: string, description: string}
    [x: string]: any
}
export const Modal: React.FC<IModal>= ({
    title,
    closableTitle = true,
    meta,
    ...props
}) => {
    const [hidden, setHidden] = React.useState(false);

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
                <header className="if title" id="modal-title">
                    {title}
                    {closableTitle ? (
                        <button type="button" className="if close" aria-label="Close modal" onClick={handleClose} onKeyPress={handleClose}/>
                    ) : null}
                    <span className="if axe sr-only" id="modal-description">{meta.description}</span>
                </header>
                <div className="if content">
                    <p className="if">
                    Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. God creates
                    dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. What do they got
                    in there? King Kong? Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!
                    </p>

                    <p className="if">
                    Hey, you know how I'm, like, always trying to save the planet? Here's my chance. They're using our own
                    satellites against us. And the clock is ticking. God help us, we're in the hands of engineers. They're using
                    our own satellites against us. And the clock is ticking.
                    </p>
                        <a className="if external-link" target="_blank" rel="noopener noreferrer" href="https://google.com">An external link</a>
                        <a className="if external-link" target="_blank" rel="noopener noreferrer" href="https://google.com">An external link</a>
                </div>
            </div>
        </>
        
    );
}


export default Modal;