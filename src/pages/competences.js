import * as React from 'react';
import {competencesheader} from '../header/header.module.css'
import {classcompetences} from './competences.module.css'
import Header from '../header/header';

const competences = () => {
    return (
            <main  className={classcompetences}>
                <Header  className={competencesheader}><h1>Competences</h1></Header>
            </main>
        
    );
};

export default competences;