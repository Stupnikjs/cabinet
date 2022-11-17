import * as React from 'react';
import {classcabinet} from "./cabinet.module.css"
import Header from "../header/header"
import {cabinetheader} from "../header/header.module.css"

const cabinet = () => {
    return (
        <main  className={classcabinet}>
            <Header  className={cabinetheader}><h1>Le Cabinet</h1></Header>
        </main>
    );
};

export default cabinet;