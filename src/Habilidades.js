import React from 'react';
import "./Habilidades.css";
import "./App.css";
import ItemListavel from "./ItemListavel";

function About(){

  return(
    <div className="batPage">
      <section className="batHabilities">
        <h1 className="batTitle">HABILIDADES TÉCNICAS</h1>
        <ul className="batList">
          <li>Ilustração e Pintura Digital;</li>
          <li>Programação:</li>
          <ul className="batList">
              <li>C (Intermediário),</li>
              <li>Python (Intermediário),</li>
              <li>Java (Iniciante),</li>
              <li>HTML & CSS (Iniciante);</li>
          </ul>
          <li>Photoshop (Avançado);</li>
          <li>Inglês (Fluente);</li>        
        </ul>
      </section>

      <section className="batCourses">
        <h1 className="batTitle">CURSOS</h1>
        <ul className="batList">
            <li><ItemListavel title = "Pintura Digital" place = "Udemy" date="2017"/></li>
            <li><ItemListavel title = "Programação em Python" place = "Udemy" date="2020"/></li>
            <li><ItemListavel title = "Introdução ao Webdesign" place = "Easycomp" date="2016"/></li>
            <li><ItemListavel title = "Inglês Avançado" place = "CCBEU" date="2016"/></li>
            <li><ItemListavel title = "Inglês Preparação Toefl" place = "Casa Thomas Jefferson" date="2018"/></li>
        </ul>
        
      </section>

    </div>
  );
}

export default About;