import React from 'react';



const LayoutPage = (props) => {

    const { 
        marginBottom, 
        ...otherProps } = props;

    return (
        <section 
            style={{ 
                ...otherProps
            }}>
                {children}
        </section>
    )
}

export default LayoutPage;
