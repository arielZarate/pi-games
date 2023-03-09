import React ,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {  useSelector,useDispatch } from 'react-redux';
import style from '../VideogameForm/VideogameCreateUpdate.module.css';
import {getGenres} from '../../Redux/Actions/actions_genres';
import {getPlatforms} from '../../Redux/Actions/actions_platforms';
import { postVideogame } from '../../Redux/Actions/actions_videogames';
import {ShowNotification} from '../Toast/ShowNotification'


export default function VideogameCreateUpdate(){
    //==============variables y constantes===============================
    const history = useHistory();
    const dispatch = useDispatch();

    
    const genres = useSelector((state) => state.genres); 
    const platforms = useSelector((state) => state.platforms); 
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
             name: '',
            image:'',
            description: '',
            released: '',
            rating: '',
            genres: [],
            platforms: [],

        })
  //==============useEfect=======================
   useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms());
      }, [dispatch]);

  //============================================



const validate=(input)=>{
    let errors = {};
    if(!input.name.trim()) {
       errors.name = 'Escriba un nombre,por favor';
    } 
    if(!input.description.trim()) {
       errors.description = 'Escriba una descripcion, por favor';
    }
    if(!input.image.trim()) {
       errors.image = 'Escriba una URL, por favor';
    }
    if(!input.released.trim()) {
       errors.released = 'Seleccione una fecha de lanzamiento, por favor';
    }
   
    /* if(input.platforms.length===0) {
           errors.platforms = 'Seleccione una plataforma, por favor';
    } */
  /*   if(input.genres.length===0 ||input.platforms.length===0) {
           errors.genres = 'Seleccione plataforma y/o generos por favor';
    } */
    if(!input.rating.trim()) {
           errors.rating = 'Seleccione una puntuacion, por favor';
    }
    return errors; 
 }  


/* 
 const validate = (input) => {
   
    if (!input.target.name) {
        return `Ingrese el campo ${input.target.name}` ;
    }
    if (input.length ===0) {
      return 'Debe Seleccionar una opcion  ';
    }
    return '';
  }; */


 //================handlerChange======================
 const handleChange=(event)=>{
    setInput({
        ...input,
        [event.target.name] : event.target.value 
    })    
 
//recibe los mismos datos que el input
  setErrors(validate({
       ...input,
        [event.target.name]: event.target.value
    })); 
 
}



const handleSubmit=(e)=>{
    e.preventDefault();
    if(Object.keys(errors).length === 0){
    dispatch(postVideogame(input));
    ShowNotification('success','Creacion','Se ha creado el videogame',3000);
   setTimeout(()=>{
    setInput({ 
     name: '',
      image:'',
      description: '',
      released: '',
      rating: '',
      genres: [],
      platforms: [],
  }); 

  history.push("/home");
   },3000);
  
  }
      
    else {
        setInput({ 
            name: '',
            image:'',
            description: '',
            released: '',
            rating: '',
            genres: [],
            platforms: [],
        }); 
        setErrors({});
     ShowNotification('error','Creacion',"No se ha creado el videogame",3000);
 
    } 
}



 //===========================================================================
    const handleSelectGenre=(e)=>
         setInput({
            ...input,
            genres: [...input.genres, e.target.value],
        }) 
    

 const handleSelectPlatform=(e)=>
        setInput({
            ...input,
            platforms: [...input.platforms, e.target.value]
        })


const handleDeleteGenre=(genero)=>
        setInput({
            ...input, //me traigo el estado anterior
            genres: input.genres.filter(g => g !==genero), //filtrar por todo lo que NO sea ese elemento 
            })

         //================inicio del html del formualrio=============================   
    return(
        <>
        <div className={style.container}>

            <h2 className={style.title}>Creacion de Videogames</h2>
            <form className={style.form_container}onSubmit={(e)=>handleSubmit(e)} >
                <div className={style.input_container}>
                   <input  className={style.input}
                    placeholder='Nombre de Videogame'
                    type= 'text'
                    value= {input.name}
                    name= 'name'
                    onChange={(e) => handleChange(e)}
                    />
                     {errors.name && (
                     <div className={style.error} >
                        {errors.name}
                    </div>
                     )} 
                </div>
                <div className={style.input_container}>
                   <input  className={style.input}
                    placeholder='ingrese la url de una imagen'
                    type="url"
                    value= {input.image}
                    name= 'image'
                    alt= 'not found'
                    width="300px"
                    onChange={(e) => handleChange(e)}
                    />

                    {errors.image && (
                        <p className={style.error}>{errors.image}</p>
                    )} 
                </div>
                <div  >
                    <textarea  
                    className={style.input_textArea}
                        rows={3}
                        cols={40}
                         placeholder='Ingrese una descripcion del videogame'
                        value= {input.description}
                        name= 'description'
                        onChange={(e) => handleChange(e)} />
                         {errors.description && (
                        <p className={style.error}>{errors.description}</p>
                    )} 
                </div>


                {/* ========================block container=============================== */}
                <div className={style.block_container} >
                <label className={style.text_released}>Fecha de lanzamiento </label>
                <input 
                    className={style.input_released} 
                         type= 'date'
                         value= {input.released}
                         name= 'released'
                         onChange={(e) => handleChange(e)}
                    />
                       
                <div div className={style.input_container}>
                <label className={style.text_rating}>Puntuacion </label>
                    <input className={style.input_rating}
                    placeholder='max 5'
                    type='number'
                    value= {input.rating}
                    min={1}
                    max={5}
                    name= 'rating'
                    onChange={(e) => handleChange(e)}
                    />
                </div>

                </div>
                {errors.released && (
                        <p className={style.error}>{errors.released}</p>
                    )}  
                          {errors.rating && (
                        <p className={style.error}>{errors.rating}</p>
                    )}  

                {/* ========================fin de block container========================================= */}
                <div className={style.input_container}>
                  {/*   <label className='platforms'>Plataformas:  </label> */}
                    <select className={style.input_array} onChange={handleSelectPlatform}>
                        <option>Seleccione una plataforma</option>
                        {platforms.map(p => (
                        <option key={p} value={p}>{p}</option>
                        ))}</select>
                            
                </div>
               <div>
                        {/*  {errors.platforms && (
                            <p className={style.error}>{errors.platforms}</p>
                         )}   */}
               </div>

                <div className={style.input_container}>
                 {/*    <label className='genres'>Genero </label> */}
                    <select className={style.input_array} onChange={(e) => handleSelectGenre(e)}>
                    <option>Seleccione un genero</option> 
                        {genres.map(g => (
                       
                        <option key={g.name} value={g.name}>{g.name}</option>
                     ))}
                    </select>
                  
                </div>

                {(errors.genres || errors.platforms) &&  (
                      <p className={style.error}>{errors.genres} </p>
                     )}  

                {/* hanlder delete */}
                <div className={style.input_container_genre}>
                    {input.genres.map(g => 
                    <div className={style.input_delete}>
                     <label className=''>{g}</label>
                    <button className={style.boton_x} onClick={() => handleDeleteGenre(g)}> <span className={style.x}>X</span> </button>  
                    </div>
                  )} 
                </div>

                
                <div>
                  <button  className={style.botonCrear} disabled={!input.name || !input.image ||!input.description || !input.released ||!input.rating || !input.platforms.length ||!input.genres.length } type='submit'>CREATE</button>
                </div>
            </form>
                <div className={style.boton_container}>
                 <Link  to={'/home'} >
                <button className={style.boton_volver} >VOLVER</button>
                 </Link>
            </div>
           
           
        </div>
    </>
  )
}    
