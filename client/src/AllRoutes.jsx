import Home from "./Views/Home/Home";
import LandingPage from "./Views/Landing/LandingPage";
import Detail from "./Views/Detail/Detail";
import ShowForm from "./Views/ShowForm/ShowForm";
import {  Route } from "react-router-dom";



import React from "react";

function AllRoutes() {

//let ruta= useLocation();


  return (
    <div>
     {/*  {ruta.pathname=== "/home"  && <NavBar/>}   */}
       <Route exact path="/" component={LandingPage} /> 
      <Route exact path="/videogames" component={ShowForm} />
      <Route exact path="/videogames/:id" component={Detail} />
      <Route exact path="/home" component={Home} />
      {/* comodin  cualquier url erronea al landind page*/}
       
     </div>
  );
}

export default AllRoutes;

