import * as React from 'react';
import Header from '../components/header/header';
import {classcontact} from "./contact.module.css"
import {contactheader} from "../components/header/header.module.css"
import Section from '../components/sections/section';

const contact = () => {
    return (
        <div>
            <main  className={classcontact}>
                <Header  main={false} className={contactheader}><h1>Contact</h1></Header>
                <Section>
                    <div>
                        <h2>
                            <ul>
                                <li>90 rue d'Amsterdam 75009 PARIS</li>
                                <li>09 51 22 73 28 - 06 03 82 19 64</li>
                                <li>helene.saunois@helta-avocat.com</li>
                            </ul>
                        </h2>
                    </div>
                </Section>
            </main>
        
        </div>
    );
};

export default contact;