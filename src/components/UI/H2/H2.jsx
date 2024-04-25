import React from 'react';



const H2 = (props) => {

    const { 
        children, 
        textAlign, 
        fontSize,
        fontWeight, 
        margin, 
        marginBottom, 
        ...otherProps } = props;

    return (
        <h2 
            style={{ 
                textAlign: textAlign || 'center',
                fontSize: fontSize || '32px',
                fontWeight: fontWeight || 700,
                margin: margin || 'auto',
                marginBottom: marginBottom || '40px',
                ...otherProps
            }}>
                {children}
        </h2>
    )
}

export default H2;


