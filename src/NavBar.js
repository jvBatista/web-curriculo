import React from 'react';
import "./NavBar.css";
import {Link} from 'react-router-dom';

function NavBar(){

  return(
      <nav className ="navBar">
          <Link className ="navLink" to = "/sobre">
            <div>Sobre</div>
          </Link>

          <Link className ="navLink" to = "/habilidades">
            <div>Habilidades Técnicas</div>
          </Link>

          <Link className ="navLink" to = "/sobre">
            <div>Redes Sociais</div>
          </Link>

      </nav>
  );
}

export default NavBar;