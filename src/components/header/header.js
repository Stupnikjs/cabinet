import * as React from 'react';
import Navbar from './navbar/navbar'; 
import Title from './title';
import {mtop10, mtop20} from "./title.module.css"; 



const Header = ({children, className, margintop}) => {
    
    return (
        <header className={className}>
            <Navbar></Navbar>
            <Title className={margintop === "20" ? mtop20: mtop10}>{children}</Title>
        </header>
    );
};

export default Header;