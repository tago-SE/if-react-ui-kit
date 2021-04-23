import React from 'react';
import { HorizontalLoader, ILoaderProps } from '../Loader';

export type ButtonSizeOptions = 'large' | '';
export type ButtonVariantOption = 'primary' | 'secondary' | 'info' | 'tertiary';
export type ButtonTypeOption = 'button' | 'submit' | 'reset';

export interface IButtonProps {
    children: React.ReactNode,
    className?: string,
    disabled?: boolean,
    type?: ButtonTypeOption,
    style?: React.CSSProperties,
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    size?: ButtonSizeOptions,
    variant?: ButtonVariantOption,
    loading?: boolean,
    hovered?: boolean,
    loadingProps?: ILoaderProps,
    [x: string]: any
}

export function Button({ 
    variant = "primary",
    type = "button",
    className,
    size,
    disabled, 
    children, 
    onClick, 
    loading,
    hovered,
    loadingProps,
    style,
    ...props 
} : IButtonProps ) {
    return (
        <button  
            className={`if button ${variant}${size ? " " + size : ""}${hovered ? " is-hovered" : ""}${className ? " " + className : ""}`}
            disabled={disabled} 
            aria-disabled={disabled}
            aria-busy={loading}
            type={type}
            onClick={onClick} 
            style={style}
            {...props}
        >
            {loading ? (
                <HorizontalLoader isLoading={loading} color="white" {...loadingProps} /> 
            ) : 
                children
            }
      </button>
    );
}

export function PrimaryButton({ 
    children, 
    variant="primary",
    loadingProps = { color: "white" }, 
    ...props 
} : IButtonProps) {
    return (
        <Button
            variant={variant}
            loadingProps={loadingProps}
            children={children}
            {...props}
        />
    );
}

export function SecondaryButton({ 
    children, 
    variant="secondary",
    loadingProps = { color: "blue" }, 
    ...props 
} : IButtonProps) {
    return (
        <Button
            variant={variant}
            loadingProps={loadingProps}
            children={children}
            {...props}
        />
    );
}

export function TertiaryButton({ 
    children, 
    variant="tertiary",
    loadingProps = { color: "blue" }, 
    ...props 
} : IButtonProps) {
    return (
        <Button
            variant={variant}
            loadingProps={loadingProps}
            children={children}
            {...props}
        />
    );
}

export function InfoButton({ 
    children, 
    variant="info",
    loadingProps = { color: "white" },
    ...props 
} : IButtonProps) {
    return (
       <Button
            variant={variant}
            loadingProps={loadingProps}
            children={children}
            {...props}
        />
    );
}