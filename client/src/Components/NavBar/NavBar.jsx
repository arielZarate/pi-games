import React from 'react'
import {Link} from 'react-router-dom'
import style from './NavBar.module.css'
import Search  from '../SearchBar/Search'
import Selectores from '../Selectores/Selectores'

const  NavBar=({ handleRating,handleSort, handleFilterCreated,handleFilterGenre})=>{
 return (
    
       
  <div className={style.navbar_container}>
   
   <Link to="/home"> 
   <button className={style.buton_logo} ></button>
   </Link>
   <Link className={style.buton_crear} to="/videogames">Crear Juego</Link>   
   <div className={style.search}>
    <Search/>
    </div>  
      <Selectores
      handleSort={handleSort}
      handleRating={handleRating}
      handleFilterCreated={handleFilterCreated}
      handleFilterGenre={handleFilterGenre} 
     />

   {/*  <Link className={style.li} to="#">Acerca de la api</Link> */}

   </div>
   
   

  )
}

export default NavBar
