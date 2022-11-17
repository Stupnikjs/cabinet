import * as React from 'react';
import Navbar from './navbar'; 
import Title from './title';



const Header = ({children, className}) => {
    console.log(children)
    return (
        <div className={className}>
            <Navbar></Navbar>
            <Title>{children}</Title>
        </div>
    );
};

export default Header;