import React from 'react';
import './style.scss'


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
                ...otherProps,
            }}
            className={'h2-media'}
            >
                {children}
        </h2>
    )
}

export default H2;


