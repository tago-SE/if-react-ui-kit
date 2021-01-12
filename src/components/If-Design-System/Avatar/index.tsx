import React from 'react';

interface IPops {
    size?: "small" | "medium" | "large" | "larger" | "largest",
    color?: string,
    imageSrc?: string,
    [x: string]: any,
}

export const Avatar: React.FC<IPops> = ({
    size = "default",
    color = "",
    imageSrc = undefined,
    ...props
}) => {
    // backgroundImage: "url(\"https://giosg-chat-public-eu.s3.amazonaws.com/assets/3516/cqxCP9ieVl9qCO9Rq85fwo21nkaSdd.png\")"}} 
    return (<span 
        className={`if avatar ${"large"}`} 
        style={{ backgroundImage: "url(\"/images/logo/If_Logotype_Blue_RGB.svg\""}} 
        {...props}
    />);
}

export default Avatar;
