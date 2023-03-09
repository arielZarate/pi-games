/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React,{useEffect } from 'react'
import Card from '../Card/Card'
import style from './CardsVideogames.module.css';
import {useDispatch}from 'react-redux'
import {getVideogames}from '../../Redux/Actions/actions_videogames';
import NavBar from '../NavBar/NavBar';
import Loader from '../../Views/Loader/Loader';
import {filterVideogamesByGenre, filterCreated, orderByName, orderByRating}from '../../Redux/Actions/actions_videogames' ;
//========paginado=================

import {useState} from 'react'
import { useSelector } from 'react-redux';
import FiltratePaginate from '../Paginate All/FiltrateByPaginate/FiltratePaginate';
//==============================
function CardsVideogames() {
const dispatch = useDispatch() ;       


//=========================paginado==================================================
const allVideogames= useSelector(state=>state.videogames)



 const [currentPage, setCurrentPage] = useState(1) //estado local . pag 1 xq siempre arranca desde la 1er pagina//guardame la pag actual y una const q me setee la pag actual
const [videogamesPerPage, setVideogamesPerPage] = useState(15)//otro estado local//setear los videojuegos por pagina//guardar ctos videosjuegos quiero por pagina
const [order, setOrder] = useState('') //estado local de asc y desc que arranca vacio
const indexOfLastVideogame = currentPage * videogamesPerPage // 1 * 15 = 15
const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage // 0


//slices me corta un array y me muestra lo que le paso por indices
const currentVideogames = allVideogames.slice(indexOfFirstVideogame, indexOfLastVideogame)//videogames de la pagina actual
const paginado = (pageNumber) => {   //me va a ayudar al renderizado
  setCurrentPage(pageNumber)
  }  
  

//=================================================================================


useEffect(()=>{
   dispatch(getVideogames())
},[dispatch])


if(!allVideogames.length) {
  return <Loader/>;
}

const handleSort=(e)=>{ //dispatch del asc y desc
  dispatch(orderByName(e.target.value)); //seteame la pagina a la 1ra
  setCurrentPage(1)
  setOrder(e.target.value); 
 
   };
 
   function handleFilterGenre(e){
    dispatch(filterVideogamesByGenre(e.target.value));    
   setCurrentPage(1);
   setOrder(e.target.value); 
   };
  


 const handleFilterCreated=(e)=>{
   dispatch(filterCreated(e.target.value));
   setCurrentPage(1);
   setOrder(e.target.value); 
   }; 
 
   const handleRating=(e)=> {
 
   dispatch(orderByRating(e.target.value));
    setCurrentPage(1);
   setOrder(e.target.value); 

   } 

   

  return (
     <div>
      <NavBar
        handleSort={handleSort}
        handleRating={handleRating}
        handleFilterCreated={handleFilterCreated}
        handleFilterGenre={handleFilterGenre} 
      
      />
                
       <div className={style.pagination}>
            <FiltratePaginate
                 videogamesPerPage={videogamesPerPage}
                allVideogames={allVideogames.length} 
                paginado={paginado} 
            />
          </div>

            <div className={style.container}> {
              currentVideogames.map((v)=>{
                let genre=v.genres.map(g=> g)
                    return (
                        <div >
                        <Card  
                          id={v.id}
                          name={v.name}
                          image={v.image}
                          genres={genre}   
                          /> 
                        </div> 
                    )})}
            </div>
    </div>  
    )
  }

export default CardsVideogames;
