import * as React from 'react';
import Navbar from './navbar/navbar'; 
import Title from './title';
import {mtop10, mtop20} from "./title.module.css"; 
import {backicon, nobackicon} from "./header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'gatsby';

const Header = ({main, children, className, margintop}) => {
    console.log(main)
    return (
        <header className={className}>
            <Link to={"/"}><FontAwesomeIcon className={ main? nobackicon: backicon} icon={faDoorOpen}/></Link>
            <Navbar main={main}></Navbar>
            <Title className={margintop === "20" ? mtop20: mtop10}>{children}</Title>
        </header>
    );
};

export default Header;