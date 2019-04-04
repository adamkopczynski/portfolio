import React from 'react';

const Button = (props) => {
    const{
        to,
        children,
        color,
        border,
        ...rest
    } = props;

    return(
        <a 
            href={to} 
            role="button"
            className="custom-btn"
            {...rest}>
            <span>
                {children}
            </span>
        </a>
    )
}

export default Button;