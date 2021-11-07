import React from 'react';
import { useDispatch } from 'react-redux';
import { searchMovieByName } from '../../Actions/index'
import './SearchBar.css';

export function Search() {
    const dispatch = useDispatch();
    
    const handleInputChange = (e) => { // Manipular cambios en el input al suceder un evento
        const value = e.target.value;
        if(value) {
            dispatch((searchMovieByName(value)))
        }
        console.log("target value del inputChange: ", e.target.value)
    };  
    return (
        <div>
        <form>
            <input type="search" placeholder="Search movie" className="SearchBar"
            onChange={(e) => handleInputChange(e)} ></input>
        </form>
        </div>
    )
};


export default Search;