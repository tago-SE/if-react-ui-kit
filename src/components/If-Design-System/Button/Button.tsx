import React from 'react';

import { HorizontalLoader } from '../Loader';

/**
 * TODO: 
 * - Add round button shape
 * - Add more size variation
 * - Add different color configurations
 */


interface IProps {
  disabled?: boolean,
  className?: string, 
  onKeyPress?: any,
  onClick?: any, 
  [x: string]: any
}

export const ButtonWrapper: React.FC<IProps>= ({
  disabled = false,
  className = "",
  onKeyPress = null,
  onClick = null, 
  ...props
}) => {

  const handleKeyPress = (e: any) => {
    if (onKeyPress) {
      onKeyPress(e);
    }
  };

  const handleClick = (e: any) => {
    if (onClick) {
      onClick(e);
    }
  };
  
  return (
    <button onKeyPress={handleKeyPress} onClick={handleClick} disabled={disabled} type="button" className={className} {...props}>
      {props.children}
    </button>
  );
};

interface IButton {
  
  styleType?: "primary" | "secondary" | "tertiary" | "info";
  size?: "large",
  loading?: boolean, 
  disabled?: boolean,
  onKeyPress?: any,
  onClick?: any, 
  [x: string]: any
}

const styleLoadColors  = {
  primary: "white",
  secondary: "blue",
  tertiary: "blue",
  info: "white",
} as const;

export const Button : React.FC<IButton> = ({
  styleType = "primary",
  size = "",
  loading = false,
  disabled = false,
  onKeyPress = null,
  onClick = null, 
  ...props
}) => {
 
  return (
    <ButtonWrapper className={`if button ${styleType} ${size}`} disabled={disabled} onKeyPress={onKeyPress} onClick={onClick} {...props}>
      <HorizontalLoader isLoading={loading} size="small" color={styleLoadColors[styleType]} /> 
      {props.children}
    </ButtonWrapper>
  );
};

interface IIconButtonProps {
  icon: string,
  size?: "large",
  disabled?: boolean,
  onKeyPress?: any,
  onClick?: any, 
  [x: string]: any
}

export const IconButton : React.FC<IIconButtonProps> = ({
  icon,
  size = "",
  disabled = false,
  onKeyPress = null,
  onClick = null, 
  ...props
}) => {
  return (
    <ButtonWrapper className={`if button icon ${icon} ${size} ${disabled ? "disabled" : ""}`} disabled={disabled} onKeyPress={onKeyPress} onClick={onClick} {...props}>
      {props.children}
    </ButtonWrapper>
  );
}

export default Button;
