import { Link } from 'gatsby';
import * as React from 'react';
import {mainnouscontacter, secondnouscontacter} from "./nouscontacter.module.css"

const nouscontacter = ({main}) => {
    return (
        <button className={main ? mainnouscontacter:secondnouscontacter }>
            <Link> Nous contacter </Link>
        </button>
    );
};

export default nouscontacter;