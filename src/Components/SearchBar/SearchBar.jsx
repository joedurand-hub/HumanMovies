import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies, searchMovieByName } from '../../Actions/index'
import './SearchBar.css';

export function Search() {
    const dispatch = useDispatch();



    const handleInputChange = (e) => { // Manipular cambios en el input al suceder un evento
        const value = e.target.value;
        if(value.length > 1) {
            dispatch((searchMovieByName(value)))
        }
        if(value.length === 0) {
            dispatch(getMovies())
        }
        console.log("target value del inputChange: ", e.target.value)
    };  
    
    return (

        <div>
        <form>
            <input type="search" placeholder="Insert a name" className="SearchBar"
            onChange={(e) => handleInputChange(e)} ></input>
        </form>
        </div>
    )
};


export default Search;