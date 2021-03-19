import { ReactNode } from 'react';
import './menu.scss';

interface Props {
    children: ReactNode,
    [x: string]: any,
}

export const SecondaryNavbar = ({children, ...props}: Props) => {
    return (
        <nav className="if secondary" {...props}>
            {children}
        </nav>
    );
}
