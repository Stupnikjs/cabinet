import React from 'react';
// import {classnavbar} from "./navbar.module.css"
import { Link } from 'gatsby';
import "../style/navbar.css"

const navbar = () => {
    return (
        <div className="classnavbar">
            <Link to="/" className='link'>ACCEUIL</Link>
            <Link to="/cabinet" className='link'>LE CABINET</Link>
            <Link to="/competences" className='link'>COMPÉTENCES</Link>
            <Link to="/honnoraires" className='link'>HONORAIRES</Link>
            <Link to="/contact" className='link'>CONTACT</Link>
            <Link to="#">Nous contacter</Link>
        </div>
    );
};

export default navbar;