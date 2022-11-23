import React from 'react';
import {mainnavbar, secondnavbar} from "./navbar.module.css"
import Navlink from './navlink';
import Nouscontacter from './nouscontacter';


// const cabinetItems = ['Axel Bertrand', 'Helene Saunois']

const navbar = ({main}) => {
    

    return (
        <div className={main ? mainnavbar: secondnavbar}>
            <Navlink main={main} to="/" >Acceuil</Navlink>
            <Navlink main={main}  to="/cabinet" items={["corine", "michel", "jean"]}>Le Cabinet</Navlink>
            <Navlink main={main}  to="/competences">Competences</Navlink>
            <Navlink main={main}  to="/honoraires">Honoraires</Navlink>
            <Navlink main={main}  to="/contact">Contact</Navlink>
            <Nouscontacter></Nouscontacter>
        </div>
    );
};

export default navbar;