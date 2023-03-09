
import style from './FiltratePaginate.module.css'
import React from 'react'


//import CardsVideogames from '../../Components/CardsVideogames/CardsVideogames'
//{ videogamesPerPage, allVideogames, paginado}
export default function FiltratePaginate({videogamesPerPage, allVideogames, paginado}) {


//============================Primera parte del paginado (Logica)==============================================

  /*   const [currentPage, setCurrentPage] = useState(1) //estado local . pag 1 xq siempre arranca desde la 1er pagina//guardame la pag actual y una const q me setee la pag actual
    const [videogamesPerPage, setVideogamesPerPage] = useState(15)//otro estado local//setear los videojuegos por pagina//guardar ctos videosjuegos quiero por pagina
    const [orden, setOrden] = useState('') //estado local de asc y desc que arranca vacio
    
    const indexOfLastVideogame = currentPage * videogamesPerPage // 1 * 15 = 15
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage // 0
    const currentVideogames = allVideogames.slice(indexOfFirstVideogame, indexOfLastVideogame)//videogames de la pagina actual
    
    


    const paginado = (pageNumber) => {   //me va a ayudar al renderizado
    setCurrentPage(pageNumber)
    }   */


    const pageNumbers = [] //declaro un arreglo vacio

    for (let i = 1; i <= Math.ceil(allVideogames/videogamesPerPage); i++) { //todos los videojuegos dividido los videojuegos por pag que quiero
        pageNumbers.push(i)   //lo guardo en pageNumbers
    }



    return (
        <div className={style.pagination_container}>
                { pageNumbers && pageNumbers.map(number => (
                    <a key={number} href onClick={() => paginado(number)}>{number}</a>
                  ))}
        </div>

       
    )


}