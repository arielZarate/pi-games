import React from 'react'

import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { getVideogameName } from '../../Redux/Actions/actions_videogames';
import style from  './searchBar.module.css'
import {ShowNotification} from '../Toast/ShowNotification'
function Search() {


    const dispatch = useDispatch()
    const [name, setName] = useState('')

function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value);
    
}    

function handleSubmit(e){
    e.preventDefault()
    if(!name.length){
        /* alert('Por favor ingresa un juego '); */
         ShowNotification('info','Videogames','Por favor ingresa un videogame',3000);
    } else {
       
        dispatch(getVideogameName(name));//name es lo q está escribiendo el usuario
        setName('');
    }
};
  return (
    <div>
         <form onSubmit={(e) => handleSubmit(e)}>
        <div className={style.search_container}>
            <input className={style.search}
            type = 'text'
            value = {name}
            placeholder='Buscar Juego ...'
            onChange={(e) => handleInputChange(e)} 
            />
            
            <button className={ style.button_search} type='submit'> <span className={style.busqueda}> 🔎 </span> </button>
          
        </div>
        </form>
    </div>
  )
}

export default Search

