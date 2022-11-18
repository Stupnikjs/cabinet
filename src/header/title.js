import React from 'react';



const title = ({className, children}) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default title;