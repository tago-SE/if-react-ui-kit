// import React, { ReactNode, useContext, useEffect, useState } from 'react';
import React, { useState, useEffect, ReactNode, useContext } from 'react';
// import { useMeasure } from "react-use"; // handles alot of events like scrolling etc
import { useSpring, animated as a } from "react-spring";
import { CSSTransition } from "react-transition-group";
import { GlobalHeaderContext } from './GlobalHeaderContext';
import { createToggleSecondaryMenuItemAction } from './GlobalHeaderReducer';
import './menu.scss';

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
    const duration = 200;
    const [contentHeight, setContentHeight] = useState(0);
    const id = `Desktop-SecondaryItem-${displayName}#${props.key || ""}`;
    const context = useContext(GlobalHeaderContext);
    const currentOpenSecondaryMenuId = context.state.openSecondaryMenuId;
    const isOpen = currentOpenSecondaryMenuId === id;
    const isOtherOpen = !isOpen && currentOpenSecondaryMenuId !== "";

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
      }
      
      const transitionStyles = {
        entering: { opacity: 1 },
        entered:  { opacity: 1 },
        exiting:  { opacity: 0 },
        exited:  { opacity: 0 },
      };


    const springStyle = useSpring({
        config: { duration: duration },
        height: isOpen ? `${contentHeight}px` : `${minHeight}px`,
        paddingBottom: isOpen ? `${40}px` : `${0}px`,
        paddingTop: isOpen ? `${36}px` : `${0}px`,

    });

    useEffect(() => {
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
        return <HiddenDummy id={id} children={children} displayName={displayName} />
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
            <CSSTransition
                 in={isOpen}
                 timeout={2000}
                 unmountOnExit
                 appear
                //  onEntered={this.listSwitch}
                //  onExit={this.listSwitch}
                className={`if tertiary is-open`}
                id={id} 
            >
                {children}
            </CSSTransition>
        </li>
    );
}