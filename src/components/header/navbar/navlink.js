import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import {divLink, classnavlink, dropped,maindropped, notdropped, droplink, dropDownIcon} from './navlink.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navlink = ({main, to, children, items, navclicked, id}) => {

    const [classDivLink, setClassDivLink] = useState(notdropped)
    

    /* coder le cancel du dropdown si dropdown d'un autre  */
    /* quand on click sur le bouton:  
    - check si aucun autre drop est ouvert donc navclick === 0 


    */

    const droppedHandler = (e) => {
        
        e.preventDefault()
        if(classDivLink === notdropped && navclicked[0] === 0) {
            main ? setClassDivLink(maindropped): setClassDivLink(dropped); 
            navclicked[1](id) } 
        if (classDivLink === dropped || classDivLink === maindropped ) {
            setClassDivLink(notdropped); 
            navclicked[1](0)}
    }

    useEffect(() => {
      /* let alreadyDrop = navclicked[0] !== 0 | navid */

    }, [navclicked])

    /* si survol de la div caché onHidden == true */
   

    /* quand fin de survol de la div caché  onHidden == false */


    
  
    return (
        
        <div   className={divLink} >
            <Link to={to}   className={classnavlink} >
                <h2>{children !== undefined ? children.toUpperCase(): ""}</h2>
                <FontAwesomeIcon onClick={droppedHandler} className={dropDownIcon} icon={faChevronDown}></FontAwesomeIcon>
            </Link>
            <div className={classDivLink}>
                {classDivLink === dropped ? 
                        items !== undefined ? items.map((element) =>{ return <Link  className={droplink} to={"#"}>{element}</Link> }): "" 
                        : ""}
            </div>
        </div>
    ) 
};

export default Navlink;