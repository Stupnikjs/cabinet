import * as  React from 'react';
import {classhonoraires} from "./honoraires.module.css"
import {honorairesheader} from "../header/header.module.css"
import Header from '../header/header';
import Section from '../sections/section';
import Footer from '../footer/footer';

const honoraires = () => {
    return (
        <main  className={classhonoraires}>
        <Header  className={honorairesheader}><h1>Le Cabinet</h1></Header>
        
        <Footer></Footer>
    </main>
    );
};

export default honoraires;