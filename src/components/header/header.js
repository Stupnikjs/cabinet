import * as React from 'react';
import Navbar from './navbar/navbar'; 
import Title from './title';
import Nouscontacter from './nouscontacter';
import {mtop10, mtop20} from "./title.module.css"; 
import {backicon, nobackicon, navandcontact} from "./header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney} from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'gatsby';

const Header = ({main, children, className, margintop}) => {
    console.log(main)
    return (
        <header className={className}>
            <Link to={"/"}><FontAwesomeIcon className={ main? nobackicon: backicon} icon={faHouseChimney}/></Link>
            <div className={navandcontact}>
                <Navbar main={main}></Navbar>
                <Nouscontacter main={main}></Nouscontacter>
            </div>
            
            <Title className={margintop === "20" ? mtop20: mtop10}>{children}</Title>
        </header>
    );
};

export default Header;