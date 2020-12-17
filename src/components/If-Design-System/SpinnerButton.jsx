import React from 'react';
import IFLoader from './Loader';
import IFButton from './Button';

export const IFButtonSpinner = ({ children=null, className, isLoading = true, color = 'blue', ...props }) => (
  <IFButton className={`button ${className} ${isLoading ? 'is-loading' : ''}`} {...props}>
    <IFLoader isLoading={isLoading} color={color} className="small" /> 
    {children}
  </IFButton>
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