import React from 'react';
import './style.scss';




const H1 = (props) => {

    const { 
        children, 
        textAlign, 
        fontSize,
        fontWeight, 
        margin, 
        marginBottom, 
        marginTop,
        ...otherProps } = props;

    return (
        <h1 
            style={{ 
                textAlign: textAlign || 'center',
                fontSize: fontSize || '36px',
                fontWeight: fontWeight || 700,
                margin: margin || 'auto',
                marginBottom: marginBottom || '40px',
                marginTop: marginTop || '40px',
                lineHeight: '120%',
                ...otherProps
            }}
            className={'h1-media'}>
                {children}
        </h1>
    )
}

export default H1;


