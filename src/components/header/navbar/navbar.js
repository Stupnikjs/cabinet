import React from 'react';
import {mainnavbar, secondnavbar} from "./navbar.module.css"
import Navlink from './navlink';
import Nouscontacter from './nouscontacter';


// const cabinetItems = ['Axel Bertrand', 'Helene Saunois']

const navbar = ({main}) => {
    

    return (
        <div className={main ? mainnavbar: secondnavbar}>
            <Navlink to="/" >Acceuil</Navlink>
            <Navlink to="/cabinet" items={["corine", "michel", "jean"]}>Le Cabinet</Navlink>
            <Navlink to="/competences">Competences</Navlink>
            <Navlink to="/honoraires">Honoraires</Navlink>
            <Navlink to="/contact">Contact</Navlink>
            <Nouscontacter></Nouscontacter>
        </div>
    );
};

export default navbar;