import React, { ReactElement } from 'react';
import styled from 'styled-components';


/*
  TODO: https://www.w3schools.com/css/css_tooltip.asp Add arrow?
*/

const TooltipStyleWrapper = styled.div<{width: string, fadeInTime: string, dottedUnderline: string}>`

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
        color: #faf9f7;
        background-color: #3d2719;
        visibility: hidden;
    
        width: ${props => props.width};
        margin: 0;
        padding: 5px 10px;
        border-radius: 4px;
    
        // Tooltip fade-in
        opacity: 0;
        transition: opacity ${props => props.fadeInTime};
    
        // Tooltip posiiton
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
    }
    &:hover .tooltip-text {  
        visibility: visible;
        opacity: 1.0; 
    }
  
`

interface IProps {
    children: ReactElement,
    position: "top" | "left" | "right" | "bottom";
    fadeInTime?: Number,
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
    position,
}) => {
    return (
        <TooltipStyleWrapper width={width} fadeInTime={fadeInTime + "s"} dottedUnderline={underline ? "1px dotted black" : ""}>
            <p className={`tooltip-text ${position}`}>{text}</p>
            {children}
        </TooltipStyleWrapper>
    );
}

export default Tooltip;