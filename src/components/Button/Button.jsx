import React from 'react';

const Button = (props) => {
    const{
        to,
        children,
        color,
        border,
        className,
        ...rest
    } = props;

    return(
        <a 
            href={to} 
            role="button"
            className={`custom-btn ${className ? className : ''}`}
            {...rest}>
            <span>
                {children}
            </span>
        </a>
    )
}

export default Button;