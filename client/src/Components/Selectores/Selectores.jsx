import React,{useEffect} from 'react'
import { getGenres } from '../../Redux/Actions/actions_genres';
import style from './Selectores.module.css'
import { useSelector ,useDispatch} from 'react-redux';




 
function Selectores({handleRating, handleSort, handleFilterCreated,handleFilterGenre}) {
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const genres = useSelector((state)=>state.genres); 



    //========================Logica del filtrado que pasa por props===========================================

  return (
 <div  className={style.select_container}>
        <select className={style.select} onChange={(e)=>handleSort(e)}>
                    <option>Orden</option>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
            </select>

        <select className={style.select} onChange={(e) => handleRating(e)}>
                    <option>Puntuacion</option>
                    <option value="Alto">Alto</option>
                  {/*   <option value="Medio">Medio</option> */}
                    <option value="Bajo">Bajo</option>
            </select> 

 
            <select className={style.select} onChange={(e) => handleFilterCreated(e)}> 
                    <option>Origen</option>
                    <option value='All'>Todos</option>
                    <option value='Created'>Creados</option>
                    <option value='Api'>Existentes</option>
            </select>        
            
  
            <select className={style.select} onChange={(e) => handleFilterGenre(e)}>
                    <option value='All'>Generos</option>
                    {/* <option >Todos</option> */}
                     {genres.map(g => (
                        <option key={g.name} value={g.name}>{g.name}</option>
                     ))} 
            </select> 
    </div> 
  )
}

export default Selectores
