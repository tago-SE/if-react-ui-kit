import React from 'react';

interface IProps {
    position: "top" | "left" | "right" | "bottom";
    onClose: any,
    title?: string,
    text?: string,
    id?: string,
    isOpen?: boolean,
    [x: string]: any    
    
}
  
export const Popover: React.FC<IProps>= ({
    id = "",
    title = "",
    text = undefined,
    position,
    isOpen = true,
    onClose = null,
    ...props
}) => {

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };
    
    return (
        <div 
            id={id}
            className={`if popover ${text ? "" : "small "}${isOpen ? "is-open" : ""} ${position}`}
            aria-hidden={isOpen}
            aria-labelledby={`popover-title-${id}`} 
            aria-describedby={`popover-text-${id}`} 
            {...props}
        >
        <button type="button" className="if close" aria-label="Close popover" onClick={handleClose} onKeyPress={handleClose} />
        <span className="if popover-title" id={`popover-title-${id}`}>{title}</span>
        <span className="if popover-text" id={`popover-text-${id}`}>{text}</span>
      </div>
    );
}

export default Popover;