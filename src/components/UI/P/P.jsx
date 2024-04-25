import React from 'react';



const P = (props) => {

    const { 
        children, 
        textAlign, 
        fontSize, 
        margin, 
        marginBottom, 
        ...otherProps } = props;

    return (
        <p 
            style={{ 
                textAlign: textAlign || 'center',
                fontSize: fontSize || '16px',
                margin: margin || 'auto',
                marginBottom: marginBottom || '20px',
                ...otherProps
            }}>
                {children}
        </p>
    )
}

export default P;