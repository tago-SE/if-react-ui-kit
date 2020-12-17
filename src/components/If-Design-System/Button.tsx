import React from 'react';

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
