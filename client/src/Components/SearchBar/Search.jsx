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
   // e.preventDefault()
    setName(e.target.value);
    
}    

/* function handleSubmit(e){
    e.preventDefault()
    if(!name.length){
      
         ShowNotification('info','Videogames','Por favor ingresa un videogame',3000);
    } else {
       
        dispatch(getVideogameName(name));//name es lo q está escribiendo el usuario
        setName('');
    }
}; */

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));

  return (
    <div>
          <Search>
              <SearchIconWrapper>
                  <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
              />
          </Search>
    </div>
  )
}

export default Search

