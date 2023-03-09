import React from 'react'
import {Link} from 'react-router-dom'
import style from '../Landing/Landing.module.css'
function LandingPage() {
  return (
 
         <div className={style.landing_container}>
            <h4 className={style.title_landing}>Bienvenido a la Api Videogames</h4>
           <div  className={style.subtitle_landing}>
            ¡A través de esta aplicación SPA,podrá buscar videojuegos existentes o crear uno! 

               
            <Link to = '/home' className={style.buton_container}>
                <button className={style.button_landing}></button>
              </Link>
            </div>
        
          </div>
          )}


export default LandingPage
