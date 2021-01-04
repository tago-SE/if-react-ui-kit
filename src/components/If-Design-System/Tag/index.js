import React from 'react';

interface IPops {
    name: string,
    size?: "small" | "medium" | "large" | "larger" | "largest",
    color?: string,
    profilePicture?: string,
    [x: string]: any,
}

export const Tag: React.FC<IPops> = ({
    name,
    ...props
}) => {
    
    return (
        <li>
            <a className={`if tag ${passive ? "passive" : ""} ${color}`} onClick={handleClick} {...props}>
                {name}
            </a>
        </li>
    );
}

export default Tag;


// export const Tag = ({ 
//     name="no name", 
//     passive = true, 
//     color = "", 
//     onClick = null, 
//     ...props}) => {
//     const handleClick = (e: any) => {
//         if (onClick) onClick(e);
//     };
//     return (
//         <li className="if">
//             <a className={`if tag ${passive ? "passive" : ""} ${color}`} onClick={handleClick} {...props}>
//                 {name}
//             </a>
//         </li>
//     );  
// };

// export default IFTag;