import React from 'react';
import {classnavbar} from "./navbar.module.css"
import Navlink from './navlink';
import Nouscontacter from './nouscontacter';


const cabinetItems = ['Axel Bertrand', 'Helene Saunois']

const navbar = () => {
    

    return (
        <div className={classnavbar}>
            <Navlink to="/" >Acceuil</Navlink>
            <Navlink to="/cabinet" items={cabinetItems}>Le Cabinet</Navlink>
            <Navlink to="/competences">Competences</Navlink>
            <Navlink to="/honoraires">Honoraires</Navlink>
            <Navlink to="/contact">Contact</Navlink>
            <Navlink></Navlink>
            <Nouscontacter></Nouscontacter>
        </div>
    );
};

export default navbar;