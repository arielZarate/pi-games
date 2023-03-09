import React from "react";
import { Link, useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";

import {getDetails}from '../../Redux/Actions/actions_videogames'

import  '../Detail/Detail.css'

export default function Detail(){
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getDetails(id));   
    },[id, dispatch]);

    const detail = useSelector((state) => state.detail);

  /* comentario p`rueba */
    console.log(detail)
    return (
        <div className="container">
        
     
            <div className="detail_container">
                <h4 className="title" >{detail.name}</h4>
               {/*  <p className="">codigo: {detail.id}</p> */}
                <img className='imagen p' src = {detail.image} height="240px" width='470px' alt='not found'/>
                 <p className="p"> <span className="text color">Fecha de lanzamiento</span> <span className="text ">{detail.released}</span></p>
                <p className="p">
                 <span className="text_block color">Plataformas</span> <span className="text "> {detail.platforms?.map(p => p).join(" ")}</span>
               </p > 
                <p className="p">  <span className="text color">Generos</span>  <span className="text">{detail.genres?.map(g => g).join("  |  ")}</span> </p> 
                 <p className="p"> <span className="color text">Puntuacion:</span> <span className="text">{detail.rating}</span> </p>
                <p className="p"> <span className="text_block color">Descripcion</span><span className="text">{detail.description || detail.description_raw }</span></p>
                <p className="created ">{detail.createdInDb===true?"CREADO EN DB":" CREADO POR LA API"} </p>
            </div> 

            <div className="contenedorBoton">
                 <Link  to={'/home'} >
            
                <button className="botonVolver">VOLVER</button>
              
            </Link>
            </div> 
                 
         
        </div> 
             
            
    

    
    )

}
