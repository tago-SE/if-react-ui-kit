import { IFVideoContent } from './Video';
import { IFContent } from './Content';

// Should be able to take Content, Video, Image, and Form as far as I've seen 
// See: https://design.if.eu/components/hero

interface IProps {
    className?: string,
    children?: any, 
    [x: string]: any
  };

export const IFHero : React.FC<IProps> = ({
className="",
children=null,
...props
}) => {
return (<div className={`if content${(className ? " " + className : "")}`} {...props}>{children}</div>);
}