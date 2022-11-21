import * as  React from 'react';
import {classhonoraires} from "./honoraires.module.css"
import {honorairesheader} from "../components/header/header.module.css"
import Header from '../components/header/header';
import Section from '../components/sections/section';
import Footer from '../components/footer/footer';

const honoraires = () => {
    return (
        <main  className={classhonoraires}>
        <Header  className={honorairesheader}><h1>Honoraires</h1></Header>
        <Section></Section>
        <Footer></Footer>
    </main>
    );
};

export default honoraires;