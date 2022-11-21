import { Link } from 'gatsby';
import * as React from 'react';
import {classnouscontacter} from "./nouscontacter.module.css"

const nouscontacter = () => {
    return (
        <button className={classnouscontacter}>
            <Link> Nous contacter </Link>
        </button>
    );
};

export default nouscontacter;