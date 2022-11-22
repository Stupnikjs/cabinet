import * as React from 'react';
import {competencesheader} from '../components/header/header.module.css'
import {classcompetences} from './competences.module.css'
import Header from '../components/header/header';

const competences = () => {
    return (
            <main  className={classcompetences}>
                <Header  main={false} className={competencesheader}><h1>Competences</h1></Header>
            </main>
        
    );
};

export default competences;