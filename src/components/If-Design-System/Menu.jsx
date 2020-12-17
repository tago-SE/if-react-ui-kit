import React from 'react';

// Not Implemented features: 
//
// - Use `aria-posinset` to indicate which position in the set the menu item is.
// - Use `aria-expanded` on menu items that are expandable/have a menu.
// - Use `aria-labelledby` / `aria-label` on sub menus.

export const IFMenuList = ({
    isOpen=false, 
    className="",
    role="", 
    ...props
}) => {
    return (<ul className={`if ${className} ${(isOpen ? "is-open" : "")}`} role={role} {...props}>
        {props.children}
    </ul>);
};

export const IFMenuListItem = ({
    isParent=false, 
    isActive=false, 
    isOpen=false, 
    className="", 
    role="", 
    ...props
}) => {
    return (<li className={`if ${className} ${(isParent ? "is-parent" : "")} ${(isOpen ? "is-open" : "")} ${(isActive ? "is-active" : "")}`} role={role} {...props}>
        {props.children}
    </li>);
};

export const IFMenuContainer = ({
    isParent=false, 
    isOpen=false, 
    className="",
    role="", 
    ...props
}) => {
    return (<div className={`if ${className} ${(isParent ? "is-parent" : "")} ${(isOpen ? "is-open" : "")}`} role={role} {...props}>
        {props.children}
    </div>);
};

export const IFSubMenuItem = ({
    labelText="undefined",
    className="", 
    onClick=null, 
    isActive=false, 
    isOpen=false,    
    buttonClassName="", 
    iconSpan=null,
    menuClassName="menu", 
    menuListClassName="",
    ...props
}) => {
    const handleClick = (e) => {
        if (onClick) onClick(e);
    };
    return (
        <IFMenuListItem className={className} isParent={true} isActive={isActive} isOpen={isOpen} >
            <button type="button" className={`if ${buttonClassName}`} onClick={handleClick} role="menuitem">  {/* This role is not sure */}
                {iconSpan}
                {labelText}
            </button>
            <IFMenuContainer className={menuClassName} isOpen={isOpen || isActive}>
                <IFMenuList className={menuListClassName} isOpen={isOpen}>
                    {props.children}
                </IFMenuList>
            </IFMenuContainer>
        </IFMenuListItem>
    );
};
