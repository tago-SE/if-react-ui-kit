import React from 'react';

/*
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";

// core components

import buttonStyle from "assets/jss/material-kit-react/components/buttonStyle.js";

const makeComponentStyles = makeStyles(() => ({
  ...buttonStyle
}));

const RegularButton = React.forwardRef((props, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    ...rest
  } = props;

  const classes = makeComponentStyles();

  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className
  });
  return (
    <Button {...rest} ref={ref} className={btnClasses}>
      {children}
    </Button>
  );
});

RegularButton.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "facebook",
    "twitter",
    "google",
    "github",
    "transparent"
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

export default RegularButton;

*/
interface IProps {
  className?: string, 
  onKeyPress?: any,
  onClick?: any, 
  [x: string]: any
}

export const IFButton: React.FC<IProps>= ({
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
    <button onKeyPress={handleKeyPress} onClick={handleClick} type="button" className={`if ${className}`} {...props}>
      {props.children}
    </button>
  );
};

interface IChildProp {
  className?: string, 
  children?: any,
  [x: string]: any
}

export const IFButtonPrimary: React.FC<IChildProp>= ({
  className = "",
  children = null,
...props
}) => (
  <IFButton className={`button primary ${className}`} {...props}>
    {children}
  </IFButton>
);

export const IFButtonPrimaryCTA: React.FC<IChildProp>= ({
  className = "",
  children = null,
...props
}) => (
  <IFButton className={`button primary large ${className}`} {...props}>
    {children}
  </IFButton>
);

export const IFButtonSecondary: React.FC<IChildProp>= ({
  className = "",
  children = null,
...props
}) => (
  <IFButton className={`button secondary ${className}`} {...props}>
    {children}
  </IFButton>
);

export const IFButtonTertiary: React.FC<IChildProp>= ({
  className = "",
  children = null,
...props
}) => (
  <IFButton className={`button tertiary ${className}`} {...props}>
    {children}
  </IFButton>
);

export const IFButtonInfo: React.FC<IChildProp>= ({
  className = "",
  children = null,
...props
}) => (
  <IFButton className={`button info ${className}`} {...props}>
    {children}
  </IFButton>
);

export default IFButton;
