import React, { useState } from 'react';
import {mainnavbar, secondnavbar} from "./navbar.module.css"
import Navlink from './navlink';
import Nouscontacter from '../nouscontacter';


// const cabinetItems = ['Axel Bertrand', 'Helene Saunois']

const Navbar = ({main}) => {
    
    const [navclicked, setNavClicked] = useState(0)
    const [closeNav, setCloseNav] = useState(0)

    return (
        <div className={main ? mainnavbar: secondnavbar}>
            <Navlink main={main} id={1} navclicked={[navclicked, setNavClicked]} to="/" > Acceuil </Navlink>
            <Navlink main={main} id={2}  navclicked={[navclicked, setNavClicked]} to="/cabinet" items={["corine", "michel", "jean"]}>Le Cabinet</Navlink>
            <Navlink main={main} id={3} navclicked={[navclicked, setNavClicked]}  to="/competences">Competences</Navlink>
            <Navlink main={main} id={4} navclicked={[navclicked, setNavClicked]}  to="/honoraires">Honoraires</Navlink>
            <Navlink main={main} id={5} navclicked={[navclicked, setNavClicked]}  to="/contact">Contact</Navlink>
            
        </div>
    );
};

export default Navbar;