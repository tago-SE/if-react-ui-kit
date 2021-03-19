import React, { useState } from 'react'
import styled from 'styled-components';

const StyledNav = styled.nav<{focusColor?: string}>`
    & ul.if {
        & li.if {
            & a.if {
                &:hover {
                    color: ${props => props.focusColor};
                }
            }
        }   
    }
`

interface IMenuItemChildProps {
    name: string, 
    key?: number,
    href?: string, 
    icon?: string,
    [x: string]: any
}

export interface IListMenuItemProps extends IMenuItemChildProps{
    list?: Array<IListMenuItemProps>,
    onClick?: any,
    isOpen?: boolean,
}

interface IListMenuItemWrapperProps extends IListMenuItemProps {
    navigationLevel?: number,  
}

const MenuItemChild: React.FC<IMenuItemChildProps> = ({
    name = "",
    href = "#",
    icon = null,
    ...props
}) => { 
    return (
        <li className="if" {...props}>
            <a tabIndex={-1} role="menuitem" href={href} className="if">
                {icon && <span className={`if icon ${icon}`}></span>}
                {name}
            </a>
        </li>
    );
}

const ListMenuItemWrapper: React.FC<IListMenuItemWrapperProps> = ({
    name = "",
    key = "",
    href = "#",
    icon = null,
    list = [],
    isOpen = false,
    onClick = null,
    navigationLevel = 0,
    ...props
}) => {

    const hasChildren = list.length > 0;
    const [open, toggleOpen] = useState(isOpen);

    if (!hasChildren) {
        return (<MenuItemChild name={name} href={href} icon={icon || ""}/>);
    }    

    const handleClick = () => {
        toggleOpen(open ? false : true);
        if (onClick) onClick();
    }
    
    return (
        <li className={`if${navigationLevel === 0 ? " is-parent" : ""}${open ? " is-active" : ""}`} {...props}>
            {href && (
                <a tabIndex={-1} role="menuitem" href={href} className="if" onClick={handleClick}>
                    {icon && <span className={`if icon ${icon}`}></span>}
                    {name}
                </a>
            )}
            {hasChildren && open && (
                <div className={`if menu${open ? " is-open" : ""}`}>
                    <ul className={`if${open ? " is-open" : ""}`}>
                        {list.map( (item: IListMenuItemProps, index) => <>
                            <ListMenuItemWrapper 
                                navigationLevel={navigationLevel + 1} 
                                key={index}
                                {...item}
                            />
                        </>)}
                    </ul>
                </div>
            )}
        </li>
    );
}

export const ListMenuItem: React.FC<IListMenuItemProps> = ({
    onClick = null,
    name = "",
    href = "#",  
    icon = "",
    key = "",
    isOpen = false,
    list = [],
    ...props
}) => (<ListMenuItemWrapper onClick={onClick} isOpen={isOpen} name={name} href={href} icon={icon} list={list} navigationLevel={0} {...props}/>);

interface IListMenuProps {
    focusColor?: string,
    [x: string]: any
}

export const ListMenu: React.FC<IListMenuProps> = ({
    focusColor = "",
    ...props
}) => {

    const handleClick = () => {
        alert("parent clicked");
    }

    return (
        <StyledNav className="if menu list" focusColor={focusColor} role="menu" {...props}>
            <ul className="if">
                {React.Children.map(props.children, child => {
                    if (React.isValidElement(child)) {
                        console.log("name:", child.props.name);
                        return React.cloneElement(child, {onClick: handleClick, navigationLevel: 1});
                    }
                    console.log("props", child);
                    return child;
                })}
            </ul>
        </StyledNav>
    );
}