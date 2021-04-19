import React from 'react';
import "./NavBar.css";
import "./About.css";
import {Link} from 'react-router-dom';
import icon_home from "./assets/icon_home.png"

function NavBar(){

  return(
      <section className ="navBar">
          <Link className ="navLink" to = "/">
            <p>Home</p>
          </Link>

          <Link className ="navLink" to = "/sobre">
            <p>Sobre/Contato</p>
          </Link>

          <Link className ="navLink" to = "/habilidades">
            <p>Habilidades/Cursos</p>
          </Link>

      </section>
  );
}

export default NavBar;