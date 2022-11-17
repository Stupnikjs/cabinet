import React from 'react';
// import {classnavbar} from "./navbar.module.css"
import { Link } from 'gatsby';
import "../style/navbar.css"

const navbar = () => {
    return (
        <div className="classnavbar">
            <Link className='link'>ACCEUIL</Link>
            <Link className='link'>LE CABINET</Link>
            <Link className='link'>COMPÉTENCES</Link>
            <Link className='link'>HONORAIRES</Link>
            <Link className='link'>CONTACT</Link>
            <Link >Nous contacter</Link>
        </div>
    );
};

export default navbar;