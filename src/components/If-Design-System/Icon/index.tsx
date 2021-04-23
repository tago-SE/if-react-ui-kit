import React from 'react';

export interface IIconProps {
    identifier?: string, 
    className?: string,
    color?: '' | 'blue' | 'white' | 'brown' | 'disabled' | 'black',
    size?: 'largest' | 'large' | 'medium' | 'small' | 'smallest',
    style?: React.CSSProperties,
    [x: string]: any,
}

const DefaultSizes = {
    largest: "32px", 
    large: "28px", 
    medium: "24px", 
    small: "20px", 
    smallest: "16px",
}

/**
 * Icon component from the if-design-system. Input id should include the icon <category> and <name> reference. 
 * You can customize the dimensions outside the default sizes by overriding the style props: height, width and backgroundSize. 
 * 
 * @param id The category and name reference defined by the if-design-system, e.g "products car"
 * @param className This will overide the default className based on the id
 * @param color
 * @param size
 * @param props
 */
export const Icon: React.FC<IIconProps> = ({
    identifier = "",
    className = "",
    color = "",
    size = "largest",
    style = {},
    ...props
}) => {
    return (
        <div 
            className={className ? className : `if icon ${identifier} ${color}`}
            style={{ 
                width: DefaultSizes[size],
                height: DefaultSizes[size],
                backgroundSize: `${DefaultSizes[size]} ${DefaultSizes[size]}`,
                ...style
            }}
            {...props}
        />
    );
}

export default Icon;
