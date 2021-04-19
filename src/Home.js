import React from 'react';
import NavBar from './NavBar';
import "./App.css";

function Home(){

  return(
    <section>
      <NavBar />
      <div className ="batWellcomeText">
        Seja bem vindo ao meu Web Currículo!
        Aqui você pode descobrir sobre quem eu sou, 
        minhas habilidades técnicas e formação acadêmica
      </div>
    </section>
  );
}

export default Home;