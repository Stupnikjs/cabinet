import * as React from 'react';
import {
    classcabinet, 
    classphotohelene, 
    helenesection, 
    helenecontainer, 
    helenedescription, 
    photocontainer
} from "./cabinet.module.css"
import Section from '../sections/section';
import Header from "../header/header"
import {cabinetheader} from "../header/header.module.css"
import photohelene from "../images/photohelene.jpg"

const cabinet = () => {
    return (
        <main  className={classcabinet}>
            <Header  className={cabinetheader}><h1>Le Cabinet</h1></Header>
            <Section className={helenesection}>
                <div className={helenecontainer}>
                 
                    <img  className={classphotohelene} src={photohelene} alt="helene" />
                
                    <div className={helenedescription}>
                        <h2>Le Cabinet Helta Avocat a été créé par Maître Hélène Saunois. </h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo magni maxime, recusandae temporibus non commodi est nihil,
                             mollitia ullam aspernatur quaerat. Atque quibusdam eaque necessitatibus corporis repellat id explicabo quisquam?</p>
                    </div>

                </div>
            </Section>
        </main>
    );
};

export default cabinet;