import React from 'react';

const section = ({children, className}) => {
    return (
        <section className={className}>
            {children}
        </section>
    );
};

export default section;