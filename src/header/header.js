import * as React from 'react';
import Navbar from './navbar'; 
import Title from './title';
import {mtop10, mtop20} from "./title.module.css"


const Header = ({children, className, margintop}) => {
    
    return (
        <div className={className}>
            <Navbar></Navbar>
            <Title className={margintop === "20" ? mtop20: mtop10}>{children}</Title>
        </div>
    );
};

export default Header;