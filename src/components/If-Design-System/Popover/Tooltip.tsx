import React, { ReactElement } from 'react';
import styled from 'styled-components';


/*
  TODO: https://www.w3schools.com/css/css_tooltip.asp Add arrow?
*/

const TooltipStyleWrapper = styled.div<{
    width: string, 
    fadeInTime: string, 
    dottedUnderline: string,
    backgroundColor: string,
    fontColor: string,
}>`
    position: relative;
    display: inline-block;
    border-bottom: ${props => props.dottedUnderline};
    
    .tooltip-text {
        font-family: If Sans,Arial,sans-serif;
        font-weight: 400;
        font-size: .875rem;
        line-height: 1.5rem;
        letter-spacing: normal;
        font-variation-settings: "wght" 85;
        white-space: normal;
        text-align: center;
        color: ${props => props.fontColor};
        background-color: ${props => props.backgroundColor};
    
        width: ${props => props.width};
        margin: 0;
        padding: 5px 10px;
        border-radius: 4px;
    
        // Tooltip position
        position: absolute;
        z-index: 1;
        &.right {  
            top: -5px;
            left: 105%;
        }
        &.left {  
            top: -5px;
            right: 105%;
        }
        &.top {  
            bottom: 105%;
            left: 50%;
            margin-left: -50%; 
        }
        &.bottom {  
            top: 105%;
            left: 50%;
            margin-left: -50%; 
        }
        &.hoverable-tooltip {
            visibility: hidden;
            opacity: 0.0;
            transition: opacity ${props => props.fadeInTime};
        }
        &.is-closed {
            visibility: hidden;
        }
    }
    &:hover .hoverable-tooltip {  
        visibility: visible;
        opacity: 1.0; 
    }  
`

interface IProps {
    children: ReactElement,
    position: "top" | "left" | "right" | "bottom";
    fadeInTime?: Number,
    hoverable?: boolean,
    isVisible?: boolean,        // Flag for showing or hiding the tooltip when autoOpen is not used.
    backgroundColor?: string,
    fontColor?: string,
    width?: string,
    text?: string,
    underline?: boolean,
    
}
  
export const Tooltip: React.FC<IProps>= ({
    children = null,
    text = undefined,
    width = "auto",
    fadeInTime = 0.6,
    underline = false,
    backgroundColor = "#3d2719",
    fontColor = "#faf9f7",
    hoverable = true,
    isVisible = true,
    position,
}) => {
    const state = hoverable ? "hoverable-tooltip" : ( isVisible ? "is-open" : "is-closed");
    return (
        <TooltipStyleWrapper 
            width={width} 
            fadeInTime={fadeInTime + "s"} 
            dottedUnderline={underline ? "1px dotted black" : ""}
            backgroundColor={backgroundColor}
            fontColor={fontColor}
        >
            <p className={`tooltip-text ${position} ${state}`}>{text}</p>
            {children}
        </TooltipStyleWrapper>
    );
}

export default Tooltip;