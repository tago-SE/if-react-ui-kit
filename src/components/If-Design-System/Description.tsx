import React, { ReactNode } from 'react';

export const IFDescription: React.FC<{label: string, children?: ReactNode}>= (props) => {
    return (<div className="if description">
      <strong className="if">{props.label}</strong>
      {props.children}
    </div>);
};