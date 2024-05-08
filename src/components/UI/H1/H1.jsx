import React from 'react';



const H1 = (props) => {

    const { 
        children, 
        textAlign, 
        fontSize,
        fontWeight, 
        margin, 
        marginBottom, 
        ...otherProps } = props;

    return (
        <h1 
            style={{ 
                textAlign: textAlign || 'center',
                fontSize: fontSize || '36px',
                fontWeight: fontWeight || 700,
                margin: margin || 'auto',
                marginBottom: marginBottom || '40px',
                lineHeight: '120%',
                ...otherProps
            }}>
                {children}
        </h1>
    )
}

export default H1;


