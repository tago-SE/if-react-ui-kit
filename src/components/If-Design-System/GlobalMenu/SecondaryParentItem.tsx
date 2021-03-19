// import React, { ReactNode, useContext, useEffect, useState } from 'react';
import React, { useState, useEffect, ReactNode, useContext } from 'react';

import { useSpring, animated as a } from "react-spring";
import { GlobalHeaderContext } from './GlobalHeaderContext';
import { createToggleSecondaryMenuItemAction } from './GlobalHeaderReducer'
import './menu_spring.scss';


// https://codesandbox.io/s/vqvwpklv15?file=/src/index.js:357-1793

// Example of Notification transition
// https://codesandbox.io/s/m77l2vp00x

// Add Item Animation: 
// https://codesandbox.io/s/00rqyo26kn

interface Props {
    children: ReactNode,
    displayName: React.ReactText,
    [x: string]: any,
}

const HiddenDummy = ({
    children,
    displayName,
    id,
    ...props
} : Props) => {
    const ref = React.useRef<HTMLDivElement>(null);
    useEffect(() => {
        console.log("ref", ref);
    }, [ref])

    return (
        <li className={`if desktop-menu-item is-parent is-active`} key={id} {...props}>
            <button type="button" className="if desktop-menu-action">
                {displayName}
            </button>
            <div
                className={`if tertiary is-open`} style={{opacity: "0"}}
                id={id} 
            >
                {children}
            </div>
        </li>
    );
}

export const SecondaryParentItem = ({
    children,
    displayName,
    ...props
} : Props) => {

    const minHeight = 0;
    const duration = 500;
    const [contentHeight, setContentHeight] = useState(0);
    const id = `Desktop-SecondaryItem-${displayName}#${props.key || ""}`;
    const context = useContext(GlobalHeaderContext);
    const currentOpenSecondaryMenuId = context.state.openSecondaryMenuId;
    const isOpen = currentOpenSecondaryMenuId === id;
    const isOtherOpen = !isOpen && currentOpenSecondaryMenuId !== "";
    const ref = React.useRef(null);
    const [state, setState] = React.useState({ ended: false });

    const springStyle = useSpring({
        config: { duration: duration },
        height: isOpen ? `${contentHeight}px` : `${minHeight}px`,
        paddingBottom: isOpen ? `${40}px` : `${0}px`,
        paddingTop: isOpen ? `${36}px` : `${0}px`,

        onStart: () => {
            setState({ ...state, ended: false });
        },
        onFrame: (f) => {
            if (f.height === `${contentHeight}px`) {
                setState({ ...state, ended: true });
            }
        }
    });

    const style = state.ended ? { height: "auto" } : springStyle;

    React.useLayoutEffect(() => {
        console.log("ref", ref);
    });

    React.useEffect(() => {
        if (contentHeight !== 0) return;
        let tertiaryElement = document.getElementById(id);
        let rect = tertiaryElement.getBoundingClientRect();
        console.log("found height", rect.height);
        setContentHeight(rect.height);
    }, [id, contentHeight])

    const handleClick = () => {
        context.dispatch(createToggleSecondaryMenuItemAction(id));
    }

    // Dummy used to calculate content height
    if (contentHeight === 0) {
        return (
            <li className={`if desktop-menu-item is-parent is-active`} key={id} {...props}>
                <button type="button" className="if desktop-menu-action">
                    {displayName}
                </button>
                <div
                    className={`if tertiary is-open`} style={{opacity: "0"}}
                    id={id} 
                >
                    {children}
                </div>
            </li> 
        );
    }

    if (isOtherOpen) {
        return (
            <li className={`if desktop-menu-item is-parent${isOpen ? " is-active" : ""}`} key={id} {...props}>
                <button type="button" className="if desktop-menu-action" onClick={handleClick}>
                    {displayName}
                </button>
            </li>
        );
    }
    return (
        <li className={`if desktop-menu-item is-parent${isOpen ? " is-active" : ""}`} key={id} {...props}>
            <button type="button" className="if desktop-menu-action" onClick={handleClick}>
                {displayName}
            </button>
            <a.div 
                className={`if tertiary is-open`} 
                style={style}
                id={id} 
            >
                {children}
            </a.div>
        </li>
    );
}