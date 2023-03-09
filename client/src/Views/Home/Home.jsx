import React from 'react'
import CardsVideogames from '../../Components/CardsVideogames/CardsVideogames'
import Loader from '../Loader/Loader'
import style from './Home.module.css'

function Home() {
  return (
    <div className={style.home_container}>
  {/*       <Loader/> */}

  
      <CardsVideogames/> 
    </div>
  )
}

export default Home
