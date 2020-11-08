import React from "react";
import {BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom"
import Contato from './components/Contato';
import Sobre from './components/Sobre';
import Inicio from './components/Inicio';

function App() {
  return (
    <Router>
       <div className="container mt-5">
         <div className="btn-group">
           <Link to="/" className="btn btn-dark">Início</Link>
           <Link to="/sobre" className="btn btn-dark">Sobre</Link>
           <NavLink to="/contato" className="btn btn-dark" activeClassName="active">Contato</NavLink>
         </div>
         <h1>Navbar...</h1>
         <hr/>
         <Switch>
            <Route path="/" exact><Inicio/></Route> 
            <Route path="/contato"><Contato/></Route>
            <Route path="/sobre"><Sobre/></Route>
         </Switch>
       </div>
    </Router>
   
  );
}

export default App;
