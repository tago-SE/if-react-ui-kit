import React from 'react';

export const Main : React.FC<{className?: string, children?: any, role?: string, id?: string, [x: string]: any}> = ({
    className="",
    children=null,
    role="main",
    id="main",
    ...props
}) => (<main className={`if main${(className ? " " + className : "")}`} id={id} role={role} {...props}>
    {children}
</main>);

export const MainApp : React.FC<{className?: string, children?: any, role?: string, id?: string, [x: string]: any}> = ({
    className="app",
    children=null,
    role="main",
    id="main",
    ...props
}) => (<Main className={className} role={role} id={id} {...props}>{children}</Main>);


export default Main;