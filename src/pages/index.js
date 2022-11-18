import * as React from "react"
import Header from "../header/header"
import {main} from "./index.module.css"
import "../style/main.css"
import Section from "../sections/section"
import colaborate from "../images/work.jpg"
import administration from "../images/administration.png"
import commandepublic from "../images/public.jpg"
import urbanism from "../images/plan.jpg"
import construction from "../images/construct.jpg"
import {accompagne, expertise, figurecontainer, engagement} from "../sections/section.module.css"
import Footer from "../footer/footer.js"
import {mainheader} from "../header/header.module.css"


const IndexPage = () => {
  return (
    <main className={main}>
      <Header margintop={"20"} className={mainheader}>
        <h1>HELTA AVOCAT</h1>
        <h2>AVOCAT EN DROIT PUBLIC DES AFFAIRES </h2>
      </Header>
      <Section className={accompagne}>
        <h2>Helta Avocat</h2>
        <p>Le Cabinet Helta Avocat accompagne l’ensemble des acteurs de l’aménagement 
          et de la construction tant pour le conseil juridique que pour l’assistance lors d’expertises et de négociations ou pour le contentieux.</p>
        <img src={colaborate} alt="colaborate" />
      </Section>
      <Section className={expertise}>
        <h3>Nos domaines d’expertise</h3>
        <p>Le Cabinet Helta Avocat est un cabinet spécialisé en droit public des affaires (droit administratif, droit de la commande publique, 
          droit de l’urbanisme et de l’aménagement). 
        </p>  
        <p>Le Cabinet intervient également en droit privé, principalement en droit de la construction.</p> 
        
      <div className={figurecontainer}>
          <figure>
            <img src={administration} alt="administration" />
            <figcaption>Droit administratif</figcaption>
          </figure>
          <figure>
            <img src={commandepublic} alt="commandepublic" />
            <figcaption>Droit de la commande publique</figcaption>
          </figure>
          <figure>
            <img src={urbanism} alt="urbanisme" />
            <figcaption>Droit de l'urbanisme et de l'aménagement</figcaption>
          </figure>
          <figure>
            <img src={construction} alt="construction" />
            <figcaption>Droit de la construction</figcaption>
          </figure>
          

      </div>
      </Section>

      <Section className={engagement}>
          <h2>Nos engagements</h2>
          <ul>
            <li> expertise / comptence </li>
            <li> réactivité / disponiblité </li>
            <li> transparence  </li>
            <li> écoute </li>
            <li> Partenaire de confiance </li>
          </ul>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat dignissimos tenetur 
            nemo aut distinctio minima, similique exer
            citationem maiores rerum
             eligendi! Adipisci reiciendis deleniti unde cupiditate fuga, pariatur quaerat dignissimos voluptas?</p>
      </Section>
      <Footer></Footer>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
