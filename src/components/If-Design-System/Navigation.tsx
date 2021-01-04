import React, { ReactNode } from 'react';

export const IFGlobalHeader: React.FC<{children: ReactNode}>= (props) => {
  return (<header className="if global-header">
    {props.children}
  </header>);
};

export const IFPrimaryNavigation: React.FC<{children: ReactNode}>= (props) => {
  return (<nav className="if primary">
    {props.children}
  </nav>);
};

export const IFSecondaryNavigation: React.FC<{children: ReactNode}>= (props) => {
  return (<nav className="if secondary">
    {props.children}
  </nav>);
};