import React from 'react'

import {Link} from 'react-router-dom'
import  style from  './Card.module.css';
//este componente mostrara cada tarjeta


//image,platforms,rating,released
function Card({id,name,image,genres}) {
//let  genre = genres.map((g) =>g );
 
  return (
    <div className={style.cardContainer}>
       
         
            <Link to={`/videogames/${id}`}>
            <img className='' src={image} alt='not found' width="300px" height="200px" /> 
            </Link>
            <div className=''><h3>{name}</h3></div>
             <h5 className=''><span>Generos</span> <br /><span>{genres.join(" | ")}</span></h5> 
      <div>
      
      </div>
    </div>
  )
}

export default Card
