import React from 'react';

export const IFMain : React.FC<{className?: string, children?: any, role?: string, id?: string, [x: string]: any}> = ({
    className="",
    children=null,
    role="main",
    id="main",
    ...props
}) => (<main className={`if main${(className ? " " + className : "")}`} id={id} role={role} {...props}>
    {children}
</main>);

export const IFMainApp : React.FC<{className?: string, children?: any, role?: string, id?: string, [x: string]: any}> = ({
    className="app",
    children=null,
    role="main",
    id="main",
    ...props
}) => (<IFMain className={className} role={role} id={id} {...props}>{children}</IFMain>);


export default IFMain;