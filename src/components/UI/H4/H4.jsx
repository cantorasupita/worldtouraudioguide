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
        <h4 
            style={{ 
                textAlign: textAlign || 'center',
                fontSize: fontSize || '20px',
                fontWeight: fontWeight || 600,
                margin: margin || 'auto',
                marginBottom: marginBottom || '40px',
                ...otherProps
            }}>
                {children}
        </h4>
    )
}

export default H3;


