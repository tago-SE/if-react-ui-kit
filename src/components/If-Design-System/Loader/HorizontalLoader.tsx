import React from 'react';
import s from './horizontal-loader.module.scss';

const colors = {
  white: "#faf9f7",
  blue: "#0054f0",
  brown: "#331e11",
}

export interface ILoaderProps {
  isLoading?: boolean,
  size?: "small" | "large" | "largest",
  color?: "white" | "blue" | "brown",
  [x: string]: any
}

export const HorizontalLoader: React.FC<ILoaderProps> = ({
  isLoading = true,
  size = "small",
  color = "brown",
  ...props
}) => {
  if (!isLoading) return null;
  const fillColor = colors[color];
  return (
    <svg
      className={`if loader dots horizontal ${size} ${s.center}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      {...props}>
      <g className="if svg g">
        <circle className="if svg circle" fill={fillColor} cx="8" cy="32" r="8" />
        <circle className="if svg circle" fill={fillColor} cx="32" cy="32" r="8" />
        <circle className="if svg circle" fill={fillColor} cx="56" cy="32" r="8" />
      </g>
    </svg>
  );
}

export default HorizontalLoader;
