import React from 'react';
import {classtitle} from "./title.module.css"


const title = ({children}) => {
    return (
        <div className={classtitle}>
            {children}
        </div>
    );
};

export default title;