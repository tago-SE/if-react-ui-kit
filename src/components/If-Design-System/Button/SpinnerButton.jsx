import React from 'react';
import HorizontalLoader from '../Loader/HorizontalLoader';
import ButtonWrapper from './Button';

export const IFButtonSpinner = ({ children=null, className = "", isLoading = true, color = "white", ...props }) => (
  <ButtonWrapper className={`if button ${className} ${isLoading ? 'is-loading' : ''}`} {...props}>
    <HorizontalLoader isLoading={isLoading} size="small" color={color} /> 
    {children}
  </ButtonWrapper>
);

export const IFButtonSpinnerSecondary = ({ children=null, isLoading = true, ...props }) => (
  <IFButtonSpinner className="secondary" {...props}>
    {children}
  </IFButtonSpinner>
);

export const IFButtonSpinnerPrimary = ({ children=null, isLoading = true, ...props }) => (
  <IFButtonSpinner className="primary" color="white" {...props}>
    {children}
  </IFButtonSpinner>
);
export const IFButtonSpinnerPrimaryCTA = ({ children=null, isLoading = true, ...props }) => (
  <IFButtonSpinner className="primary cta" color="white" {...props}>
    {children}
  </IFButtonSpinner>
);

export const IFButtonSpinnerTertiary = ({ children=null, isLoading = true, ...props }) => (
  <IFButtonSpinner className="tertiary" {...props}>
    {children}
  </IFButtonSpinner>
);

export const IFButtonSpinnerInfo = ({ children=null, isLoading = true, ...props }) => (
  <IFButtonSpinner className="info" color="white" {...props}>
    {children}
  </IFButtonSpinner>
);
export default IFButtonSpinner;