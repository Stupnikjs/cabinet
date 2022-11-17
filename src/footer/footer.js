import React from 'react';
import {classfooter, footercontainer} from "./footer.module.css"

const footer = () => {
    return (
        <footer className={classfooter}>
                <h1>HELTA AVOCAT</h1>
                <div className={footercontainer}>
                    <div>
                        <h3>A propos</h3>
                        <ul>
                            <li>Acceuil</li>
                            <li>Le Cabinet</li>
                            <li>Compétences </li>
                            <li>Honoraires</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Competences</h3>
                        <ul>
                            <li>Droit administratif</li>
                            <li>Droit de la commande publique </li>
                            <li> Droit de l'urbanisme et de l'aménagement </li>
                            <li>Droit de la construction</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Contact</h3>
                        <ul>
                            <li>09 51 22 73 28</li>
                            <li>06 03 82 19 64</li>
                            <li>helene.saunois@hetla-avocat.com </li>
                        </ul>
                    </div>
                </div>
        </footer>
    );
};

export default footer;