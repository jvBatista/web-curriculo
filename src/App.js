import React from 'react';
import "./App.css";
import Home from "./Home";
import About from "./About"
import Habilidades from "./Habilidades"
import portrait from "./assets/portrait.png"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App(){

  return(
    <Router>
      <div className ="app">
        <section className="batHeader">
          <img className = "batProfilePic" src = {portrait} alt = "img_perfil" />
          <h1>João Victor Teixeira Batista</h1>
        </section>
        
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/sobre" component={About}/>
          <Route path="/habilidades" component={Habilidades}/>
        </Switch>
      </div>
    </Router>  
  );
}

export default App;