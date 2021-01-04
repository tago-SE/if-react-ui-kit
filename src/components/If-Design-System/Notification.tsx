import React from 'react';

const notificationTypes = ["success", "warning", "error", "info"];
const defaultType = "info";
const notificationHeadingSize = ["smallest", "smaller", "small", "large", "larger", "largest"];
const defaultHeadingSize = "smallest";

interface IProps {
    type: string,
    title?: string,
    titleSize: string, 
    link: any, 
    onClick?: any, 
    dissmisable?: boolean,
    dissmisableTooltip?: string, 
    [x: string]: any
};
  export const IFNotification : React.FC<IProps> = ({
    type = defaultType,
    title = "",
    titleSize = defaultHeadingSize, 
    link = null, 
    onClick = null, 
    dissmisable = false,
    dissmisableTooltip = "Close", 
    ...props
  }) => {

    const handleClick = (e: any) => {
        if (onClick) {
            onClick(e);
        }
    };  

    return (
        <div className={`if notification ${notificationTypes.includes(type) ? type : defaultType}`}>
            {(title.length > 0) ? (
                <span className={`if heading ${notificationHeadingSize.includes(titleSize) ? titleSize : defaultHeadingSize}`}>{title}</span>
            ) : null }
            <p>{props.children}</p>
            {link} {/* Expected className of link: class="if standalone"> */}
            { dissmisable ? (<button onClick={handleClick} type="button" className="if close"><span className="if axe sr-only">{dissmisableTooltip}</span></button>) : null }
        </div>
    );
};

export const IFInfoNotification = ({title="", titleSize=defaultType, link=null, dissmisable=true, dissmisableTooltip="Close", ...props}) => {
    return (<IFNotification type="info" title={title} titleSize={titleSize} link={link} dissmisable={dissmisable} dissmisableTooltip={dissmisableTooltip} {...props}>{props.children}</IFNotification>);
};

export const IFSuccessNotification = ({title="", titleSize=defaultType, link=null, dissmisable=true, dissmisableTooltip="Close", ...props}) => {
    return (<IFNotification type="success" title={title} titleSize={titleSize} link={link} dissmisable={dissmisable} dissmisableTooltip={dissmisableTooltip} {...props}>{props.children}</IFNotification>);
};

export const IFWarningNotification  = ({title="", titleSize=defaultType, link=null, dissmisable=true, dissmisableTooltip="Close", ...props}) => {
    return (<IFNotification type="warning" title={title} titleSize={titleSize} link={link} dissmisable={dissmisable} dissmisableTooltip={dissmisableTooltip} {...props}>{props.children}</IFNotification>);
};

export const IFErrorNotification  = ({title="", titleSize=defaultType, link=null, dissmisable=true, dissmisableTooltip="Close", ...props}) => {
    return (<IFNotification type="error" title={title} titleSize={titleSize} link={link} dissmisable={dissmisable} dissmisableTooltip={dissmisableTooltip} {...props}>{props.children}</IFNotification>);
};

export default IFNotification;
