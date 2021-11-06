import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies, searchMovieByName } from '../../Actions/index'
import './SearchBar.css';

export function Search() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    

    
    const handleInputChange = (e) => { // Manipular cambios en el input al suceder un evento
        dispatch((searchMovieByName(e.target.value ? e.target.value : getMovies())))
        setName(e.target.value)
        console.log(e.target.value)
    };
    
    return (

        <div>
        <form>
            <input type="search" placeholder="Insert a name" className="SearchBar"
            onChange={(e) => handleInputChange(e)} dispatch={(e) => searchMovieByName(e.target.value)}></input>
        </form>
        </div>
    )
};


export default Search;