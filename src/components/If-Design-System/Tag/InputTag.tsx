import React from 'react';
import { IDefaultTagProps } from './index';

interface IInputTagProps extends IDefaultTagProps {

}

export const InputTag: React.FC<IInputTagProps> = ({
    name,
    id,
    small = false,
    ...props
}) => {
    return (
        <li key={id || name}>
            <button type="button" className={`if tag input${small ? " small" : ""}`} {...props} >{name}</button>
        </li>
    );
}