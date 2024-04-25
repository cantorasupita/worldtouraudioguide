import React from 'react';



const H3 = (props) => {

    const { 
        children, 
        textAlign, 
        fontSize,
        fontWeight, 
        margin, 
        marginBottom, 
        ...otherProps } = props;

    return (
        <h3 
            style={{ 
                textAlign: textAlign || 'center',
                fontSize: fontSize || '24px',
                fontWeight: fontWeight || 700,
                margin: margin || 'auto',
                marginBottom: marginBottom || '40px',
                ...otherProps
            }}>
                {children}
        </h3>
    )
}

export default H3;


