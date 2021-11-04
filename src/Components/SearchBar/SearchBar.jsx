import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './SearchBar.css';

export function Search() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleInputChange = (e) => { // Manipular cambios en el input al suceder un evento
        e.preventDefault();
        setName(e.target.value)
        console.log(e.target.value)
    };
    
    const handleClick = (e) => { // Resolver click (buscar)
        e.preventDefault();
        dispatch()
    };
    return (

        <div>
        <form>
            <input type="search" placeholder="Insert a name" className="SearchBar"
            onChange={(e) => handleInputChange(e)}></input>
            <button className="buttonSearch" type="submit" value="Buscar"
            onClick={(e) => handleClick(e)}> Search </button>
        </form>
        </div>
    )
};


export default Search;