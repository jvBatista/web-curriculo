import React from 'react';
import "./App.css";
import "./About.css";
import ItemListavel from "./ItemListavel";
import SocialCard from "./SocialCard";
import NavBar from './NavBar';
import icon_insta from "./assets/icon_insta.png"
import icon_email from "./assets/icon_email.png"

function About(){

  return(
    <div className="batPage">
      <NavBar />
      <section className="batProfile">
        <h1 className="batTitle">PERFIL</h1>
        <div className="batProfileText">
            Sou estudante do curso de Engenharia de Software na UnB, 
            tenho prática no desenvolvimento e design de videogames e 
            anos de experiência em ilustração digital. Me considero uma pessoa metódica, 
            não me contento com trabalhos ou resultados medíocres e busco a excelência no 
            meu trabalho, dentro das minhas limitações.
        </div>
      </section>

      <section className="batFormaçao">
        <h1 className="batTitle">FORMAÇÃO ACADÊMICA</h1>
        <ul className="batList">
            <li><ItemListavel title = "Ensino Médio" place = "Colégio Militar de Brasília" date="2019"/></li>
            <li><ItemListavel title = "Curso de Engenharia de Software" place = "UnB - Universidade de Brasília" 
            date="2019 - Presente"/></li>
        </ul>
        
      </section>

      <section className="batSocial">
        <h1 className="batTitle">REDES SOCIAIS</h1>
        <div className="batSocialCards">
          <SocialCard name = "jvtexbat@hotmail.com" img = {icon_email}/>
          <SocialCard name = "@jv_batizta" link ="https://instagram.com/jv_batizta" img = {icon_insta}/>
          <SocialCard name = "@batizta.art" link ="https://instagram.com/batizta.art" img = {icon_insta}/>
        </div>   
      </section>
    </div>
  );
}

export default About;