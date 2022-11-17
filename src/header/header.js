import * as React from 'react';
import Navbar from './navbar';
import {classheader} from "./header.module.css"
import Title from './title';


const header = () => {

    return (
        <div className={classheader}>
            <Navbar></Navbar>
            <Title></Title>
        </div>
    );
};

export default header;