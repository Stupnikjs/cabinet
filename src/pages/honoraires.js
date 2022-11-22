import * as  React from 'react';
import {classhonoraires} from "./honoraires.module.css"
import {honorairesheader} from "../components/header/header.module.css"
import Header from '../components/header/header';
import Section from '../components/sections/section';
import Footer from '../components/footer/footer';

const honoraires = () => {
    return (
        <main  className={classhonoraires}>
        <Header main={false} className={honorairesheader}><h1>Honoraires</h1></Header>
        <Section> <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapient
            e, odit perferendis. Eum voluptate distinctio doloribus quaerat nisi quas hic iure,
             aliquam ut est, dolores fugiat impedit delectus cum</h4> que minus labore?
             </Section>
        <Footer></Footer>
    </main>
    );
};

export default honoraires;