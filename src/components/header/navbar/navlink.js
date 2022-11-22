import React, { useState } from 'react';
import { Link } from 'gatsby';
import {divLink, classnavlink, hovered, nothovered} from './navlink.module.css'


const Navlink = ({to, children, items}) => {

    const [classDivLink, setClassDivLink] = useState(nothovered)


    const hoverHandler = (e) => {
        e.preventDefault()
        setClassDivLink(hovered)
    }

    const mouseOutHandler = (e) => {
        e.preventDefault()
        setClassDivLink(nothovered)
    }

    return (
        <div  onMouseOver={hoverHandler}  onMouseOut={mouseOutHandler} className={divLink} >
            <Link to={to}  className={classnavlink} >{children !== undefined ? children.toUpperCase():""}</Link>
            <div className={classDivLink}>
                {classDivLink === hovered ? 
                        items !== undefined ? items.map((element) =>{ return <p>{element}</p> }): "" 
                        : ""}
            </div>
        </div>
    );
};

export default Navlink;